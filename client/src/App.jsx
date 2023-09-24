import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import AdminDashboard from "./auth/Admin/AdminDashboard";
import Organization from "./auth/Admin/Organization";
import Vendor from "./auth/Admin/Vendor";
import Contracts from "./auth/Admin/Contracts";
import Complaints from "./auth/Admin/Complaints";
import AdminLogin from './auth/Admin/Login'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import ScrollToTop from "./services/ScrollToTop";
import Landing from "./pages/Landing";
import GetDetails from "./pages/GetDetails";
import Home from "./auth/Vendor/Home";
import ClientNavbar from "./components/ClientNavbar";
import Terms from "./pages/Terms";
import OnboardingTeam from "./auth/Vendor/OnboardingTeam";
import Services from "./auth/Vendor/Services";
import VendorContracts from "./auth/Vendor/Contracts";
import Certifications from "./auth/Vendor/Certifications";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <ClientNavbar />
        <Routes>
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

          {/* Vendors */}
          <Route path="/home" element={<Home />} />
          <Route path="/onboardingTeam" element={<OnboardingTeam />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contracts" element={<VendorContracts />} />
          <Route path="/certifications" element={<Certifications />} />


          {/* Admin */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/organization" element={<Organization />} />
          <Route path="/admin/vendors" element={<Vendor />} />
          <Route path="/admin/contracts" element={<Contracts />} />
          <Route path="/admin/complaints" element={<Complaints />} />
          <Route path="/admin/team" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
