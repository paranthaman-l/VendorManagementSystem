package com.server.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.server.model.Admin;

@Repository
public interface AdminRepository extends CrudRepository<Admin,String>{

    Admin findByEmail(String email);
    
}
