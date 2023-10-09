import { adminApi } from "../apis/axios";

class AdminService {
    createFormData = (data) => {
        const formData = new FormData();
        formData.append('id', data.id);
        formData.append('file', data.file);
        return formData;
    }
    getAdminData = (aid) => adminApi.get('/byAid', { params: { aid } });

    updateName = (data) => adminApi.put('/updateName', data);

    updateProfile = (data) => {
        const formData = this.createFormData(data);
        return adminApi.put('/updateProfile', formData);
    }
    updateBanner = (data) => {
        const formData = this.createFormData(data);
        return adminApi.put('/updateBanner', formData);
    }

    approveVendor = (vid) => adminApi.put('/approveVendor', { params: { vid: vid } });

    approveOrganization = (oid) => adminApi.put('/approveOrganization', { params: { oid } });

    getCount = () => adminApi.get('/getCount');
}
export default new AdminService();