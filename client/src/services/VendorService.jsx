import { vendorApi } from "../apis/axios";

class VendorService {
    createFormData = (data) => {
        const formData = new FormData();
        formData.append('id', data.id);
        formData.append('file', data.file);
        return formData;
    }
    getVendorData = (vid) => vendorApi.get('/byVid', { params: { vid } });

    updateBanner = (data) => {
        return vendorApi.put('/updateBanner', data);
    }
    updateProfile = (data) => {
        return vendorApi.put('/updateProfile', data);
    }

    ChangePassword(email, password) {
        console.log(email, password);
        return vendorApi.get('/updatePwd', { params: { email, password } });
    }

    getAllEmployees = () => vendorApi.get('/getAllEmployees', { params: { vid: localStorage.getItem('id') } });

    addEmployee = (employee, sid, vid) => vendorApi.post("/addEmployee", employee, { params: { sid, vid } });

    getAllCertificates = () => vendorApi.get("/getAllCertificates", { params: { vid: localStorage.getItem("id") } });

    addCertificate = (certificate) => vendorApi.post("/addCertificate", certificate, { params: { vid: localStorage.getItem("id") } });

    deleteCertificate = (certificateId) => vendorApi.delete("/deleteCertificate", { params: { certificateId } })

    getAllRequested = ()=>vendorApi.get("/getAllServiceRequests");

    applyContract = (sid,data)=> vendorApi.post("/addServiceApply/"+sid,{...data,oid:localStorage.getItem('id')});
}

export default new VendorService();