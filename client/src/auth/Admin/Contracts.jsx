import { useState } from "react";
import DashboardNavbar from "./DashboardNavbar"
import Sidebar from "./Sidebar"
import { Card, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { getContracts } from "../../slices/adminSlice";
const Contracts = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const TABLE_HEAD = ["S.No", "Organization", "Vendor", "service", "Start date", "End date", "Payment"];
  const contracts = useSelector(getContracts)
  return (
    <div className="flex flex-col">
      <DashboardNavbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <div className="flex flex-col bg-bgGray min-h-screen">
        <Sidebar showSidebar={showSidebar} />
        <p className="ml-32 mt-24 mb-6 text-xl font-black font-nutnitoSans">Contracts</p>
        {/* <div className="pl-32 min-h-full relative top-0 ">
            <table className="w-full">
              <tr>
                <th>S No</th>
                <th>Organization</th>
                <th>Vendors</th>
                <th>Service</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Payment</th>
              </tr>
              {
                <tr className="text-center">
                  <td>1</td>
                  <td>Org 1</td>
                  <td>Ven 1</td>
                  <td>Water </td>
                  <td>01/01/2020</td>
                  <td>01/01/2025</td>
                  <td>1,00,000</td>
                </tr>
              }
            </table>
        </div> */}
        <Card className="h-full overflow-scroll mt-10 w-[90%] ml-32">
          <table className="w-full min-w-max table text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {contracts.map(({ companyName, vendorName, email, service }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {companyName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {vendorName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {service}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>

      </div>
    </div>
  )
}

export default Contracts