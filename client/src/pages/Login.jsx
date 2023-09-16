import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginUndraw from "../assets/imgs/loginUndraw.svg";
import logo from "../assets/imgs/logo.png";
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("");
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState({});
  const Validate = () => {
    setLoginError({});
    let error = {}
    if (login.email.trim() === '') {
      error.email = true;
      toast.error("Enter your Email");
    }
    if (login.password.trim() === '' || login.password.length < 6 || login.password.length > 15) {
      error.password = true;
      if (login.password.trim() === '')
        toast.error("Type Your Password");
      else
        toast.error("Password must be at least 6 characters and less than 15 characters");
    }

    setLoginError(error);
    return error;
  }

  const Login = (e) => {
    e.preventDefault();
    const error = Validate();
    if (!error.email && !error.password){
      console.log("Login Success");
      navigate('/home')
    }
    // userApi
    //   .get("/login", {
    //     params: {
    //       email: login.email,
    //       password: login.password,
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     if (
    //       response.data !== "Invalid Password" &&
    //       response.data !== "Email Not Register"
    //     )
    //       navigate("/home");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  return (
    <div className="bg-[#f6f6f6] min-h-screen flex justify-evenly items-center mx-auto max-md:flex-col">
      <Toaster />
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
            className="h-48 w-48 mx-auto"
            src={loginUndraw}
            alt=""
          />
          <div className="flex justify-evenly items-center text-lg m-10 font-poppins">
            <label
              className={`${loginType === "organization"
                ? "bg-blue hover:bg-hoverBlue cursor-pointer px-5 py-2 rounded-lg  text-white text-center border-[2px] border-transparent min-w-[150px]"
                : "px-5 py-2 border-[2px] border-gray rounded-lg cursor-pointer text-center min-w-[150px]"
                } `}
              htmlFor="organization"
            >
              <input
                type="radio"
                className="appearance-none"
                name="loginType"
                id="organization"
                onChange={() => setLoginType("organization")}
              />
              Organization
            </label>
            <label
              className={`${loginType === "vendor"
                ? "bg-blue hover:bg-hoverBlue cursor-pointer px-5 py-2 rounded-lg  text-white text-center border-[2px] border-transparent min-w-[150px]"
                : "px-5 py-2 border-[2px] border-gray rounded-lg cursor-pointer text-center min-w-[150px]"
                } `}
              htmlFor="vendor"
            >
              <input
                type="radio"
                className="appearance-none"
                name="loginType"
                id="vendor"
                onChange={() => setLoginType("vendor")}
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
              className={`border-gray ${loginError.email && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[300px] rounded-lg outline-none border-[2.0px] `}
              placeholder="Email"
              name="email"
              id="email"
              onChange={handleChange}
              value={login.email}
            />
            <input
              className={`border-gray ${loginError.password && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[300px] rounded-lg outline-none border-[2.0px] `}
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={login.password}
            />
            <input
              className="bg-blue m-4 text-white px-5 py-2 cursor-pointer rounded-md hover:bg-hoverBlue"
              type="submit"
              value="Login"
            // onClick={Login}
            />
          </form>
          <div className="flex justify-between mx-10 text-sm mb-10">
            <p>
              New ?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-blue  hover:text-hoverBlue font-semibold cursor-pointer"
              >
                SignUp
              </span>
            </p>
            <p className="text-blue hover:text-hoverBlue cursor-pointer">
              forget your password?
            </p>
          </div>
        </div>
      </div>
      <p className="text-darkGray text-sm absolute bottom-16 max-md:relative max-md:bottom-0">
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

export default Login;
