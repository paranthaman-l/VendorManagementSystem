import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import VendorService from "../services/VendorService";
import { loginUndraw, logo } from "../constant";
import AuthService from "../services/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { getVendor, setVendor } from '../slices/vendorSlice'
import OrganizationService from "../services/OrganizationService";
import { organizationApi, vendorApi } from "../apis/axios";
import { setOrganization } from "../slices/organizationSlice";
const Login = () => {
  const dispatch = useDispatch();
  const vendor = useSelector(getVendor)
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("");
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState({});
  const Validate = () => {
    setLoginError({});
    let error = {}
    if (loginType === '')
      error.loginType = true;
    if (login.email.trim() === '') {
      error.email = true;
    }
    if (login.password.trim() === '') {
      error.password = true;
    }
    setLoginError(error);
    return error;
  }

  const Login = async (e) => {
    e.preventDefault();
    const error = Validate();
    if (Object.keys(error).length === 0) {
      setLoading(true);
      await AuthService.Login(login).then((response) => {
        console.log(response);
        if (response.data.error === null) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('role', response.data.role);
          localStorage.setItem('id', response.data.uid);
          setTimeout(async () => {
            setLoading(false);
            if (response.data.role === "VENDOR" && loginType === "vendor") {
              vendorApi.interceptors.request.use((config) => {
                config.headers.Authorization = "Bearer " + response.data.token;
                return config;
              })
              await VendorService.getVendorData(response.data.uid).then((res) => {
                if (res.data.verified) {
                  dispatch(setVendor(res.data))
                  setTimeout(() => {
                    toast.success("Welcome Vendor " + res.data.user.name, {
                      style: { marginTop: 10 }
                    });
                  }, 200);
                  navigate("/vendor/home");
                  return;
                }
                else
                  toast.error("Admin Not Verified your Account");
              }).catch(() => {
                toast.error("Something went wrong!");
              })
              // localStorage.clear();
            }
            else if (response.data.role === "ORGANIZATION" && loginType === "organization") {
              organizationApi.interceptors.request.use((config) => {
                config.headers.Authorization = "Bearer " + response.data.token;
                return config;
              })
              await OrganizationService.getOrganizationData(response.data.uid).then((res) => {
                if (res.data.verified) {
                  dispatch(setOrganization(res.data))
                  navigate("/organization/home");
                  return;
                }
                else
                  toast.error("Admin Not Verified your Account");
              }).catch(() => {
                toast.error("Something went wrong!");
              })
              // localStorage.clear();
            }
            else {
              toast.error("Something went wrong!");
            }
          }, 1000);
        }
        else {
          toast.error("Something went wrong!");
          setLoading(false);
        }
        setLoading(false);
      })
        .catch(() => {
          toast.error("Something went wrong!");
          setLoading(false);
        });
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
    setLoginError({ ...loginError, [name]: false });
  };
  return (
    <div className="bg-bgGray min-h-screen flex justify-evenly items-center mx-auto max-md:flex-col">
      <Toaster position="top-right"
        toastOptions={{
          error: {
            style: {
              backgroundColor: "#ff5e5b",
              color: 'white',
            }
          },
          success: {
            style: {
              backgroundColor: "#55ba45",
              color: 'white',
            }
          }
        }} />
      <div className="absolute top-0 max-md:left-0 max-md:relative">
        <img
          className="h-48 w-48 max-md:h-36 max-md:w-36"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="flex min-w-[40%] flex-col">
        <p className="text-5xl font-semibold">
          Welcome to{" "}
          <span className="font-alata font-bold text-6xl text-blue hover:text-hoverBlue cursor-pointer">
            Delta
          </span>{" "}
          EnterPrise
        </p>
        <p className="font-medium text-lg mt-5 font-montserrat">
          Streamline Your Vendor Relationships and Unlock Efficiency
        </p>
        <div className="flex flex-col">
          <img
            className="h-48 w-48 mx-auto "
            src={loginUndraw}
            alt=""
          />
          <div className="flex justify-evenly items-center text-lg m-10 font-poppins">
            <label
              className={`${loginType === "organization"
                ? "bg-blue hover:bg-hoverBlue cursor-pointer px-5 py-2 rounded-lg  text-white text-center border-[2px] border-transparent min-w-[150px]"
                : "px-5 py-2 border-[2px] border-gray rounded-lg cursor-pointer text-center min-w-[150px]"
                } ${loginError.loginType && "border-inputErrorRed"}`}
              htmlFor="organization"
            >
              <input
                type="radio"
                className="appearance-none"
                name="loginType"
                id="organization"
                onChange={() => { setLoginType("organization"); setLoginError({ ...loginError, loginType: false }) }}
              />
              Organization
            </label>
            <label
              className={`${loginType === "vendor"
                ? "bg-blue hover:bg-hoverBlue cursor-pointer px-5 py-2 rounded-lg  text-white text-center border-[2px] border-transparent min-w-[150px]"
                : "px-5 py-2 border-[2px] border-gray rounded-lg cursor-pointer text-center min-w-[150px]"
                } ${loginError.loginType && "border-inputErrorRed"} `}
              htmlFor="vendor"
            >
              <input
                type="radio"
                className="appearance-none"
                name="loginType"
                id="vendor"
                onChange={() => { setLoginType("vendor"); setLoginError({ ...loginError, loginType: false }) }}
              />
              Vendor
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-center font-poppins rounded-xl bg-white shadow-lg">
        <div className="flex flex-col justify-center">
          <div className="">
            <p className="text-4xl mx-10 my-4 font-bold text-blue hover:text-hoverBlue">
              Login
            </p>
            <p className="w-72 mx-10 font-medium">
              Welcome, Valued Partners. Your Gateway to Seamless Collaboration
              Begins Here!
            </p>
          </div>
          <form
            action=""
            onSubmit={Login}
            className="flex rounded-xl justify-around flex-col p-8 items-center"
          >
            <input
              type="email"
              className={`border-gray focus:border-blue focus:placeholder:text-[#9ca3af] ${loginError.email && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[300px] rounded-lg outline-none border-[2.0px] `}
              placeholder="Email"
              name="email"
              id="email"
              onChange={handleChange}
              value={login.email}
            />
            <input
              className={`border-gray focus:border-blue focus:placeholder:text-[#9ca3af] ${loginError.password && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[300px] rounded-lg outline-none border-[2.0px] `}
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={login.password}
            />
            {loading ? <div
              className="bg-blue m-4 text-white flex justify-center items-center min-w-[90px] h-10 px-5 py-2 cursor-pointer rounded-md hover:bg-hoverBlue"
            > <svg
              className="animate-spin flex justify-center items-center h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
                <circle
                  className="opacity-20"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg></div>
              :
              <input
                className="bg-blue m-4 text-white px-5 py-2 min-w-[90px] cursor-pointer rounded-md hover:bg-hoverBlue"

                type="submit"
                value={"Login"}
              />
            }
          </form>
          <div className="flex justify-between mx-10 text-sm mb-10">
            <p>
              New ?{" "}
              <span
                onClick={() => navigate("/signUp")}
                className="text-blue underline hover:no-underline  hover:text-hoverBlue font-semibold cursor-pointer"
              >
                Sign Up
              </span>
            </p>
            <p onClick={() => navigate('/forgetPwd')} className="text-blue underline hover:no-underline hover:text-hoverBlue cursor-pointer">
              forget your password?
            </p>
          </div>
        </div>
      </div>
      <p className="text-darkGray text-sm absolute bottom-16 max-md:relative max-md:bottom-0">
        By signing up, you agree to our{" "}
        <span onClick={() => navigate('/terms&condition')} className="text-blue hover:text-hoverBlue cursor-pointer">
          Terms of Use
        </span>{" "}
        and{" "}
        <span onClick={() => navigate('/policy')} className="text-blue hover:text-hoverBlue cursor-pointer">
          Privacy Policy
        </span>
      </p>
    </div>
  );
};

export default Login;
