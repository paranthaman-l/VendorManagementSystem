import { BiMenuAltLeft } from 'react-icons/bi'
import { CiLogout, CiSearch } from 'react-icons/ci'
import { IoNotificationsOutline } from 'react-icons/io5'
import { FaCaretDown } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getAdmin, logout } from '../../slices/adminSlice'
import { BsPerson } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'
import profile from '../../assets/imgs/paranthaman.jpg'
// eslint-disable-next-line react/prop-types
const DashboardNavbar = ({ setShowSidebar, showSidebar }) => {
    const admin = useSelector(getAdmin);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        navigate('/admin/login');
        dispatch(logout());
    }
    return (
        <div className={`h-20  ${!showSidebar ? "pl-0" : "pl-28"}  flex justify-between items-center w-full bg-white fixed top-0 left-0 shadow-sm z-10`}>
            <div className="flex font-poppins justify-evenly items-center w-[40%]">
                <div onClick={() => setShowSidebar(!showSidebar)} className='bg-gray1 flex justify-center items-center cursor-pointer  h-11 w-11 rounded-sm'><BiMenuAltLeft className='text-2xl' /></div>
                <div className="bg-gray1 min-w-[445px] h-11 rounded-sm relative p-2">
                    <input className='bg-gray1 w-[90%] outline-none placeholder:text-indigo indent-4' type="text" name="search" id="search" placeholder='Type to Search ..' />
                    <span className='absolute right-5'><CiSearch className='text-3xl' /></span>
                </div>
            </div>
            <div className="flex justify-center items-center mx-10">
                <div className='pr-2 border-r-[2px] border-indigo'>
                    <span className='relative'>
                        <IoNotificationsOutline className='text-2xl text-indigo ' />
                        <span className='absolute h-2 w-2 rounded-full top-0 right-[2px] bg-[#ff6150] animate-ping'></span>
                    </span>

                </div>
                <div className="pl-2 flex justify-center font-nutnitoSans items-center group">
                    <img className='cursor-pointer rounded-full w-10 h-10' src={profile} alt="" />
                    <div className="flex flex-col mx-2 font-poppins justify-center">
                        <p className='cursor-pointer'>{admin ? admin.name : "Admin"}</p>
                        <div className="relative">
                            <p className='text-xs flex  items-center text-[#848789] font-semibold'>Admin <span className='ml-1'><FaCaretDown /></span></p>
                            <div className="bg-white shadow-lg min-w-[100px]  right-0 transition duration-500 ease-in-out transform  absolute hidden group-hover:block ">
                                <ul className='flex py-2 flex-col text-sm justify-start items-center'>
                                    <li className='flex px-6 py-3 justify-between items-center border-b-[1px] border-gray w-full border-opacity-50 hover:text-blue cursor-pointer'>
                                        <BsPerson className='mr-2' />
                                        Account
                                    </li>
                                    <li onClick={handleLogout} className='flex px-6 py-3 justify-between items-center border-b-[1px] border-gray w-full border-opacity-50 hover:text-blue cursor-pointer'>
                                        <CiLogout className='mr-2' />
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardNavbar