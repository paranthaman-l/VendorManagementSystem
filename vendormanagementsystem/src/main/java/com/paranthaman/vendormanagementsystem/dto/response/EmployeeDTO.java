package com.paranthaman.vendormanagementsystem.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDTO {
    private String eid;
    private String firstName;
    private String lastName;
    private String email;
    private String dateOfBirth;
    private String about;
    private String position;
    private String salary;
    private String performance;
    private String profile;
    private String createdBy;
    private String serviceName;
}
