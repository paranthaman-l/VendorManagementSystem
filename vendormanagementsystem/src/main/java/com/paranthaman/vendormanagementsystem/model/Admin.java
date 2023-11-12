package com.paranthaman.vendormanagementsystem.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "admin")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "aid")
public class Admin {
	@Id
	private String aid;

	private String banner;
	
	private String profile;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "uid", referencedColumnName = "uid")
	private User user;
}