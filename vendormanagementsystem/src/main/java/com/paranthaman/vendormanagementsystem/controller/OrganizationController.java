package com.paranthaman.vendormanagementsystem.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.paranthaman.vendormanagementsystem.constant.Api;
import com.paranthaman.vendormanagementsystem.model.Organization;
import com.paranthaman.vendormanagementsystem.service.OrganizationService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.ORGANIZATION)
@RequiredArgsConstructor
@Tag(name = "Organization")
@CrossOrigin(value = Api.FRONTEND)
public class OrganizationController {

    private final OrganizationService organizationService;
    @GetMapping
    public ResponseEntity<String> welcome() {
        return ResponseEntity.ok().body("Hello Organization");
    }

    
    @GetMapping("/byOid")
    public Organization getOrganization(@RequestParam String oid) {
        return organizationService.getOrganization(oid);
    }
}