package com.paranthaman.vendormanagementsystem.controller;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.paranthaman.vendormanagementsystem.constant.Api;
import com.paranthaman.vendormanagementsystem.dto.request.AddService;
import com.paranthaman.vendormanagementsystem.dto.request.UpdateImageDTO;
import com.paranthaman.vendormanagementsystem.model.CertificationModel;
import com.paranthaman.vendormanagementsystem.model.Employee;
import com.paranthaman.vendormanagementsystem.model.Vendor;
import com.paranthaman.vendormanagementsystem.service.VendorService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.VENDOR)
@RequiredArgsConstructor
@Tag(name = "Vendor")
@CrossOrigin(value = Api.FRONTEND)
public class VendorController {

    private final VendorService vendorService;

    @GetMapping
    public ResponseEntity<String> welcome() {
        return ResponseEntity.ok().body("Hello Vendor");
    }

    @GetMapping("/byVid")
    public Vendor getVendor(@RequestParam String vid) {
        return vendorService.getVendor(vid);
    }

    @PutMapping("/updateBanner")
    public String updateBanner(@RequestBody UpdateImageDTO updateImageDTO) throws IOException {
        return vendorService.updateBanner(updateImageDTO);
    }

    @PutMapping("/updateProfile")
    public String updateProfile(@RequestBody UpdateImageDTO updateImageDTO) throws IOException {
        return vendorService.updateProfile(updateImageDTO);
    }

    @PutMapping("/addService")
    public ResponseEntity<?> addService(@RequestBody AddService addService) {
        return ResponseEntity.ok().body(vendorService.addService(addService));
    }

    @PostMapping("/addEmployee")
    public ResponseEntity<?> addEmployee(@RequestBody Employee employee,@RequestParam String sid,@RequestParam String vid){
        return ResponseEntity.ok().body(vendorService.addEmployee(employee,sid,vid));
    }

    @GetMapping("/getAllEmployees")
    public ResponseEntity<?> getEmployees(@RequestParam String vid){
        return ResponseEntity.ok().body(vendorService.getAllEmployee(vid));
    }

    @GetMapping("/getAllCertificates")
    public ResponseEntity<?> getCertificates(@RequestParam String vid){
        return ResponseEntity.ok().body(vendorService.getAllCertificates(vid));
    }

    @PostMapping("/addCertificate")
    public ResponseEntity<?> addCertificate(@RequestParam String vid,@RequestBody CertificationModel certificationModel){
        return ResponseEntity.ok().body(vendorService.addCertificate(vid,certificationModel));
    }

    @DeleteMapping("/deleteCertificate")
    public ResponseEntity<?> deleteCertificate(@RequestParam String certificateId){
        return ResponseEntity.ok().body(vendorService.deleteCertificate(certificateId));
    }
}
