package com.paranthaman.vendormanagementsystem.service;

import java.util.Optional;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.paranthaman.vendormanagementsystem.dto.request.LoginDTO;
import com.paranthaman.vendormanagementsystem.dto.request.SignUpDTO;
import com.paranthaman.vendormanagementsystem.dto.request.TokenDTO;
import com.paranthaman.vendormanagementsystem.dto.response.AuthenticationResponse;
import com.paranthaman.vendormanagementsystem.model.Admin;
import com.paranthaman.vendormanagementsystem.model.Organization;
import com.paranthaman.vendormanagementsystem.model.User;
import com.paranthaman.vendormanagementsystem.model.Vendor;
import com.paranthaman.vendormanagementsystem.model.enumerate.Role;
import com.paranthaman.vendormanagementsystem.repository.AdminRepository;
import com.paranthaman.vendormanagementsystem.repository.OrganizationRepository;
import com.paranthaman.vendormanagementsystem.repository.UserRepository;
import com.paranthaman.vendormanagementsystem.repository.VendorRepository;
import com.paranthaman.vendormanagementsystem.util.JwtUtil;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class AuthService {

	private final UserRepository userRepository;
	private final AdminRepository adminRepository;
	private final OrganizationRepository organizationRepository;
	private final VendorRepository vendorRepository;
	private final PasswordEncoder passwordEncoder;
	private final AuthenticationManager authenticationManager;
	private final JwtUtil jwtUtil;
	private final UserDetailsService userDetailsService;

	public boolean userRegistration(SignUpDTO request) {
		Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
		if (!isUserExists.isPresent()) {
			var user = User.builder().name(request.getName()).email(request.getEmail())
					.password(passwordEncoder.encode(request.getPassword())).isEnabled(true)
					.role(Role.valueOf(request.getRole().toUpperCase())).build();
			userRepository.save(user);
			if (request.getRole().toUpperCase().equals("ADMIN")) {
				var admin = Admin.builder().aid(user.getUid()).user(user).build();
				adminRepository.save(admin);
			} else if (request.getRole().toUpperCase().equals("VENDOR")) {
				var vendor = Vendor.builder().vid(user.getUid()).user(user).build();
				vendorRepository.save(vendor);
			} else if (request.getRole().toUpperCase().equals("ORGANIZATION")) {
				var organization = Organization.builder().oid(user.getUid()).user(user).build();
				organizationRepository.save(organization);
			}
			return true;
		} else {
			return false;
		}
	}

	public AuthenticationResponse userAuthentication(LoginDTO request) {
		authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
		var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
		var token = jwtUtil.generateToken(user);
		return AuthenticationResponse.builder().token(token).uid(user.getUid()).role(user.getRole()).build();
	}

	public AuthenticationResponse userAuthenticationByToken(TokenDTO tokenDTO) {
		String email = jwtUtil.extractUserEmail(tokenDTO.getToken());
		if (email != null) {
			UserDetails userDetails = this.userDetailsService.loadUserByUsername(email);
			if (jwtUtil.isTokenValid(tokenDTO.getToken(), userDetails)) {
				var user = userRepository.findByEmail(email).orElseThrow();
				return AuthenticationResponse.builder().token(tokenDTO.getToken()).uid(user.getUid()).role(user.getRole()).build();
			}
		}
		return AuthenticationResponse.builder().error("Not a Valid Token!").build();
	}
}
