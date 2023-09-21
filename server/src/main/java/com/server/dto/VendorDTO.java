package com.server.dto;

import com.server.model.Vendor;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VendorDTO {
    private String vid;

    private String firstName;
    private String LastName;
    private String email;
    private String companyName;
    private String contact;
    private String address;
    private Boolean verified = false;

    public VendorDTO(Vendor vendor){
        this.vid = vendor.getVid();
        this.firstName = vendor.getFirstName();
        this.LastName= vendor.getLastName();
        this.email = vendor.getEmail();
        this.companyName = vendor.getCompanyName();
        this.contact = vendor.getContact();
        this.address = vendor.getAddress();
        this.verified = vendor.getVerified();
    }
}
