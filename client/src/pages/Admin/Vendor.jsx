import { useEffect, useRef, useState } from "react";
import DashboardNavbar from "./DashboardNavbar"
import Sidebar from "./Sidebar"
import PendingVen from "./PendingVen";
import ApprovedVen from "./ApprovedVen";
import AddVendor from "./AddVendor";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
const Vendor = () => {
  const [showSidebar, setShowSidebar] = useState(true);
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
          <div className="">
            <Tabs id="custom-animation" value="approved">
              <TabsHeader className="w-3/12" defaultValue={"approved"} >
                <Tab className="" value={"pending"}>
                  {"Pending"}
                </Tab>
                <Tab value={"approved"}>
                  {"Approved"}
                </Tab>
              </TabsHeader>
              <TabsBody>
                <TabPanel value={"pending"}>
                  <PendingVen />
                </TabPanel>
                <TabPanel value={"approved"}>
                  <ApprovedVen />
                </TabPanel>
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vendor