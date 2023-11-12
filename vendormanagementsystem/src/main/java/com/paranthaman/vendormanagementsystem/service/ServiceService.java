package com.paranthaman.vendormanagementsystem.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paranthaman.vendormanagementsystem.model.ServiceModel;
import com.paranthaman.vendormanagementsystem.repository.ServiceRepository;
import com.paranthaman.vendormanagementsystem.repository.VendorRepository;

@Service
public class ServiceService {

    @Autowired
    private VendorRepository vendorRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    public ArrayList<ServiceModel> getAllServices() {
        ArrayList<ServiceModel> services = (ArrayList<ServiceModel>) serviceRepository.findAll();
        return services;
    }

    public String addService(ServiceModel serviceModel, String vid) {
        serviceModel.setVendor(vendorRepository.findById(vid).get());
        // serviceModel.setEmployees(vendorRepository.findById(vid).get().getEmployees());  
        serviceRepository.save(serviceModel);
        return "Service Added Successfully!";
    }

    public Boolean putService(String vid, ServiceModel serviceModel) {
        serviceModel.setVendor(vendorRepository.findById(vid).get());
        serviceRepository.save(serviceModel);
        return true;
    }

    public Boolean deleteService(String sid) {
        Boolean isExists = serviceRepository.findById(sid).isPresent();
        if (!isExists)
            return false;
        serviceRepository.deleteById(sid);
        return true;
    }

    public ServiceModel updateServiceModel(ServiceModel storedServiceModel, ServiceModel serviceModel) {
        var newServiceModel = ServiceModel.builder()
                .sid(storedServiceModel.getSid())
                .serviceName(serviceModel.getServiceName())
                .createdBy(storedServiceModel.getCreatedBy())
                .createdAt(storedServiceModel.getCreatedAt())
                .serviceDescription(serviceModel.getServiceDescription())
                .serviceType(serviceModel.getServiceType())
                .serviceOwner(serviceModel.getServiceOwner())
                .serviceStatus(serviceModel.getServiceStatus())
                .serviceCost(serviceModel.getServiceCost())
                .serviceDuration(serviceModel.getServiceDuration())
                .serviceAvailability(serviceModel.getServiceAvailability()).build();
        return newServiceModel;
    }

    public ArrayList<ServiceModel> getAllServicesByIds(List<String> ids) {
        return (ArrayList<ServiceModel>) serviceRepository.findAllById(ids);
    }

    public List<ServiceModel> getVendorServices(String vid) {
        return vendorRepository.findById(vid).get().getServices();
    }

}
