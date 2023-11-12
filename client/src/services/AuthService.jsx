import { authApi } from "../apis/axios";

class AuthService {
    Login = (login) => authApi.post('/login', login);

    SignUp = (signUp) => authApi.post('/signup', signUp);

    ByToken = (token) => authApi.post('/byToken', { token });

    Update = (role, data) => authApi.put(role + "/update/" + localStorage.getItem("id"), data)

    getOrganization = (oid) => authApi.get("/byOid/" + oid);

}
export default new AuthService();