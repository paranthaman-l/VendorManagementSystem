package com.paranthaman.vendormanagementsystem.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
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

	@Lob
	@Column(name = "banner", columnDefinition = "LONGBLOB")
	private byte[] banner;

	@Lob
	@Column(name = "profile", columnDefinition = "LONGBLOB")
	private byte[] profile;

	@OneToMany(mappedBy = "vendor", cascade = CascadeType.ALL)
	private List<ServiceModel> services;

	@OneToMany(mappedBy = "vendor", cascade = CascadeType.ALL)
	private List<ContractModel> contracts;

	@OneToMany(mappedBy = "vendor", cascade = CascadeType.ALL)
	private List<ReviewModel> reviews;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "uid", referencedColumnName = "uid")
	private User user;
}