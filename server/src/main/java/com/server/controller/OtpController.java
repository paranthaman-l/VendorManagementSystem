package com.server.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.server.dto.VendorDTO;
import com.server.model.Vendor;
import com.server.repository.VendorRepository;
import com.server.service.EmailService;
import com.server.service.VendorService;
import com.server.util.APIResponse;

import jakarta.mail.MessagingException;

@RestController
@RequestMapping("/otp")
@CrossOrigin
public class OtpController {

    @Autowired
    private EmailService emailService;
    @Autowired
    private VendorService vendorService;

    @GetMapping("/signup/send-otp")
    public ResponseEntity<APIResponse> sendOtpForSignUp(@RequestParam String email,
            @RequestParam(defaultValue = "Partner") String name) throws IOException {
        Boolean isExistEmail = vendorService.isExistEmail(email);
        if (!isExistEmail) {
            try {
                String otp = generateRandomOtp();
                APIResponse apiResponse = emailService.sendOtpEmailForSignUP(email, name, otp);
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
        Boolean isExistEmail = vendorService.isExistEmail(email);
        if (isExistEmail) {
            try {
                String otp = generateRandomOtp();
                VendorDTO vendor = vendorService.getVendorDTOByEmail(email);
                APIResponse apiResponse = emailService.sendOtpEmailForForgetPassword(email, vendor.getFirstName(), otp);
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
