package com.server.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.server.model.Vendor;

@Repository
public interface VendorRepository extends CrudRepository<Vendor, String> {

    Vendor findByEmail(String email);

    ArrayList<Vendor> findAllByVerified(boolean b);
}
