package com.server.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.dto.LoginDTO;
import com.server.dto.VendorDTO;
import com.server.model.Admin;
import com.server.service.AdminService;
import com.server.util.APIResponse;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
    @Autowired
    private AdminService adminService;
    @GetMapping("/")
    public String index(){
        return "Welcome to the Admin Controller";
    }

    @PostMapping("/signup")
    public ResponseEntity<APIResponse> signup(@RequestBody Admin admin) throws IOException {        
        APIResponse apiResponse = adminService.signup(admin);
        return ResponseEntity.status(apiResponse.getStatus()).body(apiResponse);
    }

    @PostMapping("/login")
    public ResponseEntity<APIResponse> login(@RequestBody LoginDTO loginDTO) {
        APIResponse apiResponse = adminService.login(loginDTO.getEmail(), loginDTO.getPassword());
        return ResponseEntity.status(apiResponse.getStatus()).body(apiResponse);
    }

    @GetMapping("/getPendingVendors")
    public ResponseEntity<APIResponse> getPendingVendors(){
        APIResponse apiResponse = adminService.getPendingVendors();
        return ResponseEntity.status(apiResponse.getStatus()).body(apiResponse);
    }
}
