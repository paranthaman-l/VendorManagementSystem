package com.paranthaman.vendormanagementsystem.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paranthaman.vendormanagementsystem.constant.Api;
import com.paranthaman.vendormanagementsystem.dto.request.LoginDTO;
import com.paranthaman.vendormanagementsystem.dto.request.SignUpDTO;
import com.paranthaman.vendormanagementsystem.dto.request.TokenDTO;
import com.paranthaman.vendormanagementsystem.dto.response.AuthenticationResponse;
import com.paranthaman.vendormanagementsystem.service.AuthService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
@CrossOrigin(value = Api.FRONTEND)
@Tag(name = "Authentication")
public class AuthenticationController {

    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<String> register(@RequestBody SignUpDTO request) {
        boolean isRegistered = authService.userRegistration(request);
        return isRegistered ? ResponseEntity.ok("User registered successfully")
                : ResponseEntity.badRequest().body("Something went wrong!");
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody LoginDTO request) {
        return ResponseEntity.ok(authService.userAuthentication(request));
    }

    @PostMapping("/byToken")
    public ResponseEntity<AuthenticationResponse> authenticateByToken(@RequestBody TokenDTO tokenDTO) {
        return ResponseEntity.ok(authService.userAuthenticationByToken(tokenDTO));
    }

}
