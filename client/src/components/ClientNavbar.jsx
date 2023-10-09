import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import delta from '../assets/imgs/delta.png';
import search from '../assets/imgs/search.svg';
import down from '../assets/imgs/down.svg'
import msg from '../assets/imgs/msg.svg'
import profileIcon from '../assets/imgs/profile.svg'
import setting from '../assets/imgs/setting.svg'
import signout from '../assets/imgs/logout.svg'
import play from '../assets/imgs/play.svg'
import question from '../assets/imgs/question.svg'
import { Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { getVendor, setVendor } from "../slices/vendorSlice";
import VendorService from "../services/VendorService";
import toast from "react-hot-toast";
import Skeleton from 'react-loading-skeleton'
const ClientNavbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const vendor = useSelector(getVendor)
    const location = useLocation();
    const currentPath = location.pathname;
    // eslint-disable-next-line no-unused-vars
    const [isScroll, setIsScrolled] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showHelp, setShowHelp] = useState(false);
    const [profile, setProfile] = useState("");
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
    useEffect(() => {
        const authentication = async () => {
            await VendorService.getVendorData(localStorage.getItem('id')).then((res) => {
                dispatch(setVendor(res.data));
                setProfile(res.data.profile);
                setLoading(false);
            }).catch(() => {
                toast.error("Something went wrong!");
                setLoading(false);
            })
        }
        authentication();
    }, [])
    const path = [
        "/",
        "/login",
        "/signUp",
        "/forgetPwd",
        "/admin/login",
        "/admin/vendors",
        "/admin/contracts",
        "/admin/dashboard",
        "/admin/organization",
        "/admin/complaints",
        "/admin/team",
        "/about",
        "/contact",
        "/policy",
        "/terms&condition",
        "/faq",
        "/getDetails"
    ]
    return (
        <>
            {(!(path.find((p) => (p === currentPath)))) &&
                <div className={`${isScroll && " bg-white  bg-opacity-90"} navbar bg-transparent backdrop-blur-[2px] flex justify-between items-center fixed w-full top-0 z-50 h-20 px-10 duration-500`}>
                    <div onClick={() => navigate('/vendor/dashboard')} className="flex max-w-[25%] justify-start items-center">
                        <img className='h-7 w-7' src={delta} alt="" />
                        <p className='text-3xl font-poppins font-black p-0 m-0 text-indigo1 hover:text-[#4ad295] cursor-pointer'>Delta</p>
                        <div className="flex mx-10 justify-between min-w-[300px] border-[2px] rounded-xl border-darkGray border-opacity-20 ">
                            <input className="px-2 w-full ml-3 py-2 outline-none bg-transparent" type="text" placeholder="Search anything" />
                            <img className="mr-2" src={search} alt="" />
                        </div>
                    </div>
                    <div className="flex items-center relative">
                        <p onClick={() => setShowHelp(!showHelp)} className="flex cursor-pointer justify-center border-x-[1px] border-gray min-h-[40px] px-3 border-opacity-50 items-center text-blue">Help <img className="" src={down} alt="" /></p>
                        <img className="mx-2 cursor-pointer" src={msg} alt="" />
                        {
                            showHelp &&
                            <div className="flex absolute w-[250px] p-2 left-0 top-14 flex-col justify-center bg-white shadow-xl rounded-xl">
                                <ul className="flex flex-col py-1 justify-start w-full text-darkGray">
                                    <li className="flex justify-start items-center py-2 rounded-xl text-lg cursor-pointer my-[2px] w-full hover:bg-[#f6f7f7]">
                                        <img className="w-6 h-6 mx-2" src={play} alt="" /> Watch video tutorials
                                    </li>
                                    <li className="flex justify-start items-center py-2 rounded-xl text-lg cursor-pointer my-[2px] w-full hover:bg-[#f6f7f7]">
                                        <img className="w-6 h-6 mx-2" src={question} alt="" /> Visit the Contact
                                    </li>
                                </ul>
                            </div>
                        }
                        <div className="relative">
                            <img className="mx-2 cursor-pointer" src="https://app.connecteam.com/images/base-line/header/notification-bell-new.svg" alt="" />
                            <span className="absolute h-2 w-2 rounded-full right-2 animate-ping top-0 bg-red-400"></span>
                        </div>
                        <Menu animate={{
                            mount: { y: 0 },
                            unmount: { y: 25 },
                        }}>
                            <MenuHandler>
                                {loading ? 
                                    <div className="">
                                        <Skeleton className="w-[200px] h-10"/>
                                    </div>
                                    :
                                    <div className="flex  w-[250px] justify-center border-l-[1px] text-gray border-opacity-50  items-center">
                                        <img className="h-10 w-10 object-cover mx-2 rounded-full" src={`data:image/jpeg;base64,` + profile} alt="" />
                                        <p className="flex justify-center items-center  uppercase text-blue hover:text-hoverBlue cursor-pointer line-clamp-1">{vendor ? vendor?.user?.name : "Vendor Name"}<img className="" src={down} alt="" /></p>
                                    </div>
                                }
                            </MenuHandler>
                            <MenuList className="flex absolute w-[250px] p-2 right-0 top-14 flex-col justify-center bg-white shadow-xl rounded-xl">
                                <MenuItem className="flex justify-center  p-1 bg-lightSkyBlue2 rounded-xl  items-center">
                                    <img className="h-10 w-10 object-cover mx-1 rounded-full" src={`data:image/jpeg;base64,` + profile} alt="" />
                                    <p className="flex justify-center p-1 flex-col items-start line-clamp-1 uppercase text-black font-semibold  cursor-pointer"><span className="line-clamp-1">{vendor ? vendor?.user?.name : "Vendor Name"}</span><span className="text-sm font-normal font-inter">{vendor ? vendor?.user?.role : "ROLE"}</span></p>
                                </MenuItem>
                                <MenuItem className="flex items-center hover:bg-white border-t-[1px] border-gray border-opacity-50 mt-2">
                                    <div className="flex flex-col py-1 justify-start w-full text-darkGray">
                                        <MenuItem onClick={() => navigate('/vendor/profile')} className="flex justify-start items-center py-2 rounded-xl text-lg cursor-pointer my-[2px] w-full hover:bg-lightSkyBlue2">
                                            <img className="w-6 h-6 mx-2" src={profileIcon} alt="" /> Profile
                                        </MenuItem>
                                        <MenuItem className="flex justify-start items-center py-2 rounded-xl text-lg cursor-pointer my-[2px] w-full hover:bg-lightSkyBlue2">
                                            <img className="w-6 h-6 mx-2" src={setting} alt="" /> Settings
                                        </MenuItem>
                                        <MenuItem className="flex justify-start items-center py-2 rounded-xl text-lg cursor-pointer my-[2px] w-full hover:bg-lightSkyBlue2">
                                            <img className="mx-2 w-6 h-6" src="https://app.connecteam.com/images/base-line/header/notification-bell-new.svg" alt="" />
                                            Notification
                                        </MenuItem>
                                        <MenuItem onClick={() => { navigate('/login'); localStorage.clear() }} className="flex justify-start items-center py-2 rounded-xl text-lg cursor-pointer my-[2px] w-full hover:bg-lightSkyBlue2">
                                            <img className="w-6 h-6 mx-2" src={signout} alt="" /> Logout
                                        </MenuItem>
                                    </div>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                </div>
            }
        </>
    )
}

export default ClientNavbar