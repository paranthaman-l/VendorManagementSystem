package com.paranthaman.vendormanagementsystem.model;

import java.util.Date;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Getter
@Setter
@Builder
@Table(name = "service")
public class ServiceModel {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String sid; // A unique identifier for each service
    private String serviceName; // The name or title of the service
    private String serviceDescription; // The name or title of the service
    private String serviceType; // The category or type of service (e.g., IT support, consulting, maintenance).
    private String serviceOwner;// The individual or department responsible for delivering or managing the
                                // service
    private String serviceStatus; // The current status of the service (e.g., active, inactive, in progress)
    private String serviceCost; // The cost associated with the service, if applicable
    private String serviceDuration; // The expected duration or time required to complete the service
    private String serviceAvailability; // The days and hours when the service is available

    private String createdBy;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "vid")
    private Vendor vendor;

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
