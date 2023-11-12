package com.paranthaman.vendormanagementsystem.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

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
@Table(name = "organization")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "oid")
public class Organization {
    @Id
    private String oid;
    private boolean isVerified;

	private String banner;
	
	private String profile;
    
    private String organizationName;
    
    private String contact;

    private String address;

    @OneToMany(mappedBy = "organization")
    private List<ContractModel> contracts;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "uid", referencedColumnName = "uid")
    private User user;
}
