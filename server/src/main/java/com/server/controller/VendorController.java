package com.server.controller;

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

import com.server.dto.LoginDTO;
import com.server.dto.VendorDTO;
import com.server.model.Vendor;
import com.server.service.VendorService;
import com.server.util.APIResponse;

@RestController
@RequestMapping("/vendors")
@CrossOrigin
public class VendorController {
    @Autowired private VendorService vendorService;
    
    @GetMapping("")
    public String index(){
        return "Welcome to Vendor Controller";
    }
    
    @PostMapping("/signup")
    public ResponseEntity<APIResponse> signup(@RequestBody Vendor Vendor) throws IOException {        
        APIResponse apiResponse = vendorService.signup(Vendor);
        return ResponseEntity.status(apiResponse.getStatus()).body(apiResponse);
    }
    
    @PostMapping("/login")
    public ResponseEntity<APIResponse> login(@RequestBody LoginDTO loginDTO) {
        APIResponse apiResponse = vendorService.login(loginDTO.getEmail(), loginDTO.getPassword());
        return ResponseEntity.status(apiResponse.getStatus()).body(apiResponse);
    }

    @GetMapping("/by")
    public VendorDTO getVendor(@RequestParam String vid) {
        return vendorService.getVendor(vid);
    }

    @GetMapping("/updatePwd")
    public ResponseEntity<APIResponse> updatePwd(@RequestParam String email,@RequestParam String password){
        APIResponse apiResponse = vendorService.updatePwd(email,password);
        return ResponseEntity.status(apiResponse.getStatus()).body(apiResponse);
    }
}
