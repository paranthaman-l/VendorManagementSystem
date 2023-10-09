package com.paranthaman.vendormanagementsystem.controller;


import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.paranthaman.vendormanagementsystem.constant.Api;
import com.paranthaman.vendormanagementsystem.dto.request.SignUpOtp;
import com.paranthaman.vendormanagementsystem.model.User;
import com.paranthaman.vendormanagementsystem.repository.UserRepository;
import com.paranthaman.vendormanagementsystem.service.EmailService;
import com.paranthaman.vendormanagementsystem.util.APIResponse;

import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.OTP)
@CrossOrigin(value = Api.FRONTEND)
@RequiredArgsConstructor
public class OtpController {

    private final EmailService emailService;
    private final UserRepository userRepository;

    @PostMapping("/signup/send-otp")
    public ResponseEntity<APIResponse> sendOtpForSignUp(@RequestBody SignUpOtp signUpOtp) throws IOException {
        User isExistEmail = userRepository.findByEmail(signUpOtp.getEmail()).orElse(null);
        if (isExistEmail==null) {
            try {
                String otp = generateRandomOtp();
                APIResponse apiResponse = emailService.sendOtpEmailForSignUP(signUpOtp.getEmail(), signUpOtp.getName(), otp);
                return ResponseEntity.status(apiResponse.getStatus()).body(apiResponse);
            } catch (MessagingException e) {
                APIResponse apiResponse = new APIResponse();
                apiResponse.setStatus(500);
                apiResponse.setError("Failed to send OTP");
                return ResponseEntity.status(apiResponse.getStatus()).body(apiResponse);
            }
        }
        APIResponse apiResponse = new APIResponse();
        apiResponse.setError("Already Registered email address");
        return ResponseEntity.status(apiResponse.getStatus()).body(apiResponse);
    }

    @GetMapping("/forgetPwd/send-otp")
    public ResponseEntity<APIResponse> sendOtpForForgetPassword(@RequestParam String email) throws IOException {
        User isExistEmail = userRepository.findByEmail(email).orElse(null);
        if (isExistEmail!=null) {
            try {
                String otp = generateRandomOtp();
                APIResponse apiResponse = emailService.sendOtpEmailForForgetPassword(email, isExistEmail.getName(), otp);
                return ResponseEntity.status(apiResponse.getStatus()).body(apiResponse);
            } catch (MessagingException e) {
                APIResponse apiResponse = new APIResponse();
                apiResponse.setStatus(500);
                apiResponse.setError("Failed to send OTP");
                return ResponseEntity.status(apiResponse.getStatus()).body(apiResponse);
            }
        }
        APIResponse apiResponse = new APIResponse();
        apiResponse.setError("Email not found in the database");
        return ResponseEntity.status(apiResponse.getStatus()).body(apiResponse);
    }

    private String generateRandomOtp() {
        return String.valueOf((int) (Math.random() * 900000) + 100000);
    }
}
