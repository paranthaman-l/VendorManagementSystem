import { useEffect, useRef, useState } from "react";
import DashboardNavbar from "./DashboardNavbar"
import Sidebar from "./Sidebar"
import PendingVen from "./PendingVen";
import ApprovedVen from "./ApprovedVen";
import AddVendor from "./AddVendor";
const Vendor = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showContent, setShowContent] = useState('approved');
  const [showAddVendor, setShowAddVendor] = useState(false);
  const addRef = useRef();
  const handleClickOutside = () => {
    if (addRef.current && !addRef.current.contains(event.target))
      setShowAddVendor(false);
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, [])
  return (
    <div className="flex flex-col">
      {showAddVendor && <AddVendor setShowAddVendor={setShowAddVendor} addRef={addRef} showAddVendor={showAddVendor} />}
      <DashboardNavbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <div className="flex flex-col bg-bgGray min-h-screen">
        <Sidebar showSidebar={showSidebar} />
        <p className="ml-32 mt-24 mb-6 text-xl font-black font-nutnitoSans">Vendor</p>
        <div className="pl-32  min-h-full relative top-0 ">
          <div className="font-nutnitoSans flex justify-between items-center text-lg">
            <ul className="flex items-center">
              <li onClick={() => setShowContent('pending')} className={` ${showContent === 'pending' ? "bg-blue" : "bg-gray bg-opacity-40"} px-5 py-1 mx-3 rounded-xl cursor-pointer`}>
                Pending
              </li>
              <li onClick={() => setShowContent('approved')} className={` ${showContent === 'approved' ? "bg-blue" : "bg-gray bg-opacity-40"} px-5 py-1 mx-3 rounded-xl cursor-pointer`}>
                Approved
              </li>
            </ul>
            <div className="pr-10">
              <button onClick={() => setShowAddVendor(true)} className="px-3 py-1 hover:bg-gray1 rounded-3xl" >Add Vendor</button>
            </div>
          </div>
          {showContent === 'pending' ?
            <PendingVen /> : <ApprovedVen />
          }
        </div>
      </div>
    </div>
  )
}

export default Vendor