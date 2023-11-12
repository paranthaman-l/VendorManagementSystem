/* eslint-disable react-hooks/exhaustive-deps */
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Organization from "./pages/Admin/Organization";
import Vendor from "./pages/Admin/Vendor";
import Contracts from "./pages/Admin/Contracts";
import AdminProfile from "./pages/Admin/Profile";
import Complaints from "./pages/Admin/Complaints";
import AdminLogin from './pages/Admin/Login'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import ScrollToTop from "./services/ScrollToTop";
import Landing from "./pages/Landing";
import GetDetails from "./pages/GetDetails";
import Home from "./pages/Vendor/Home";
import ClientNavbar from "./components/ClientNavbar";
import Terms from "./pages/Terms";
import OnboardingTeam from "./pages/Vendor/OnboardingTeam";
import Services from "./pages/Vendor/Services";
import VendorContracts from "./pages/Vendor/Contracts";
import Certifications from "./pages/Vendor/Certifications";
import FAQ from "./pages/FAQ";
import AdminAuth from "./auth/AdminAuth";
import VendorAuth from "./auth/VendorAuth";
import Profile from "./pages/Vendor/Profile";
import OrganizationAuth from './auth/OrganizationAuth'
import Error404 from "./pages/Error404";
import OrganizationHome from "./pages/Organization/OrganizationHome";
import 'react-loading-skeleton/dist/skeleton.css'
import Account from "./pages/Admin/Account";
import { useEffect, useState } from "react";
import { organizationApi, vendorApi } from "./apis/axios";
import ServiceRequest from "./pages/Organization/ServiceRequest";
import RequestedService from "./pages/Organization/RequestedService";
import { useDispatch } from "react-redux";
import { setVendor } from "./slices/vendorSlice";
import VendorService from "./services/VendorService";
import OrganizationService from "./services/OrganizationService";
import { setOrganization } from "./slices/organizationSlice";
import Loader from "./components/Loader"
import ListOfRequests from "./pages/Vendor/ListOfRequests";
function App() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const authentication = async () => {
  //     if (localStorage.getItem('token')) {
  //       await AuthService.ByToken(localStorage.getItem('token')).then((response) => {
  //         if (!response.data.error) {
  //           const role = response.data.role;
  //           if (role === "ADMIN") {
  //             navigate('/admin/dashboard');
  //           }
  //         }
  //       });
  //     }
  //   }
  //   authentication();
  // }, [])
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("role") === 'VENDOR') {
      vendorApi.interceptors.request.use((config) => {
        config.headers.Authorization = "Bearer " + localStorage.getItem("token");
        return config;
      })
    }
    else if (localStorage.getItem("role") === 'ORGANIZATION') {
      organizationApi.interceptors.request.use((config) => {
        config.headers.Authorization = "Bearer " + localStorage.getItem("token");
        return config;
      })
    }

  }, [])

  useEffect(() => {
    const authentication = async () => {
        if (localStorage.getItem("role").toLowerCase() === "vendor") {

            await VendorService.getVendorData(localStorage.getItem('id')).then((res) => {
                dispatch(setVendor(res.data));
            }).catch(() => {
                // toast.error("Something went wrong!");
                setLoading(false);
            })
        }
        else if(localStorage.getItem("role").toLowerCase() === "organization") {
            await OrganizationService.getOrganizationData(localStorage.getItem('id')).then((res) => {
                dispatch(setOrganization(res.data.data));
            }).catch(() => {
                // toast.error("Something went wrong!");
                setLoading(false);
            })
        }

    }
    authentication();
}, [])

  useEffect(() => {
    const startLoading = () => setLoading(true);
    const endLoading = () => setLoading(false);

    window.addEventListener("beforeunload", startLoading);
    window.addEventListener("load", endLoading);

    return () => {
      window.removeEventListener("beforeunload", startLoading);
      window.removeEventListener("load", endLoading);
    };
  }, []);
  return (
    <div className="">
      {loading && <Loader />}
      <ScrollToTop />
      <ClientNavbar />
      <Navbar />
      <Routes >
        {/* Default */}
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetPwd" element={<ForgetPassword />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/getDetails" element={<GetDetails />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms&condition" element={<Terms />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="*" element={<Error404 />} />

        {/* Vendors */}
        <Route element={<VendorAuth />}>
          <Route path="/vendor/home" element={<Home />} />
          <Route path="/vendor/onboardingTeam" element={<OnboardingTeam />} />
          <Route path="/vendor/services" element={<Services />} />
          <Route path="/vendor/contracts" element={<VendorContracts />} />
          <Route path="/vendor/certifications" element={<Certifications />} />
          <Route path="/vendor/profile" element={<Profile />} />
          <Route path="/vendor/serviceRequests" element={<ListOfRequests/>} />
        </Route>

        {/* Organization */}
        <Route element={<OrganizationAuth />}>
          <Route path="organization/home" element={<OrganizationHome />} />
          <Route path="organization/requestRise" element={<ServiceRequest />} />
          <Route path="/organization/requested" element={<RequestedService />} />
        </Route>

        {/* Admin */}
        <Route element={<AdminAuth />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/organization" element={<Organization />} />
          <Route path="/admin/vendors" element={<Vendor />} />
          <Route path="/admin/contracts" element={<Contracts />} />
          <Route path="/admin/complaints" element={<Complaints />} />
          <Route path="/admin/team" element={<AdminDashboard />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/admin/account" element={<Account />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
