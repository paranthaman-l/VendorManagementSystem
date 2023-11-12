package com.contract.service.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "serviceRequest")
@AllArgsConstructor
@NoArgsConstructor
public class ServiceRequest {
    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private String sid;
    private String serviceName;
    private String description;

    private String vid;
}
