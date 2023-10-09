import { useEffect, useState } from 'react'
import delta from '../assets/imgs/delta.png';
import { IoPersonCircle } from 'react-icons/io5'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useLocation, useNavigate } from 'react-router-dom';
import Company from './Company';
import Resource from './Resource';
import { CgMenu,CgClose } from 'react-icons/cg';
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  // eslint-disable-next-line no-unused-vars
  const [isScroll, setIsScrolled] = useState(false);
  const [isShow, setIsShow] = useState(false)
  const onScroll = () => {
    if (window.scrollY > 2) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    return () => window.removeEventListener("scroll", onScroll);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const path = [
    "/login",
    "/signUp",
    "/forgetPwd",
    "/admin/*",
    "/admin/login",
    "/admin/dashboard",
    "/admin/vendors",
    "/admin/contracts",
    "/admin/organization",
    "/admin/complaints",
    "/admin/team",
    "/vendor/home",
    "/vendor/onboardingTeam",
    "/vendor/services",
    "/vendor/services",
    "/vendor/contracts",
    "/vendor/riskManagement",
    "/vendor/certifications",
    "/vendor/profile",
    "/vendor/*",
    "/organization/*",
    "/getDetails"
    
  ]
  return (
    <>
      {(!(path.find((p) => (p === currentPath))))
        &&
        <div className={`${isScroll && " bg-white  bg-opacity-90"} navbar bg-transparent backdrop-blur-[2px] flex justify-between items-center fixed w-full top-0 z-50 h-20 px-10 duration-500`}>
          <div onClick={() => navigate('/')} className="flex max-w-[25%] justify-start items-center">
            <img className='h-7 w-7' src={delta} alt="" />
            <p className='text-3xl font-poppins font-black p-0 m-0 text-indigo1 hover:text-[#4ad295] cursor-pointer'>Delta</p>
          </div>
          <div className={`${isShow && "hidden lg:hidden"} lg:hidden`}>
            <CgMenu className='text-2xl ' onClick={() => setIsShow(true)} />
          </div>
          <div className={` ${isShow ? "lg-max:block" : "lg-max:hidden"}  min-w-[75%] flex justify-between items-center lg-max:flex-col lg-max:left-0 lg-max:absolute lg-max:bg-blue lg-max:bg-opacity-90 top-0 left-0 lg-max:min-h-screen lg-max:w-full`}>
          <div className="lg:hidden absolute right-10 top-8 text-2xl text-white">
            <CgClose onClick={() => setIsShow(false)} />
          </div>
            <div className="w-full text-indigo1 ">
              <ul className='flex justify-evenly w-full items-center lg-max:flex-col lg-max:justify-start lg-max:mt-20'>
                <li onClick={() => navigate('/home')} className='flex justify-center items-center font-poppins font-bold hover:text-blue cursor-pointer lg-max:py-10 lg-max:text-white'>
                  Vendors <RiArrowDropDownLine className='text-2xl' />
                </li>
                <li className='flex justify-center items-center font-poppins font-bold hover:text-blue cursor-pointer lg-max:py-10 lg-max:text-white'>
                  Organization <RiArrowDropDownLine className='text-2xl' />
                </li>
                <li className='flex justify-center items-center font-poppins font-bold hover:text-blue cursor-pointer lg-max:py-10 lg-max:text-white'>
                  Pricing
                </li>
                <li className='flex group justify-center items-center font-poppins font-bold hover:text-blue py-7 cursor-pointer lg-max:py-10 lg-max:text-white'>
                  Company <RiArrowDropDownLine className='text-2xl' />
                  <div className="hidden absolute top-20 w-full duration-700 left-0 rounded-sm bg-white group-hover:block">
                    <Company />
                  </div>
                </li>
                <li className='flex group justify-center items-center font-poppins font-bold hover:text-blue py-7 cursor-pointer lg-max:py-10 lg-max:text-white'>
                  Resources <RiArrowDropDownLine className='text-2xl' />
                  <div className="hidden absolute top-20 w-full duration-700 left-0 rounded-sm bg-white group-hover:block">
                    <Resource />
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center lg-max:flex-col lg-max:py-10 lg-max:text-white">
              <button onClick={() => navigate('/login')} className='flex mr-1 text-indigo1 font-poppins text-base justify-center font-semibold hover:bg-[#eaf5ff] duration-150 rounded-3xl items-center px-3 py-3 lg-max:py-10 lg-max:text-white'>
                <IoPersonCircle className='mr-2 text-indigo1 text-2xl' />
                Login
              </button>
              <button onClick={() => navigate('/signUp')} className='flex min-w-[197px]  bg-blue  font-poppins text-base justify-center font-semibold hover:bg-hoverBlue text-white duration-150 rounded-3xl items-center px-3 py-3 lg-max:bg-indigo2'>
                Start Now, Its free!
              </button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Navbar