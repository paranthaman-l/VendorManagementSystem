package com.server.service;

import java.io.IOException;
import java.util.UUID;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.server.dto.VendorDTO;
import com.server.model.Vendor;
import com.server.repository.VendorRepository;
import com.server.util.APIResponse;
import com.server.util.PasswordUtils;

@Service
public class VendorService {
    @Autowired
    private VendorRepository vendorRepository;

    public APIResponse signup(Vendor vendor) throws IOException {
        APIResponse apiResponse = new APIResponse();
        boolean isExistEmail = isExistEmail(vendor.getEmail());
        if (!isExistEmail) {
            String password = PasswordUtils.encryptPassword(vendor.getPassword());
            vendor.setPassword(password);
            String vid = UUID.randomUUID().toString();
            vendor.setVid(vid);
            vendorRepository.save(vendor);
            apiResponse.setData(vid);
        } else {
            apiResponse.setError("Already registered Email Id");
        }
        return apiResponse;
    }

    public APIResponse login(String email, String password) {
        APIResponse apiResponse = new APIResponse();
        Vendor vendor = vendorRepository.findByEmail(email);
        if (vendor != null)
            if (PasswordUtils.matchPassword(password, vendor.getPassword())) {
                VendorDTO vendorDTO = new VendorDTO();
                BeanUtils.copyProperties(vendor, vendorDTO, "password");
                apiResponse.setData(vendorDTO);
            } else
                apiResponse.setError("Invalid Password");
        else
            apiResponse.setError("Invalid Email");
        return apiResponse;
    }

    public boolean isExistEmail(String email) {
        Vendor vendor = vendorRepository.findByEmail(email);
        if (vendor == null) {
            return false;
        }
        return true;
    }

    public VendorDTO getVendor(String vid) {
        Vendor vendor = vendorRepository.findById(vid).get();
        VendorDTO vendorDTO = new VendorDTO();
        BeanUtils.copyProperties(vendor, vendorDTO, "password");
        return vendorDTO;
    }

    public VendorDTO getVendorDTOByEmail(String email) {
        Vendor vendor = vendorRepository.findByEmail(email);
        VendorDTO vendorDTO = new VendorDTO();
        BeanUtils.copyProperties(vendor, vendorDTO, "password");
        return vendorDTO;
    }

    public APIResponse updatePwd(String email, String password) {
        APIResponse apiResponse = new APIResponse();
        String encryptedPassword = PasswordUtils.encryptPassword(password);
        Vendor vendor = vendorRepository.findByEmail(email);
        vendor.setPassword(encryptedPassword);
        vendorRepository.save(vendor);
        apiResponse.setData("Password Changed Successfully");
        return apiResponse;
    }
}
