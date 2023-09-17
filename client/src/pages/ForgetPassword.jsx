import { useState } from "react";
import { useNavigate } from "react-router-dom";
import forgetPwd from "../assets/imgs/forgetPwd.svg";
import logo from "../assets/imgs/logo.png";
import toast, { Toaster } from "react-hot-toast";
import OtpService from "../services/OtpService";
import NewPassword from "../components/NewPassword";
const ForgetPassword = () => {
    const navigate = useNavigate();
    const [type, setType] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const [email, setEmail] = useState("");
    const [actualOtp, setActualOtp] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtpInput, setShowOtpInput] = useState('');
    const [showChangePassword, setShowChangePassword] = useState(false);
    const Validate = () => {
        setError({});
        let e = {};
        if (email.trim() === '')
            e.email = true;
        setError(e);
        return e;
    }
    const SendOtp = async (e) => {
        e.preventDefault();
        let errors = Validate();
        if (!errors.email) {
            setLoading(true);
            await OtpService.ForgetPasswordSendOtp(email).then((res) => {
                const response = res.data;
                if (response.error === null) {
                    setActualOtp(response.data);
                    setTimeout(() => {
                        setShowOtpInput(true);
                        setLoading(false);
                    }, 600);
                }
                else {
                    setTimeout(() => {
                        toast.error(response.error);
                        setLoading(false)
                    }, 600);
                }
            }).catch((err) => {
                console.log(err);
            });
        }
    }
    const VerifyOtp = (e) => {
        e.preventDefault();
        if(actualOtp===otp){
            toast.success("Verified");
            setShowChangePassword(true);
        }
        else{
            toast.error("Invalid OTP");
        }
    }
    return (
        <div className="bg-bgGray min-h-screen flex justify-evenly items-center mx-auto max-md:flex-col">
            {showChangePassword && <NewPassword email={email}/>}
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
                    Lets find Your{" "}
                    <span className="font-alata font-bold text-6xl text-blue hover:text-hoverBlue cursor-pointer">
                        Delta
                    </span>{" "}
                    Account
                </p>
                <p className="font-medium items-center text-lg mt-5 font-montserrat">
                Recover Your Access and Streamline Your Supplier Relationship.
                </p>
                <div className="flex flex-col">
                    <img
                        className="h-48 w-48 mx-auto "
                        src={forgetPwd}
                        alt=""
                    />
                    <div className="flex justify-evenly items-center text-lg m-10 font-poppins">
                        <label
                            className={`${type === "organization"
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
                                onChange={() => setType("organization")}
                            />
                            Organization
                        </label>
                        <label
                            className={`${type === "vendor"
                                ? "bg-blue hover:bg-hoverBlue cursor-pointer px-5 py-2 rounded-lg  text-white text-center border-[2px] border-transparent min-w-[150px]"
                                : "px-5 py-2 border-[2px] border-gray rounded-lg cursor-pointer text-center min-w-[150px]"
                                } `}
                            htmlFor="vendor"
                        >
                            <input
                                type="radio"
                                className="appearance-none"
                                name="ForgetPasswordType"
                                id="vendor"
                                onChange={() => setType("vendor")}
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
                            Forget Password
                        </p>
                        <p className="w-72 mx-10 font-medium">
                            Welcome, Valued Partners. Your Gateway to Password Recovery!
                        </p>
                    </div>
                    <form
                        action=""
                        onSubmit={showOtpInput ? VerifyOtp : SendOtp}
                        className="flex rounded-xl justify-around flex-col p-8 items-center"
                    >
                        <input
                            type="email"
                            className={`border-gray focus:border-blue focus:placeholder:text-[#9ca3af] ${error.email && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[300px] rounded-lg outline-none border-[2.0px] `}
                            placeholder="Email"
                            name="email"
                            id="email"
                            disabled={showOtpInput}
                            onChange={(e) => { setEmail(e.target.value); setError({ ...error, email: false }) }}
                        />
                        {showOtpInput &&
                            <input
                                className={`border-gray focus:border-blue focus:placeholder:text-[#9ca3af]  ${error.otp && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[300px] rounded-lg outline-none border-[2.0px] `}
                                placeholder="OTP"
                                type="text"
                                name="otp"
                                id="otp"
                                maxLength={6}
                                onChange={(e) => setOtp(e.target.value)}
                                value={otp}
                            />
                        }
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
                                value={showOtpInput ? "Verify" : "Send OTP"}
                            />
                        }
                    </form>
                    <div className="flex justify-between mx-10 text-sm mb-10">
                        <p>
                            New ?{" "}
                            <span
                                onClick={() => navigate("/signUp")}
                                className="text-blue  hover:text-hoverBlue font-semibold cursor-pointer"
                            >
                                SignUp
                            </span>
                        </p>
                        <p onClick={()=>navigate('/login')} className="text-blue underline text-semibold hover:text-hoverBlue cursor-pointer">
                            SignIn
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

export default ForgetPassword;
