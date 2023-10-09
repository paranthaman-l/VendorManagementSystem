package com.paranthaman.vendormanagementsystem.service;

import org.springframework.stereotype.Service;

import com.paranthaman.vendormanagementsystem.model.Organization;
import com.paranthaman.vendormanagementsystem.repository.OrganizationRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrganizationService {
    private final OrganizationRepository organizationRepository;

    public Organization getOrganization(String oid) {
        return organizationRepository.findById(oid).get();
    }
    
}
