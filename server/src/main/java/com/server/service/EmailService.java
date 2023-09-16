package com.server.service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendOtpEmail(String recipientEmail,String name, String otp) throws MessagingException,IOException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo(recipientEmail);
        helper.setSubject("OTP Verification");

        String templatePath = "templates/otp_email.html";
        Resource resource = new ClassPathResource(templatePath);
        String content = new String(Files.readAllBytes(Paths.get(resource.getURI())), StandardCharsets.UTF_8);
        content = content.replace("[Name]", name);
        content = content.replace("[OTP]", otp);
        helper.setText(content, true);
        javaMailSender.send(message);
    }
}