/* eslint-disable react/prop-types */
import { RxDashboard } from 'react-icons/rx'
import { GoOrganization } from 'react-icons/go'
import { LiaFileContractSolid } from 'react-icons/lia'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { TbNotes } from 'react-icons/tb'
import { useLocation, useNavigate } from 'react-router-dom'
import { AiOutlineTeam } from 'react-icons/ai'
import logo from '../../assets/imgs/delta.png'
const Sidebar = ({ showSidebar }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    // console.log(currentPath);
    return (
        <>
            {
                showSidebar &&
                <div className="h-screen z-30 text-white transition-width duration-500 ease-in-out bg-[#1f2f3e] fixed w-[7%]">
                    <ul className="flex flex-col justify-center">
                        <li className="text-4xl h-24 flex justify-center items-center font-nutnitoSans py-4 border-b-[1px] border-gray1 border-opacity-40 w-full text-center font-bold ">
                            <p className="cursor-pointer " onClick={()=>navigate('/')}><img className='h-10 w-10' src={logo} alt="" /></p>
                        </li>
                        <li className={`${currentPath==='/admin/dashboard' && "text-blue"} text-3xl h-24 flex justify-center items-center font-nutnitoSans py-4 border-b-[1px] border-gray1 border-opacity-40 w-full text-center font-bold `}>
                            <p onClick={() => navigate('/admin/dashboard')} className="cursor-pointer hover:text-blue">
                                <span className='flex flex-col justify-center items-center'><RxDashboard /><span className='text-sm font-light'>Dashboard</span></span>
                            </p>
                        </li>
                        <li className={`${currentPath==='/admin/organization' && "text-blue"} text-3xl h-24 flex justify-center items-center font-nutnitoSans py-4 border-b-[1px] border-gray1 border-opacity-40 w-full text-center font-bold `}>
                            <p onClick={() => navigate('/admin/organization')} className="cursor-pointer hover:text-blue">
                                <span className='flex flex-col justify-center items-center'><GoOrganization /><span className='text-sm font-light'>Organization</span></span>
                            </p>
                        </li>
                        <li className={`${currentPath==='/admin/vendors' && "text-blue"} text-3xl h-24 flex justify-center items-center font-nutnitoSans py-4 border-b-[1px] border-gray1 border-opacity-40 w-full text-center font-bold `}>
                            <p onClick={() => navigate('/admin/vendors')} className="cursor-pointer hover:text-blue">
                                <span className='flex flex-col justify-center items-center'><MdOutlineMiscellaneousServices /><span className='text-sm font-light'>Vendors</span></span>
                            </p>
                        </li>
                        <li className={`${currentPath==='/admin/contracts' && "text-blue"} text-3xl h-24 flex justify-center items-center font-nutnitoSans py-4 border-b-[1px] border-gray1 border-opacity-40 w-full text-center font-bold `}>
                            <p onClick={() => navigate('/admin/contracts')} className="cursor-pointer hover:text-blue">
                                <span className='flex flex-col justify-center items-center'><LiaFileContractSolid /><span className='text-sm font-light'>Contracts</span></span>
                            </p>
                        </li>
                        {/* <li className={`${currentPath==='/admin/complaints' && "text-blue"} text-3xl h-24 flex justify-center items-center font-nutnitoSans py-4 border-b-[1px] border-gray1 border-opacity-40 w-full text-center font-bold `}>
                            <p onClick={() => navigate('/admin/complaints')} className="cursor-pointer hover:text-blue">
                                <span className='flex flex-col justify-center items-center '><TbNotes /><span className='text-sm font-light'>Complaints</span></span>
                            </p>
                        </li>
                        <li className={`${currentPath==='/admin/team' && "text-blue"} text-3xl h-24 flex justify-center items-center font-nutnitoSans py-4 border-b-[1px] border-gray1 border-opacity-40 w-full text-center font-bold `}>
                            <p onClick={() => navigate('/admin/team')} className="cursor-pointer hover:text-blue">
                                <span className='flex flex-col justify-center items-center '><AiOutlineTeam /><span className='text-sm font-light'>Our Team</span></span>
                            </p>
                        </li> */}
                    </ul>
                </div>
            }
        </>
    )
}

export default Sidebar