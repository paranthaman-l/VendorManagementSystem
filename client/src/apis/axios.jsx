import axios from 'axios'
const userApi = axios.create({
    baseURL:import.meta.env.VITE_SERVER_USER_BASE_URL,
})
const otpApi = axios.create({
    baseURL:import.meta.env.VITE_SERVER_OTP_BASE_URL,
})

export { userApi,otpApi };