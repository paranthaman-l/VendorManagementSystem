import { useState } from 'react'
import VendorService from '../services/VendorService';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FcCheckmark } from 'react-icons/fc';
const NewPassword = (email) => {
    const navigate = useNavigate();
    const [passStrength, setPassStrength] = useState('');
    const [passAndConPass, setPassAndConPass] = useState(false);
    const [pass, setPass] = useState({
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const checkPassword = (password) => {
        if (password.trim() === '')
            return 0;
        let i = 0;
        if (password.length > 6)
            i++
        if (password.length >= 10)
            i++;
        if (/[A-Z]/.test(password))
            i++;
        if (/[0-9]/.test(password))
            i++;
        if (/[!@#$%^&*()_+{}\\[\]:;<>,.?~\\]/.test(password))
            i++;
        if (/[A-Za-z0-9]/.test(password))
            i++;
        return i;
    }
    const Validate = () => {
        setError({});
        let err = {}
        if (pass.password.trim() === '')
            err.password = true;
        if (passStrength !== 'strong')
            err.password = true;
        if (pass.confirmPassword.trim() === '' || pass.password !== pass.confirmPassword)
            err.confirmPassword = true;
        setError(err);
        return err;
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPass({ ...pass, [name]: value });
        setError({ ...error, [name]: false });
        if (name === 'password') {
            let strength = checkPassword(e.target.value);
            if (strength === 0)
                setPassStrength('');
            else if (strength <= 2)
                setPassStrength('weak');
            else if (strength >= 2 && strength <= 4)
                setPassStrength('medium');
            else
                setPassStrength('strong');
        }
        if (name === 'confirmPassword') {
            if (pass.password === e.target.value)
              setPassAndConPass(true);
            else
              setPassAndConPass(false);
          }
    }
    const ChangePassword = async (e) => {
        e.preventDefault();
        let err = Validate();
        if (!err.password && !err.confirmPassword) {
            setLoading(true);
            await VendorService.ChangePassword(email.email, pass.password).then((res) => {
                const response = res.data;
                setTimeout(() => {
                    toast.success(response.data);
                    setLoading(false);
                    navigate('/login');
                }, 600)
            }).catch((err) => {
                console.log(err);
            });
        }
        else {
            return;
        }
        setTimeout(() => {
            setLoading(false);
        }, 600)
    }
    return (
        <div className='bg-gray bg-opacity-30 absolute h-screen flex justify-center items-center backdrop-blur-sm w-full '>
            <form className=' bg-white flex rounded-xl justify-around flex-col p-8 items-center' onSubmit={ChangePassword} >
                <p className="text-4xl flex mx-10 my-4 font-bold text-blue hover:text-hoverBlue">
                    New Password
                </p>
                <div className="relative">
                    <input
                        className={`border-gray focus:border-blue focus:placeholder:text-[#9ca3af]  relative ${error.password && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[380px] rounded-lg outline-none border-[2.0px] border-gray`}
                        placeholder="Password"
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        value={pass.password}
                    />
                    <div className="absolute right-3 w-14 h-2 rounded-xl -bottom-1 transition-width duration-500 ease-in-out">
                        {passStrength === 'weak' ?
                            (<div className="bg-inputErrorRed rounded-l-xl h-2 w-[25%]  transition-width duration-500 ease-in-out"></div>)
                            : passStrength === 'medium' ?
                                (<div className="bg-yellow rounded-l-xl h-2 w-[73%] transition-width duration-500 ease-in-out"></div>)

                                : passStrength === 'strong' ?
                                    (<div className="bg-green-500 rounded-l-xl rounded-r-xl h-2 w-[100%] transition-width duration-500 ease-in-out"></div>)
                                    :
                                    (<div className="bg-transparent rounded-l-xl w-[5%] transition-width"></div>)
                        }
                    </div>
                </div>
                <div className="relative">

                    <input
                        className={`border-gray focus:border-blue focus:placeholder:text-[#9ca3af] ${error.confirmPassword && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[380px] rounded-lg outline-none border-[2.0px] `}
                        placeholder="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        onChange={handleChange}
                        value={pass.confirmPassword}
                    />
                    <span className="absolute right-6 top-6">
                        {passAndConPass && <FcCheckmark className="text-xl" />}
                    </span>
                </div>
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
                        value={"Change Password"}
                    />
                }
            </form>
        </div>
    )
}

export default NewPassword