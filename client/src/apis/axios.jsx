import axios from 'axios'
const vendorApi = axios.create({
    baseURL: import.meta.env.VITE_SERVER_VENDOR_BASE_URL,
})
const otpApi = axios.create({
    baseURL: import.meta.env.VITE_SERVER_OTP_BASE_URL,
})

export { vendorApi, otpApi };