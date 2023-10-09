import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom"
import AdminService from "../../services/AdminService";
import { useDispatch } from 'react-redux'
import { setAdmin } from "../../slices/adminSlice";
import AuthService from "../../services/AuthService";
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [loginError, setLoginError] = useState({});
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    }
    const Validate = () => {
        setLoginError({});
        let error = {}
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
                setTimeout(async () => {
                    setLoading(false);
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('role', response.data.role);
                    if (response.data.role === "ADMIN") {
                        console.log("Hii");
                        await AdminService.getAdminData(response.data.uid).then((res) => {
                            dispatch(setAdmin(res.data))
                            navigate('/admin/dashboard');
                        }).catch(() => {
                            toast.error("Something went wrong!");
                        })
                    }
                }, 1000)
                // toast.error(response.error);
                setLoading(false);
            }).catch((err) => {
                // console.log(err);
            })
            setLoading(false);
        }
    }
    return (
        <div className="min-h-screen min-w-full flex justify-center items-center bg-bgGray">
            <Toaster />
            <div className="flex justify-center font-poppins rounded-xl bg-white shadow-lg">
                <div className="flex flex-col justify-center">
                    <div className="">
                        <p className="text-4xl mx-10 my-4 font-bold text-blue hover:text-hoverBlue">
                            Admin Login
                        </p>
                        <p className="w-72 mx-10 font-medium">
                            Welcome, Admin !
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
                    <div className="flex justify-end mx-10 text-sm mb-10">
                        <p onClick={() => navigate('/forgetPwd')} className="text-blue hover:underline hover:text-hoverBlue cursor-pointer">
                            forget your password?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login