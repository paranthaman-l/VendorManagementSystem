package com.paranthaman.vendormanagementsystem.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paranthaman.vendormanagementsystem.model.ContractModel;
import com.paranthaman.vendormanagementsystem.model.ServiceModel;
import com.paranthaman.vendormanagementsystem.repository.ContractRepository;

@Service
public class ContractService {
    
    @Autowired
    private ContractRepository contractRepository;

    public ArrayList<ContractModel> getAllContracts() {
        return null;
    }

    public String addContract(ContractModel contractModel) {
        contractRepository.save(contractModel);
        return "Contract Added Successfully";
    }

    public Boolean putContract(String cid, ContractModel contractModel) {
        Boolean isExists = contractRepository.findById(cid).isPresent();
        if (!isExists)
            return false;
        ContractModel storedContractModel = contractRepository.findById(cid).get();
        ContractModel newContractModel = updateServiceModel(storedContractModel, contractModel);
        contractRepository.save(newContractModel);
        return true;
    }

    public Boolean deleteContract(String cid) {
        Boolean isExists = contractRepository.findById(cid).isPresent();
        if (!isExists)
            return false;
        contractRepository.deleteById(cid);
        return true;
    }

    public ContractModel updateServiceModel(ContractModel storedContractModel, ContractModel contractModel) {
        var newContractModel = ContractModel.builder()
                .cid(storedContractModel.getCid())
                .contractTitle(contractModel.getContractTitle())
                .createdBy(storedContractModel.getCreatedBy())
                .createdAt(storedContractModel.getCreatedAt())
                .contractDescription(contractModel.getContractDescription())
                .startDate(contractModel.getStartDate())
                .endDate(contractModel.getEndDate())
                .contractValue(contractModel.getContractValue())
                .paymentTerms(contractModel.getPaymentTerms())
                .contractStatus(contractModel.getContractStatus())
                .updatedBy(contractModel.getUpdatedBy())
                .build();
        return newContractModel;
    }


}
