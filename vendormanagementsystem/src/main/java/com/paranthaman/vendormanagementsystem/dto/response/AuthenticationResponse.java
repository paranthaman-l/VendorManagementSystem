package com.paranthaman.vendormanagementsystem.dto.response;

import com.paranthaman.vendormanagementsystem.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationResponse {
    private String token;
    private String uid;
    private Role role;
    private String error;
}
