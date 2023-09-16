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

import com.server.service.EmailService;

import jakarta.mail.MessagingException;

@RestController
@RequestMapping("/otp")
@CrossOrigin
public class OtpController {

    @Autowired
    private EmailService emailService;

    @GetMapping("/send-otp")
    public ResponseEntity<String> sendOtp(@RequestParam String email,@RequestParam(defaultValue = "Partner") String name) throws IOException {
        String otp = generateRandomOtp();

        try {
            emailService.sendOtpEmail(email,name, otp);
            return ResponseEntity.ok(otp);
        } catch (MessagingException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send OTP");
        }
    }

    private String generateRandomOtp() {
        return String.valueOf((int) (Math.random() * 900000) + 100000);
    }
}
