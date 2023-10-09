package com.paranthaman.vendormanagementsystem.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paranthaman.vendormanagementsystem.model.User;

public interface UserRepository extends JpaRepository<User, String> {

    Optional<User> findByEmail(String username);

}