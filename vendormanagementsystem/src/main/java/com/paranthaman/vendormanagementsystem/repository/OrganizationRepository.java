package com.paranthaman.vendormanagementsystem.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.paranthaman.vendormanagementsystem.model.Organization;
import com.paranthaman.vendormanagementsystem.model.Vendor;

public interface OrganizationRepository extends CrudRepository<Organization, String> {

    List<Organization> findAllByIsVerified(Boolean verified);

}
