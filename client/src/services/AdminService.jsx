import { adminApi } from "../apis/axios";

class AdminService {
    Login(login) {
        return adminApi.post('/login', login);
    }
    Approve(email) {
        return adminApi.get('/approveVendor', { params: { email: email } });
    }
    GetPendingVendors() {
        return adminApi.get('/getPendingVendors');
    }
}
export default new AdminService();