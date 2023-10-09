package com.paranthaman.vendormanagementsystem.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@ToString
@Table(name = "vendor")
public class Vendor {
	@Id
	private String vid;
	private boolean isVerified;

	private String banner;
	
	private String profile;

	private String companyName;

	private String location;

	private String address;

	private String contact;

	private List<String> languages = new ArrayList<>();
	
	private String performance;

	@Column(length = 300)
	private String about;

	@JsonManagedReference
	@OneToMany(mappedBy = "vendor", cascade = CascadeType.ALL)
	private List<ServiceModel> services =  new ArrayList<>();
	
	@JsonManagedReference
	@OneToMany(mappedBy = "vendor", cascade = CascadeType.ALL)
	private List<ContractModel> contracts = new ArrayList<>();
	
	@JsonManagedReference
	@OneToMany(mappedBy = "vendor", cascade = CascadeType.ALL)
	private List<ReviewModel> reviews = new ArrayList<>();

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "uid", referencedColumnName = "uid")
	private User user;
}