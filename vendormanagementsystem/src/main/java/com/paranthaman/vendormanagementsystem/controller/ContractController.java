package com.paranthaman.vendormanagementsystem.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.paranthaman.vendormanagementsystem.constant.Api;
import com.paranthaman.vendormanagementsystem.model.ContractModel;
import com.paranthaman.vendormanagementsystem.service.ContractService;

@RestController
@RequestMapping(Api.CONTRACT)
public class ContractController {
    
    @Autowired
    private ContractService contractService;

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllContracts(){
        ArrayList<ContractModel> contracts = contractService.getAllContracts();
        return ResponseEntity.ok().body(contracts);
    }

    @PostMapping("/postContract")
    public ResponseEntity<?> addContract(@RequestBody ContractModel serviceModel) {
        String res = contractService.addContract(serviceModel);
        return ResponseEntity.ok().body(res);
    }

    @PutMapping("/putContract")
    public ResponseEntity<?> putContract(@RequestParam String sid, @RequestBody ContractModel serviceModel) {
        Boolean flag = contractService.putContract(sid, serviceModel);
        if (flag)
            return ((BodyBuilder) ResponseEntity.ok()).body("Updated Successfully");
        return ((BodyBuilder) ResponseEntity.notFound()).body("Contract Id Not Found");
    }

    @DeleteMapping("/deleteContract")
    public ResponseEntity<?> deleteContract(@RequestParam String sid) {
        Boolean flag = contractService.deleteContract(sid);
        if (flag)
            return ((BodyBuilder) ResponseEntity.ok()).body("Deleted Successfully");
        return ((BodyBuilder) ResponseEntity.notFound()).body("Contract Id Not Found");
    }
}
