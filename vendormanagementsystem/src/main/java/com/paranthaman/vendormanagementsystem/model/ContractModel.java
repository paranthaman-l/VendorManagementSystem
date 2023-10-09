package com.paranthaman.vendormanagementsystem.model;

import java.math.BigDecimal;
import java.util.Date;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
@Table(name = "contract")
public class ContractModel {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String cid; // A unique identifier for each contract

    private String contractTitle; // A brief title or name for the contract
    private String contractDescription; // A more detailed description of the contract, outlining its purpose, terms,
                                        // and conditions.
    private String startDate; // The date when the contract becomes effective
    private String endDate; // The date when the contract expires or is terminated
    private BigDecimal contractValue; // The monetary value of the contract, if applicable
    private String paymentTerms; // Details about how payments will be made, such as the frequency and method of
                                 // payment.
    private String contractStatus; // A field indicating the current status of the contract (e.g., active, expired,
                                   // terminated).

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "vid", referencedColumnName = "vid")
    private Vendor vendor;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "oid", referencedColumnName = "oid")
    private Organization organization;

    private String createdBy;
    private String updatedBy;

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
