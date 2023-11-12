package com.contract.service.repository;

import org.springframework.data.repository.CrudRepository;

import com.contract.service.model.ServiceRequest;

public interface ServiceRequestRepository extends CrudRepository<ServiceRequest,String> {
    
}
