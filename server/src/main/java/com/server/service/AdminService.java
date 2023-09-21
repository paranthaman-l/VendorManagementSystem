package com.server.service;

import java.util.UUID;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.server.dto.AdminDTO;
import com.server.dto.VendorDTO;
import com.server.model.Admin;
import com.server.model.Vendor;
import com.server.repository.AdminRepository;
import com.server.repository.VendorRepository;
import com.server.util.APIResponse;
import com.server.util.PasswordUtils;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;
    @Autowired
    private VendorRepository vendorRepository;
    public APIResponse signup(Admin admin) {
        APIResponse apiResponse = new APIResponse();
        boolean isExistEmail = isExistEmail(admin.getEmail());
        if (!isExistEmail) {
            String password = PasswordUtils.encryptPassword(admin.getPassword());
            admin.setPassword(password);
            String aid = UUID.randomUUID().toString();
            admin.setAid(aid);
            adminRepository.save(admin);
            apiResponse.setData(aid);
        } else {
            apiResponse.setError("Already registered Email Id");
        }
        return apiResponse;
    }

    public boolean isExistEmail(String email) {
        Admin admin = adminRepository.findByEmail(email);
        if (admin == null) {
            return false;
        }
        return true;
    }

    public APIResponse login(String email, String password) {
        APIResponse apiResponse = new APIResponse();
        Admin admin = adminRepository.findByEmail(email);
        if (admin != null)
            if (PasswordUtils.matchPassword(password, admin.getPassword())) {
                AdminDTO adminDTO = new AdminDTO();
                BeanUtils.copyProperties(admin, adminDTO, "password");
                apiResponse.setData(adminDTO);
            } else
                apiResponse.setError("Invalid Password");
        else
            apiResponse.setError("Invalid Email");
        return apiResponse;
    }


    public AdminDTO getAdmin(String vid) {
        Admin admin = adminRepository.findById(vid).get();
        AdminDTO adminDTO = new AdminDTO();
        BeanUtils.copyProperties(admin, adminDTO, "password");
        return adminDTO;
    }

    public AdminDTO getAdminDTOByEmail(String email) {
        Admin admin = adminRepository.findByEmail(email);
        AdminDTO adminDTO = new AdminDTO();
        BeanUtils.copyProperties(admin, adminDTO, "password");
        return adminDTO;
    }

    public APIResponse getPendingVendors() {
        APIResponse apiResponse = new APIResponse();
        ArrayList<Vendor> pendingVendors = vendorRepository.findAllByVerified(false);
        ArrayList<VendorDTO> pendingVendorDTOs = new ArrayList<>();
        for(Vendor each : pendingVendors) {
            pendingVendorDTOs.add(new VendorDTO(each));
        }
        // BeanUtils.copyProperties(pendingVendors, pendingVendorDTOs,"password");
        apiResponse.setData(pendingVendorDTOs);
        return apiResponse;
    }
}
