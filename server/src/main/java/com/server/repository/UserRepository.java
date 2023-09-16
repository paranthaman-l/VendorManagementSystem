package com.server.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.server.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, String> {

    User findByEmail(String email);
}
