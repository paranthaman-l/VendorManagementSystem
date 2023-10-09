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
        const formData = this.createFormData(data);
        return vendorApi.put('/updateBanner', formData);
    }
    updateProfile = (data) => {
        const formData = this.createFormData(data);
        console.log(formData);
        return vendorApi.put('/updateProfile', formData);
    }

    ChangePassword(email, password) {
        console.log(email, password);
        return vendorApi.get('/updatePwd', { params: { email, password } });
    }
}

export default new VendorService();