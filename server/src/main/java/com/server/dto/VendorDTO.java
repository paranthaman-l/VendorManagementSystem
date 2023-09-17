package com.server.dto;

public class VendorDTO {
    private String vid;

    private String firstName;
    private String LastName;
    private String email;
    private String companyName;
    private String contact;
    private String address;
    private Boolean verified = false;

    public VendorDTO() {
        super();
    }

    public VendorDTO(String vid, String firstName, String lastName, String email, String companyName,
            String contact, String address, Boolean verified) {
        this.vid = vid;
        this.firstName = firstName;
        LastName = lastName;
        this.email = email;
        this.companyName = companyName;
        this.contact = contact;
        this.address = address;
        this.verified = verified;
    }

    public String getVid() {
        return vid;
    }

    public void setVid(String vid) {
        this.vid = vid;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Boolean getVerified() {
        return verified;
    }

    public void setVerified(Boolean verified) {
        this.verified = verified;
    }

}
