import { authApi } from "../apis/axios";

class AuthService {
    Login = (login) => authApi.post('/login', login);

    SignUp = (signUp) => authApi.post('/signup', signUp);

    ByToken = (token) => authApi.post('/byToken', { token });

}
export default new AuthService();