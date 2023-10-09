package com.paranthaman.vendormanagementsystem.dto.response;

import java.util.List;

import com.paranthaman.vendormanagementsystem.model.ContractModel;
import com.paranthaman.vendormanagementsystem.model.ReviewModel;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VendorDTO {
    private String vid;
    private String email;
    private String name;
    private boolean isVerified;
    private byte[] banner;
    private byte[] profile;
    private List<ContractModel> contracts;
    private List<ReviewModel> reviews;
}
