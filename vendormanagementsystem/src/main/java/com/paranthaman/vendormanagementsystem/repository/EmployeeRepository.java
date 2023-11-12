package com.paranthaman.vendormanagementsystem.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.paranthaman.vendormanagementsystem.model.Employee;

public interface EmployeeRepository extends CrudRepository<Employee,String>{

    
}
