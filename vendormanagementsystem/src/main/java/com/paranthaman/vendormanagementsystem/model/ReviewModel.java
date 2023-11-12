package com.paranthaman.vendormanagementsystem.model;

import java.util.Date;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
@Table(name = "review")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "rid")
public class ReviewModel {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String rid;
    private String review;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_vid", referencedColumnName = "vid")
    private Vendor manyToOneVendor;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "vid", referencedColumnName = "vid")
    private Vendor vendor;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "oid", referencedColumnName = "oid")
    private Organization organization;

    @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false, updatable = false)
    private Date createdAt;

    @LastModifiedDate
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = true)
    private Date updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = new Date();
    }
}
