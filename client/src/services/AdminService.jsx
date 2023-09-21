import { adminApi } from "../apis/axios";

class AdminService {
    Login(login){
        return adminApi.post('/login',login);
    }
    GetPendingVendors(){
        return adminApi.get('/getPendingVendors');
    }
}
export default new AdminService();