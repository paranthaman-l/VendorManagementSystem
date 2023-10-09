package com.paranthaman.vendormanagementsystem.repository;
import org.springframework.data.repository.CrudRepository;

import com.paranthaman.vendormanagementsystem.model.ContractModel;
public interface ContractRepository  extends CrudRepository<ContractModel,String>{
    
}
