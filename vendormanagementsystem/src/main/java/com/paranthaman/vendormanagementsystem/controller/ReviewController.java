package com.paranthaman.vendormanagementsystem.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.paranthaman.vendormanagementsystem.model.ReviewModel;
import com.paranthaman.vendormanagementsystem.service.ReviewService;

public class ReviewController {
    @Autowired
    private ReviewService reviewService;
    @GetMapping("/getAll")
    public ResponseEntity<?> getAllReview() {
        ArrayList<ReviewModel> Review = reviewService.getAllReview();
        return ResponseEntity.ok().body(Review);
    }

    @PostMapping("/postReview")
    public ResponseEntity<?> addReview(@RequestBody ReviewModel reviewModel) {
        String res = reviewService.addReview(reviewModel);
        return ResponseEntity.ok().body(res);
    }

    @PutMapping("/putReview")
    public ResponseEntity<?> putReview(@RequestParam String rid, @RequestBody ReviewModel reviewModel) {
        Boolean flag = reviewService.putReview(rid, reviewModel);
        if (flag)
            return ((BodyBuilder) ResponseEntity.ok()).body("Updated Successfully");
        return ((BodyBuilder) ResponseEntity.notFound()).body("Review Id Not Found");
    }

    @DeleteMapping("/deleteReview")
    public ResponseEntity<?> deleteReview(@RequestParam String rid) {
        Boolean flag = reviewService.deleteReview(rid);
        if (flag)
            return ((BodyBuilder) ResponseEntity.ok()).body("Deleted Successfully");
        return ((BodyBuilder) ResponseEntity.notFound()).body("Review Id Not Found");
    }
}
