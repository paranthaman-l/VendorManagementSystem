import { otpApi } from "../apis/axios";

class UserService {
    SignUpSendOtp({ email, firstName }) {
        return otpApi.get('/signup/send-otp', { params: { email, firstName } });
    }
    ForgetPasswordSendOtp(email) {
        return otpApi.get('/forgetPwd/send-otp', { params: { email } });
    }
}

export default new UserService();