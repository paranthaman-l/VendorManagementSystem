import { useEffect, useState } from 'react'
import delta from '../assets/imgs/delta.png';
import { IoPersonCircle } from 'react-icons/io5'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useLocation, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  // eslint-disable-next-line no-unused-vars
  const [isScroll, setIsScrolled] = useState(false);
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
  return (
    <>
      {
      (currentPath !== '/login') && (currentPath !== '/signUp') && (currentPath !== '/forgetPwd') &&
      (currentPath !== '/admin/login') && (currentPath !== '/admin/dashboard') && (currentPath !== '/admin/organization') &&
      (currentPath !== '/admin/complaints') && (currentPath !== '/admin/contracts') && (currentPath !== '/admin/vendors') &&
      (currentPath !== '/admin/team') 
      &&
        <div className={`${isScroll && " bg-white  bg-opacity-90"} navbar bg-transparent backdrop-blur-[2px] flex justify-between items-center fixed w-full top-0 z-50 h-20 px-10 duration-500`}>
          <div onClick={() => navigate('/')} className="flex max-w-[25%] justify-start items-center">
            <img className='h-7 w-7' src={delta} alt="" />
            <p className='text-3xl font-poppins font-black p-0 m-0 text-indigo1 hover:text-[#4ad295] cursor-pointer'>Delta</p>
          </div>
          <div className="min-w-[75%] flex justify-between items-center">
            <div className="w-full text-indigo1">
              <ul className='flex justify-evenly w-full items-center'>
                <li className='flex justify-center items-center font-poppins font-bold hover:text-blue cursor-pointer'>
                  Vendors <RiArrowDropDownLine className='text-2xl' />
                </li>
                <li className='flex justify-center items-center font-poppins font-bold hover:text-blue cursor-pointer'>
                  Organization <RiArrowDropDownLine className='text-2xl' />
                </li>
                <li className='flex justify-center items-center font-poppins font-bold hover:text-blue cursor-pointer'>
                  Pricing
                </li>
                <li className='flex justify-center items-center font-poppins font-bold hover:text-blue cursor-pointer'>
                  Company <RiArrowDropDownLine className='text-2xl' />
                </li>
                <li className='flex justify-center items-center font-poppins font-bold hover:text-blue cursor-pointer'>
                  Resources <RiArrowDropDownLine className='text-2xl' />
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <button onClick={() => navigate('/login')} className='flex mr-1 text-indigo1 font-poppins text-base justify-center font-semibold hover:bg-[#eaf5ff] duration-150 rounded-3xl items-center px-3 py-3'>
                <IoPersonCircle className='mr-2 text-indigo1 text-2xl' />
                Login
              </button>
              <button onClick={() => navigate('/signUp')} className='flex min-w-[197px]  bg-blue  font-poppins text-base justify-center font-semibold hover:bg-hoverBlue text-white duration-150 rounded-3xl items-center px-3 py-3'>
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