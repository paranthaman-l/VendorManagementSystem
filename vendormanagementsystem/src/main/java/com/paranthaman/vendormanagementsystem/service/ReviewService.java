package com.paranthaman.vendormanagementsystem.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paranthaman.vendormanagementsystem.model.ReviewModel;
import com.paranthaman.vendormanagementsystem.repository.ReviewReipository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReviewService {
     @Autowired
    private ReviewReipository reviewReipository;

    public ArrayList<ReviewModel> getAllReview() {
        ArrayList<ReviewModel> services = (ArrayList<ReviewModel>) reviewReipository.findAll();
        return services;
    }

    public String addReview(ReviewModel reviewModel) {
        reviewReipository.save(reviewModel);
        return "Service Added Successfully";
    }

    public Boolean putReview(String sid, ReviewModel reviewModel) {
        Boolean isExists = reviewReipository.findById(sid).isPresent();
        if (!isExists)
            return false;
        ReviewModel storedReviewModel = reviewReipository.findById(sid).get();
        ReviewModel newReviewModel = updateReviewModel(storedReviewModel, reviewModel);
        reviewReipository.save(newReviewModel);
        return true;
    }

    public Boolean deleteReview(String sid) {
        Boolean isExists = reviewReipository.findById(sid).isPresent();
        if (!isExists)
            return false;
        reviewReipository.deleteById(sid);
        return true;
    }

    public ReviewModel updateReviewModel(ReviewModel storedReviewModel, ReviewModel reviewModel) {
        var newReviewModel = ReviewModel.builder().build();
        
        return newReviewModel;
    }

}
