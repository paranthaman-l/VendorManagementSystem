import { vendorApi } from "../apis/axios";

class UserService {
    Login(login) {
        return vendorApi.post('/login', login);
    }
    SignUp(signUp) {
        return vendorApi.post('/signup', signUp);
    }
    ChangePassword(email, password) {
        console.log(email,password);
        return vendorApi.get('/updatePwd', {params:{email,password}});
    }
}

export default new UserService();