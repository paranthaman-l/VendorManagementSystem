import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import ForgetPassword from "./pages/ForgetPassword";
// import Navbar from "./component/Navbar";
function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgetPwd" element={<ForgetPassword/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
