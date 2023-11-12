package com.paranthaman.vendormanagementsystem.dto.response;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.paranthaman.vendormanagementsystem.model.Employee;

import jakarta.persistence.CascadeType;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;

public class ServiceDTO {
    private String sid;
    private List<String> paymentPolicy = new ArrayList<>();
    private String serviceAvailability;
    private String serviceCost;
    private String serviceDescription;
    private String serviceDuration;
    private String serviceName;
    private String serviceOwner;
    private String serviceStatus;
    private String serviceType;
    private String address;
    private String certificate;
    private String contact;
    private String dateOfBirth;
    private String dateOfStart;
    private String email;
    private String noOfEmployees;
    private String createdBy;  
     private Date createdAt;
    private Date updatedAt;

    @OneToMany(mappedBy = "serviceModel", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Employee> employees = new ArrayList<>();

}