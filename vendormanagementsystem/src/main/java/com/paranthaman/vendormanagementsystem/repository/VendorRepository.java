package com.paranthaman.vendormanagementsystem.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.paranthaman.vendormanagementsystem.model.Vendor;

public interface VendorRepository extends CrudRepository<Vendor, String> {

    List<Vendor> findAllByIsVerified(Boolean verified);

}
