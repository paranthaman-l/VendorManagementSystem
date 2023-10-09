package com.paranthaman.vendormanagementsystem.service;

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
        try{
            Vendor vendor = vendorRepository.findById(updateImageDTO.getId()).get();
            vendor.setBanner(updateImageDTO.getFile().getBytes());
            vendorRepository.save(vendor);
            return "Update Profile Successfully";
        }catch(Exception e){
            return "Something went wrong!";
        }
    }

    public String updateProfile(UpdateImageDTO updateImageDTO) throws IOException {
        try{
            Vendor vendor = vendorRepository.findById(updateImageDTO.getId()).get();
            vendor.setProfile(updateImageDTO.getFile().getBytes());
            vendorRepository.save(vendor);
            return "Update Profile Successfully";
        }catch(Exception e){
            return "Something went wrong!";
        }
    }

    public String addService(AddService addService) {
        ServiceModel service = serviceRepository.findById(addService.getSid()).get();
        Vendor vendor = vendorRepository.findById(addService.getVid()).get();
        vendor.getServices().add(service);
        return "Service Added Successfully";
    }
}
