import { useState } from "react";
import DashboardNavbar from "./DashboardNavbar"
import Sidebar from "./Sidebar"
const Complaints = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="flex flex-col">
      <DashboardNavbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <div className="flex flex-col bg-bgGray min-h-screen">
        <Sidebar showSidebar={showSidebar} />
        <p className="ml-32 mt-24 mb-6 text-xl font-black font-nutnitoSans">Complaints</p>
        <div className="pl-32 grid grid-flow-row w-full gap-4 grid-cols-3 min-h-full relative top-0 ">
            
        </div>
      </div>
    </div>
  )
}

export default Complaints