package com.paranthaman.vendormanagementsystem.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
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
import com.paranthaman.vendormanagementsystem.model.ServiceModel;
import com.paranthaman.vendormanagementsystem.service.ServiceService;

@RestController
@RequestMapping({ Api.VENDOR + Api.SERVICE, Api.ADMIN + Api.SERVICE })
@CrossOrigin(value = Api.FRONTEND)
public class ServiceController {
    @Autowired
    private ServiceService serviceService;

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllServices() {
        ArrayList<ServiceModel> services = serviceService.getAllServices();
        return ResponseEntity.ok().body(services);
    }

    @GetMapping("/getVendorServices")
    public List<ServiceModel> getVendorServices(@RequestParam String vid) {
        return serviceService.getVendorServices(vid);
    }

    @GetMapping("/getAllByIds")
    public ResponseEntity<?> getAllServicesByIds(@RequestParam List<String> ids) {
        ArrayList<ServiceModel> services = serviceService.getAllServicesByIds(ids);
        return ResponseEntity.ok().body(services);
    }

    @PostMapping("/postService")
    public ResponseEntity<?> addService(@RequestBody ServiceModel serviceModel,@RequestParam String vid) {
        String res = serviceService.addService(serviceModel,vid);
        return ResponseEntity.ok().body(res);
    }

    @PutMapping("/putService")
    public ResponseEntity<?> putService(@RequestBody ServiceModel serviceModel,@RequestParam String vid) {
        Boolean flag = serviceService.putService(vid,serviceModel);
        if (flag)
            return ((BodyBuilder) ResponseEntity.ok()).body("Updated Successfully");
        return ((BodyBuilder) ResponseEntity.notFound()).body("Service Id Not Found");
    }

    @DeleteMapping("/deleteService")
    public ResponseEntity<?> deleteService(@RequestParam String sid) {
        Boolean flag = serviceService.deleteService(sid);
        if (flag)
            return ((BodyBuilder) ResponseEntity.ok()).body("Deleted Successfully");
        return ((BodyBuilder) ResponseEntity.notFound()).body("Service Id Not Found");
    }

}