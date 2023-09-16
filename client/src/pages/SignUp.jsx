import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userApi,otpApi } from "../apis/axios";
import signUpUndraw from "../assets/imgs/signupUndraw.svg";
import logo from "../assets/imgs/logo.png";
import toast, { Toaster } from "react-hot-toast";
const SignUp = () => {
  const navigate = useNavigate();
  const [signUpType, setSignUpType] = useState("");
  const [otp, setOtp] = useState("");
  const [actualOtp, setActualOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [signUp, setSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [signUpError, setSignUpError] = useState({});
  const [loading, setLoading] = useState(false);
  const Validate = () => {
    setSignUpError({});
    let error = {}
    if (signUp.firstName.trim() === '') {
      error.firstName = true;
    }
    if (signUp.lastName.trim() === '')
      error.lastName = true;
    if (signUp.email.trim() === '')
      error.email = true;
    if (signUp.password.trim() === '' || signUp.password.length < 6 || signUp.password.length > 15) {
      error.password = true;
      // if (signUp.password.trim() === '')
      // toast.error("Enter Your Password");
      // else
      // toast.error("Password must be at least 6 characters and less than 15 characters");
    }
    if (signUp.confirmPassword.trim() === '' || signUp.confirmPassword.length < 6 || signUp.confirmPassword.length > 15 || signUp.password !== signUp.confirmPassword)
      error.confirmPassword = true;

    setSignUpError(error);
    return error;
  }

  const SignUp = (e) => {
    e.preventDefault();
    const error = Validate();
    if (!error.firstName && !error.lastName && !error.email && !error.password && !error.confirmPassword) {
      setLoading(true)
      otpApi.get('/send-otp', { params: { email: signUp.email, name: signUp.firstName } }).then((response) => {
        setActualOtp(response.data);
        setShowOtpInput(true);
        setLoading(false)
      }).catch((error) => {
        console.log(error);
      })
    }
    userApi
      .post("/signup", signUp)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Verify = (e) => {
    e.preventDefault();
    if (actualOtp.toString() === otp) {
      toast.success("OTP verified successfully");
      navigate('/login');
    }
    else{
      toast.error("Invalid otp")
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUp({ ...signUp, [name]: value });
  };
  return (
    <div className="bg-[#f6f6f6] min-h-screen flex justify-evenly items-center mx-auto max-lg:flex-col">
      <Toaster />
      <div className="absolute top-0 max-md:left-0 max-lg:relative">
        <img
          className="h-48 w-48 max-md:h-36 max-md:w-36"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="flex lg:max-w-[50%]  max-lg:w-full  flex-col ">
        <p className="text-5xl max-lg:ml-10 font-semibold">
          Welcome to{" "}
          <span className="font-alata font-bold text-6xl text-blue hover:text-hoverBlue cursor-pointer">
            Delta
          </span>{" "}
          EnterPrise
        </p>
        <p className="font-semibold max-lg:ml-10 text-lg mt-5 font-montserrat ">
          Unlock Vendor Efficiency. Start Your Journey with Us
        </p>
        <div className="flex flex-col my-4">
          <img
            className="h-48 w-48 mx-auto mb-4"
            src={signUpUndraw}
            alt=""

          />
          <p className="font-montserrat max-lg:ml-10 indent-5">
            Experience the future of seamless vendor management with our
            cutting-edge platform. Unlock unprecedented efficiency,
            collaboration, and cost-saving opportunities, all in one place.
          </p>
        </div>
      </div>
      <div className="flex justify-center font-poppins rounded-xl bg-white shadow-lg">
        <div className="flex flex-col justify-center">
          <div className="">
            <p className="text-4xl flex mx-10 my-4 font-bold text-blue hover:text-hoverBlue">
              SignUp
            </p>
            <p className="w-72 mx-10 font-medium">
              Effortless Vendor Integration Begins with Your SignUp
            </p>
          </div>
          <form
            action=""
            onSubmit={showOtpInput ? Verify : SignUp}
            className="flex rounded-xl justify-around flex-col p-8 items-center"
          >
            <div className="flex m-3 justify-evenly items-center text-lg font-poppins">
              <label
                className={`${signUpType === "organization"
                  ? "bg-blue hover:bg-hoverBlue cursor-pointer px-3 h-[50px]  rounded-l-lg  text-white text-center border-[2px] border-transparent min-w-[150px] outline-none border-l-[2.0px] border-t-[2.0px] border-b-[2.0px] border-r-[1.0px]"
                  : "px-3 h-[50px]  border-[2px] border-gray rounded-l-lg cursor-pointer text-center min-w-[150px] border-l-[2.0px] border-t-[2.0px] border-b-[2.0px] border-r-[1.0px]"
                  } flex items-center justify-center`}
                htmlFor="organization"
              >
                <input
                  type="radio"
                  className="appearance-none"
                  name="signUpType"
                  id="organization"
                  onChange={() => setSignUpType("organization")}
                />
                Organization
              </label>
              <label
                className={`${signUpType === "vendor"
                  ? "bg-blue hover:bg-hoverBlue cursor-pointer px-3 h-[50px]  rounded-r-lg  text-white text-center border-[2px] border-transparent min-w-[150px] border-l-[1.0px] border-t-[2.0px] border-b-[2.0px] border-r-[3.0px] "
                  : "px-3 h-[50px]  border-[2px] border-gray rounded-r-lg cursor-pointer text-center min-w-[150px] border-l-[1.0px] border-t-[2.0px] border-b-[2.0px] border-r-[3.0px]"
                  } flex items-center justify-center`}
                htmlFor="vendor"
              >
                <input
                  type="radio"
                  className="appearance-none"
                  name="signUpType"
                  id="vendor"
                  onChange={() => setSignUpType("vendor")}
                />
                Vendor
              </label>
            </div>
            <div className="flex justify-center m-3">
              <input
                type="text"
                className={` border-gray ${signUpError.firstName && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray h-[50px] px-[20px] py-[10px] text-lg max-w-[190px] rounded-l-lg outline-none border-l-[2.0px] border-t-[2.0px] border-b-[2.0px] border-r-[1.0px] `}
                placeholder="First Name"
                name="firstName"
                id="firstName"
                onChange={handleChange}
                value={signUp.firstName}
              />
              <input
                type="text"
                className={`border-gray ${signUpError.lastName && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray h-[50px] px-[20px] py-[10px] text-lg max-w-[190px] rounded-r-lg outline-none border-l-[1.0px] border-t-[2.0px] border-b-[2.0px] border-r-[2.0px] `}
                placeholder="Last Name"
                name="lastName"
                id="lastName"
                onChange={handleChange}
                value={signUp.lastName}
              />
            </div>
            <input
              type="email"
              className={`border-gray ${signUpError.email && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[380px] rounded-lg outline-none border-[2.0px] `}
              placeholder="Email"
              name="email"
              id="email"
              onChange={handleChange}
              value={signUp.email}
            />
            <input
              className={`border-gray ${signUpError.password && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[380px] rounded-lg outline-none border-[2.0px] border-gray`}
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={signUp.password}
            />
            <input
              className={`border-gray ${signUpError.confirmPassword && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[380px] rounded-lg outline-none border-[2.0px] `}
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={handleChange}
              value={signUp.confirmPassword}
            />
            {showOtpInput &&
              <input
                className={`border-gray ${signUpError.confirmPassword && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[380px] rounded-lg outline-none border-[2.0px] `}
                placeholder="OTP"
                type="text"
                name="opt"
                id="otp"
                onChange={(e) => setOtp(e.target.value)}
                value={otp}
              />
            }
            {loading ? <div
              className="bg-blue m-4 text-white flex justify-center items-center min-w-[100px] h-10 px-5 py-2 cursor-pointer rounded-md hover:bg-hoverBlue"
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
                className="bg-blue m-4 text-white h-10 min-w-[100px]  px-5 py-2 cursor-pointer rounded-md hover:bg-hoverBlue"
                type="submit"
                value={showOtpInput ? "Verify" : "SignUp"}
              />
            }
          </form>
          <div className="flex justify-center mx-10 text-sm mb-10">
            <p>
              Joining an existing account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-blue hover:underline  hover:text-hoverBlue font-semibold cursor-pointer"
              >
                Click here
              </span>
            </p>
          </div>
        </div>
      </div>
      <p className="text-darkGray text-sm absolute bottom-4 max-lg:relative max-lg:bottom-0 max-lg:my-10">
        By signing up, you agree to our{" "}
        <span className="text-blue hover:text-hoverBlue cursor-pointer">
          Terms of Use
        </span>{" "}
        and{" "}
        <span className="text-blue hover:text-hoverBlue cursor-pointer">
          Privacy Policy
        </span>
      </p>
    </div>
  );
};

export default SignUp;
