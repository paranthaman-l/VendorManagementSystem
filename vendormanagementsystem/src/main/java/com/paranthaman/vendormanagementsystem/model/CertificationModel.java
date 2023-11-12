package com.paranthaman.vendormanagementsystem.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@ToString
@Table(name = "certificate")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "certificateId")
public class CertificationModel {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String certificateId;
    private String title;
    private String certificate;
    private String description;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "fk_vid", referencedColumnName = "vid")
    private Vendor vendor;
}