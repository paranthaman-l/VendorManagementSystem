import { otpApi } from "../apis/axios";

class OtpService {
    SignUpSendOtp({ email, firstName }) {
        return otpApi.post('/signup/send-otp',{email: email, name: firstName});
    }
    ForgetPasswordSendOtp(email) {
        return otpApi.get('/forgetPwd/send-otp', { params: { email } });
    }
}

export default new OtpService();