package com.paranthaman.vendormanagementsystem.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paranthaman.vendormanagementsystem.model.ServiceModel;
import com.paranthaman.vendormanagementsystem.repository.ServiceRepository;

@Service
public class ServiceService {

    @Autowired
    private ServiceRepository serviceRepository;

    public ArrayList<ServiceModel> getAllServices() {
        ArrayList<ServiceModel> services = (ArrayList<ServiceModel>) serviceRepository.findAll();
        return services;
    }

    public String addService(ServiceModel serviceModel) {
        serviceRepository.save(serviceModel);
        return serviceModel.getSid();
    }

    public Boolean putService(String sid, ServiceModel serviceModel) {
        Boolean isExists = serviceRepository.findById(sid).isPresent();
        if (!isExists)
            return false;
        ServiceModel storedServiceModel = serviceRepository.findById(sid).get();
        ServiceModel newServiceModel = updateServiceModel(storedServiceModel, serviceModel);
        serviceRepository.save(newServiceModel);
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

}
