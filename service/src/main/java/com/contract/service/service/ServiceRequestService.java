package com.contract.service.service;

import org.springframework.stereotype.Service;

import com.contract.service.repository.ServiceRequestRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ServiceRequestService {
    private final ServiceRequestRepository serviceRequestRepository;
    
}
