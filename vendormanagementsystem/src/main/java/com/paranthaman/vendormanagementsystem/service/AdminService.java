package com.paranthaman.vendormanagementsystem.service;

import java.io.IOException;
import java.util.List;

import org.springframework.stereotype.Service;

import com.paranthaman.vendormanagementsystem.dto.request.UpdateImageDTO;
import com.paranthaman.vendormanagementsystem.dto.request.UpdateNameDTO;
import com.paranthaman.vendormanagementsystem.dto.response.AdminDTO;
import com.paranthaman.vendormanagementsystem.dto.response.DashBoardCount;
import com.paranthaman.vendormanagementsystem.model.Admin;
import com.paranthaman.vendormanagementsystem.model.Organization;
import com.paranthaman.vendormanagementsystem.model.User;
import com.paranthaman.vendormanagementsystem.model.Vendor;
import com.paranthaman.vendormanagementsystem.repository.AdminRepository;
import com.paranthaman.vendormanagementsystem.repository.ContractRepository;
import com.paranthaman.vendormanagementsystem.repository.OrganizationRepository;
import com.paranthaman.vendormanagementsystem.repository.UserRepository;
import com.paranthaman.vendormanagementsystem.repository.VendorRepository;

import lombok.RequiredArgsConstructor;
import lombok.var;

@Service

@RequiredArgsConstructor
public class AdminService {

    private final AdminRepository adminRepository;
    private final VendorRepository vendorRepository;
    private final OrganizationRepository organizationRepository;
    private final ContractRepository contractRepository;
    private final UserRepository userRepository;

    public AdminDTO getAdmin(String aid) {
        Admin admin = adminRepository.findById(aid).get();
        User user = admin.getUser();
        var adminDTO = AdminDTO.builder().aid(aid).name(user.getName()).email(user.getEmail()).build();
        return adminDTO;
    }

    public String approveVendor(String vid) {
        try {
            Vendor vendor = vendorRepository.findById(vid).get();
            vendor.setVerified(true);
            vendorRepository.save(vendor);
            return "Vendor Approved Successfully";
        } catch (Exception e) {
            return "Something went wrong!";
        }
    }

    public String approveOrganization(String oid) {
        try {

            Organization org = organizationRepository.findById(oid).get();
            org.setVerified(true);
            organizationRepository.save(org);
            return "Organization Approved Successfully";
        } catch (Exception e) {
            return "Something went wrong!";
        }
    }

    public String updateName(UpdateNameDTO updateNameDTO) {
        try {

            User user = userRepository.findById(updateNameDTO.getId()).get();
            user.setName(updateNameDTO.getName());
            userRepository.save(user);
            return "Update Name Successfully";
        } catch (Exception e) {
            return "Something went wrong!";
        }
    }

    public String updateProfile(UpdateImageDTO updateImageDTO) throws IOException {
        try {

            Admin admin = adminRepository.findById(updateImageDTO.getId()).get();
            admin.setProfile(updateImageDTO.getFile().getBytes());
            adminRepository.save(admin);
            return "Update Profile Successfully";
        } catch (Exception e) {
            return "Something went wrong!";
        }
    }

    public String updateBanner(UpdateImageDTO updateImageDTO) throws IOException {
        try {
            Admin admin = adminRepository.findById(updateImageDTO.getId()).get();
            admin.setBanner(updateImageDTO.getFile().getBytes());
            adminRepository.save(admin);
            return "Update Profile Successfully";
        } catch (Exception e) {
            return "Something went wrong!";
        }
    }

    public List<Vendor> getVendors(Boolean verified) {
        return vendorRepository.findAllByIsVerified(verified);
    }

    public DashBoardCount getCount() {
        var count = DashBoardCount.builder().vendorCount(vendorRepository.count())
                .organizationCount(organizationRepository.count())
                .contractCount(contractRepository.count()).build();
        return count;
    }

}