package com.server.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Vendor {
    @Id
    private String vid;

    private String firstName;
    private String LastName;
    private String email;
    private String password;
    private String companyName;
    private String contact;
    private String address;
    private Boolean verified = false;
}
