package com.paranthaman.vendormanagementsystem.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.paranthaman.vendormanagementsystem.dto.request.AddService;
import com.paranthaman.vendormanagementsystem.dto.request.UpdateImageDTO;
import com.paranthaman.vendormanagementsystem.model.ServiceModel;
import com.paranthaman.vendormanagementsystem.model.Vendor;
import com.paranthaman.vendormanagementsystem.repository.ServiceRepository;
import com.paranthaman.vendormanagementsystem.repository.VendorRepository;

import io.jsonwebtoken.io.IOException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class VendorService {

    private final VendorRepository vendorRepository;
    private final ServiceRepository serviceRepository;

    public Vendor getVendor(String vid) {
        Vendor vendor = vendorRepository.findById(vid).get();
        return vendor;
    }

    public String updateBanner(UpdateImageDTO updateImageDTO) throws IOException {
        try {
            Vendor vendor = vendorRepository.findById(updateImageDTO.getId()).get();
            vendor.setBanner(updateImageDTO.getFile());
            vendorRepository.save(vendor);
            return "Update Profile Successfully";
        } catch (Exception e) {
            return "Something went wrong!";
        }
    }

    public String updateProfile(UpdateImageDTO updateImageDTO) throws IOException {
        try {
            Vendor vendor = vendorRepository.findById(updateImageDTO.getId()).get();
            vendor.setProfile(updateImageDTO.getFile());
            vendorRepository.save(vendor);
            return "Update Profile Successfully";
        } catch (Exception e) {
            return "Something went wrong!";
        }
    }

    public String addService(AddService addService) {
        try {
            ServiceModel service = serviceRepository.findById(addService.getSid()).get();
            Vendor vendor = vendorRepository.findById(addService.getVid()).get();
            List<ServiceModel> services = vendor.getServices();
            services.add(service);
            vendor.setServices(services);
            vendorRepository.save(vendor);
            return "Service Added Successfully";
        } catch (Exception e) {
            return "Something went wrong!";
        }
    }
}
