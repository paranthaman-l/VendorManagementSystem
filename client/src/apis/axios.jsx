import axios from 'axios'
// Auth Api
const authApi = axios.create({
    baseURL: import.meta.env.VITE_SERVER_AUTH_BASE_URL,
})
// Otp Api
const otpApi = axios.create({
    baseURL: import.meta.env.VITE_SERVER_OTP_BASE_URL,
})
// Admin Api
const adminApi = axios.create({
    baseURL: import.meta.env.VITE_SERVER_ADMIN_BASE_URL,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
});
// Vendor Api
const vendorApi = axios.create({
    baseURL: import.meta.env.VITE_SERVER_VENDOR_BASE_URL,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
})
// Organization Api
const organizationApi = axios.create({
    baseURL: import.meta.env.VITE_SERVER_ORGANIZATION_BASE_URL,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
})
// Service Api
const serviceApi = axios.create({
    baseURL: import.meta.env.VITE_SERVER_SERVICE_BASE_URL,
})
// Contract Api
const contractApi = axios.create({
    baseURL: import.meta.env.VITE_SERVER_CONTRACT_BASE_URL,
})
export { authApi, vendorApi, organizationApi, otpApi, adminApi, serviceApi, contractApi };