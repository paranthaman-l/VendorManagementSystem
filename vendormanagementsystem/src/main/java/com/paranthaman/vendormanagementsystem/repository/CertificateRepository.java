package com.paranthaman.vendormanagementsystem.repository;

import org.springframework.data.repository.CrudRepository;

import com.paranthaman.vendormanagementsystem.model.CertificationModel;

public interface CertificateRepository extends CrudRepository<CertificationModel,String> {
    
}
