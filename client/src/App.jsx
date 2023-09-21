import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
// import Landing from "./pages/Landing";
import ForgetPassword from "./pages/ForgetPassword";
import AdminDashboard from "./auth/Admin/AdminDashboard";
import Organization from "./auth/Admin/Organization";
import Vendor from "./auth/Admin/Vendor";
import Contracts from "./auth/Admin/Contracts";
import Complaints from "./auth/Admin/Complaints";
import AdminLogin from './auth/Admin/Login'
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/organization" element={<Organization />} />
          <Route path="/admin/vendors" element={<Vendor />} />
          <Route path="/admin/contracts" element={<Contracts />} />
          <Route path="/admin/complaints" element={<Complaints />} />
          <Route path="/admin/team" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetPwd" element={<ForgetPassword />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
