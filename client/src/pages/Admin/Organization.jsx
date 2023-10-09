import { useEffect, useRef, useState } from "react";
import DashboardNavbar from "./DashboardNavbar"
import Sidebar from "./Sidebar"
import PendingOrg from "./PendingOrg";
import ApprovedOrg from "./ApprovedOrg";
import AddOrg from "./AddOrg";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
const Organization = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showAddOrg, setShowAddOrg] = useState(false);
  const addRef = useRef();
  const handleClickOutside = () => {
    if (addRef.current && !addRef.current.contains(event.target))
    setShowAddOrg(false);
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

  }, [])

  return (
    <div className="flex flex-col">
      {showAddOrg && <AddOrg showAddOrg={showAddOrg} addRef={addRef} setShowAddOrg={setShowAddOrg} />}
      <DashboardNavbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <div className="flex flex-col bg-bgGray min-h-screen">
        <Sidebar showSidebar={showSidebar} />
        <p className="ml-32 mt-24 mb-6 text-xl font-black font-nutnitoSans">Organization</p>
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
                <PendingOrg />
                </TabPanel>
                <TabPanel value={"approved"}>
                <ApprovedOrg />
                </TabPanel>
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Organization