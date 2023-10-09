package com.paranthaman.vendormanagementsystem.repository;

import org.springframework.data.repository.CrudRepository;

import com.paranthaman.vendormanagementsystem.model.ServiceModel;

public interface ServiceRepository extends CrudRepository<ServiceModel,String> {
    
}
