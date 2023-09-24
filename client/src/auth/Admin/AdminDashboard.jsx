import { useState } from "react";
import DashboardNavbar from "./DashboardNavbar"
import Sidebar from "./Sidebar"
import { FcOrganization, FcShop } from 'react-icons/fc'
import { FaFileContract } from 'react-icons/fa'
import { TbNotes } from 'react-icons/tb'
import { useSelector } from "react-redux";
import { getOrganizations, getVendors } from "../../slices/adminSlice";
const AdminDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const vendors = useSelector(getVendors);
  const orgs = useSelector(getOrganizations);

  return (
    <div className="flex flex-col">
      <DashboardNavbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <div className="flex flex-col bg-bgGray min-h-screen">
        <Sidebar showSidebar={showSidebar} />
        <p className="ml-32 mt-24 mb-6 text-xl font-black font-nutnitoSans">Dashboard</p>
        <div className="pl-32 grid grid-flow-row w-full gap-4 grid-cols-3 min-h-full relative top-0 ">
          <div className="flex group justify-between items-center h-40 w-96 font-nutnitoSans shadow-md hover:-translate-y-2 transition-all  delay-100 ease-in-out rounded-xl bg-white">
            <div className="">
              <p className="text-xl font-bold  mb-4 mx-4 flex justify-start items-center relative pl-14"> <span className="absolute group-hover:scale-110 group-hover:animate-spin  bg-[#90caf9] bg-opacity-40 h-10 w-10 rounded-full flex justify-center items-center left-3"><FcOrganization className="text-3xl group-hover:animate-shake-slight" /></span>Total Organizations</p>
              <p className="text-4xl  text-start mx-8">{orgs.length}</p>
            </div>
          </div>
          <div className="flex group justify-between items-center h-40 w-96 font-nutnitoSans shadow-md hover:-translate-y-2 transition-all  delay-100 ease-in-out rounded-xl bg-white">
            <div className="">
              <p className="text-xl font-bold  mb-4 mx-4 flex justify-start items-center relative pl-14"> <span className="absolute group-hover:scale-110 group-hover:animate-spin  bg-[#7cb342] bg-opacity-40 h-10 w-10 rounded-full flex justify-center items-center left-3"><FcShop className="text-3xl group-hover:animate-shake-slight" /></span>Total Vendors</p>
              <p className="text-4xl  text-start mx-8">{vendors.length}</p>
            </div>
          </div>
          <div className="flex group justify-between items-center h-40 w-96 font-nutnitoSans shadow-md hover:-translate-y-2 transition-all  delay-100 ease-in-out rounded-xl bg-white">
            <div className="">
              <p className="text-xl font-bold  mb-4 mx-4 flex justify-start items-center relative pl-14"> <span className="absolute group-hover:scale-110 group-hover:animate-spin  bg-[#000000] bg-opacity-40 h-10 w-10 rounded-full flex justify-center items-center left-3"><FaFileContract className="text-2xl group-hover:animate-shake-slight" /></span>Total Contracts</p>
              <p className="text-4xl  text-start mx-8">120000</p>
            </div>
          </div>
          <div className="flex group justify-between items-center h-40 w-96 font-nutnitoSans shadow-md hover:-translate-y-2 transition-all  delay-100 ease-in-out rounded-xl bg-white">
            <div className="">
              <p className="text-xl font-bold  mb-4 mx-4 flex justify-start items-center relative pl-14"> <span className="absolute group-hover:scale-110 group-hover:animate-spin  bg-[#000000] bg-opacity-40 h-10 w-10 rounded-full flex justify-center items-center left-3"><TbNotes className="text-3xl group-hover:animate-shake-slight" /></span>Total Complaints</p>
              <p className="text-4xl  text-start mx-8">0</p>
            </div>
          </div>
        </div>
        {/* <div className="w-full pl-32 my-10">
          <img className="w-1/4 object-contain" src="https://www.summit360.com/wp-content/uploads/2017/12/Vendor-Graph.jpg" alt="" />
        </div> */}
      </div>
    </div>
  )
}

export default AdminDashboard