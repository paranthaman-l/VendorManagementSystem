/* eslint-disable react/jsx-no-target-blank */
import { AiFillTwitterCircle, AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { BsArrowRight, BsFacebook } from 'react-icons/bs';
import { IoPersonCircle } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom'
import { GrLinkedin } from 'react-icons/gr'
import { useEffect, useState } from 'react';
const Footer = () => {
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
    const footerContent = [
        {
            title: "Product",
            values: ["Employee Time Clock",
                "Employee Scheduling",
                "Checklists & Forms",
                "Task Management",
                "Employee Communication",
                "Chat",
                "Employee Directory",
                "Knowledge Base",
                "HR & People Management",
                "Employee Recognition & Rewards",
                "Documents",
                "Employee Training",
                "Quizzes",
                "Employee Timeline",
                "Pricing"
            ]
        },
        {
            title: "Company",
            values: [
                "Customers",
                "About Us",
                "Contact Us",
                "Careers",
                "Affiliates",
                "Partnership",
                "Newsroom"]
        },
        {
            title: "Industries",
            values: [
                "Retail",
                "Security",
                "Cleaning",
                "Hospitality",
                "Construction",
                "Field Services",
                "Logistics",
                "Staffing",
                "More Industries"
            ]
        },
        {
            title: "Resources",
            values: [
                "Blog",
                "Case Studies",
                "Help Center",
                "Template Library",
                "Events",
                "Time Card Calculator",
                "Delta vs Whatsapp"
            ]
        }
    ]
    const endFooterOptions = [
        { title: "FAQ", value: "/faq" },
        { title: "GDPR Ready", value: "/" },
        { title: "Privacy", value: "/policy" },
        { title: "Terms", value: "/terms&condition" },
        { title: "Admin", value: "/admin/login" },
        { title: "Accessibility", value: "/" },
        { title: "Cookies Policy", value: "/" },
        { title: "Cookies Settings", value: "/" },
    ]
    return (
        <>
            {
                (currentPath !== '/login') && (currentPath !== '/signUp') && (currentPath !== '/forgetPwd') &&
                (currentPath !== '/admin/login') && (currentPath !== '/admin/dashboard') && (currentPath !== '/admin/organization') &&
                (currentPath !== '/admin/complaints') && (currentPath !== '/admin/contracts') && (currentPath !== '/admin/vendors') &&
                (currentPath !== '/admin/team') &&
                (currentPath !== '/getDetails')
                &&
                <div className="flex flex-col bg-[#f9f9fb]">
                    <div className='flex justify-between items-start mx-14 mt-10 border-b-[1.5px] border-opacity-75 border-gray lg-max:flex-col'>
                        <div className="flex flex-col min-h-[720px] lg-max:min-h-max">
                            <p className='text-blue font-poppins font-semibold text-3xl'>Delta</p>
                            <p className='text-darkGray text-opacity-70 font-semibold my-2'>All Rights Reserved © Delta.com</p>
                            <div className="flex justify-start items-center mt-10">
                                <button onClick={() => navigate('/login')} className='flex mr-3 hover:text-blue hover:border-blue text-darkGray text-opacity-70 border-opacity-70 border-[2px] border-darkGray font-poppins text-base justify-center font-semibold  duration-150 rounded-3xl items-center px-3 py-[9px]'>
                                    <IoPersonCircle className='mr-2 text-2xl' />
                                    Login
                                </button>
                                <button onClick={() => navigate('/signUp')} className='group flex mr-1 hover:text-blue hover:border-blue text-opacity-70 border-opacity-70 text-darkGray border-[2px] border-darkGray font-poppins text-base justify-center font-semibold  duration-150 rounded-3xl items-center px-3 py-[9px]'>
                                    Start for Free
                                    <BsArrowRight className='mx-2 text-2xl group-hover:translate-x-2 duration-300' />
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between w-[65%] lg-max:w-full">
                            {footerContent.map((content, i) => {
                                return (
                                    <div key={i} className="">
                                        <p className='text-black font-poppins font-semibold'>{content.title}</p>
                                        <ul className="w-[185px]">
                                            {content.values.map((value, ii) => {
                                                return (
                                                    <li className='text-[#707C88] cursor-pointer hover:text-blue duration-150 tracking-wider my-6 font-poppins  text-sm ' key={ii}>{value}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex justify-between mx-14 py-6 mb-5">
                        <div className="flex w-[65%]">
                            <ul className='flex w-full justify-between'>
                                {endFooterOptions.map((data, i) => {
                                    return (
                                        <li className='underline font-poppins text-[15px] cursor-pointer text-darkGray text-opacity-70 hover:text-blue duration-300' onClick={() => navigate(`${data.value}`)} key={i}>{data.title}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="flex justify-center text-3xl">
                            <a target='_blank' href="https://www.facebook.com/profile.php?id=61551578405915&is_tour_dismissed=true" rel='facebook'>
                                <BsFacebook className='hover:text-blue mx-3 rounded-full cursor-pointer' />
                            </a>
                            <a target='_blank' href="https://www.youtube.com/channel/UCWQWLV3gMTz0w_ZPoIW7kRg">
                                <AiFillYoutube className='bg-black cursor-pointer p-1 mx-3 hover:bg-blue text-white rounded-full' />
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/delta-enterprise-b37179293/">
                                <GrLinkedin className='rounded-full mx-3 cursor-pointer hover:text-blue' />
                            </a>
                            <a target='_blank' href="https://www.instagram.com/deltavms/">
                                <AiOutlineInstagram className='rounded-full cursor-pointer p-1 bg-black text-white hover:bg-blue mx-3' />
                            </a>
                            <a target='_blank' href="https://twitter.com/deltavms">
                                <AiFillTwitterCircle className='hover:text-blue mx-3 rounded-full cursor-pointer' />
                            </a>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Footer