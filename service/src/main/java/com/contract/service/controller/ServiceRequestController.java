package com.contract.service.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/serviceRequest")
public class ServiceRequestController {
    @GetMapping("/")
    public String index(){
        return "Hii Hello Service Request";
    }
}