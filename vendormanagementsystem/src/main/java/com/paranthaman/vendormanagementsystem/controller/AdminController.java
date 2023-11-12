package com.paranthaman.vendormanagementsystem.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.paranthaman.vendormanagementsystem.constant.Api;
import com.paranthaman.vendormanagementsystem.dto.request.UpdateImageDTO;
import com.paranthaman.vendormanagementsystem.dto.request.UpdateNameDTO;
import com.paranthaman.vendormanagementsystem.dto.response.AdminDTO;
import com.paranthaman.vendormanagementsystem.dto.response.DashBoardCount;
import com.paranthaman.vendormanagementsystem.model.Admin;
import com.paranthaman.vendormanagementsystem.model.Organization;
import com.paranthaman.vendormanagementsystem.model.Vendor;
import com.paranthaman.vendormanagementsystem.service.AdminService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.ADMIN)
@RequiredArgsConstructor
@Tag(name = "Admin")
@CrossOrigin(value = Api.FRONTEND)
public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping
    public ResponseEntity<String> welcome() {
        return ResponseEntity.ok().body("Hello Admin");
    }

    
    @GetMapping("/byAid")
    public Admin getAdmin(@RequestParam String aid) {
        return adminService.getAdmin(aid);
    }

    @GetMapping("/getVendors")
    public List<Vendor> getPendingVendors(@RequestParam Boolean verified) {
        return adminService.getVendors(verified);
    }
    @GetMapping("/getOrganizations")
    public List<Organization> getOrganizations(@RequestParam Boolean verified) {
        return adminService.getOrganizations(verified);
    }

    @GetMapping("/getCount")
    public DashBoardCount geCount(){
        return adminService.getCount();
    }

    @PutMapping("/updateName")
    public String updateName(@RequestBody UpdateNameDTO updateNameDTO) {
        return adminService.updateName(updateNameDTO);
    }
    
    @PutMapping("/updateProfile")
    public ResponseEntity<?> updateProfile(@RequestBody UpdateImageDTO updateImageDTO ) throws IOException{
        return ResponseEntity.ok().body(adminService.updateProfile(updateImageDTO));
    }

    @PutMapping("/updateBanner")
    public String updateBanner(@RequestBody UpdateImageDTO updateImageDTO ) throws IOException{
        return adminService.updateBanner(updateImageDTO);
    }
    
    @PutMapping("/approveVendor")
    public ResponseEntity<String> approveVendor(@RequestParam String vid) {
        return ResponseEntity.ok().body(adminService.approveVendor(vid));
    }

    @PutMapping("/approveOrganization")
    public ResponseEntity<String> approveOrganization(@RequestParam String oid) {
        return ResponseEntity.ok().body(adminService.approveOrganization(oid));
    }
    
}