package com.paranthaman.vendormanagementsystem.repository;

import org.springframework.data.repository.CrudRepository;

import com.paranthaman.vendormanagementsystem.model.ReviewModel;

public interface ReviewReipository extends CrudRepository<ReviewModel,String> {
    
}
