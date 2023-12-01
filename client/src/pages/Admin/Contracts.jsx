import { useEffect, useState } from "react";
import DashboardNavbar from "./DashboardNavbar"
import Sidebar from "./Sidebar"
import { Card, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { getContracts } from "../../slices/adminSlice";
import AdminService from "../../services/AdminService";

import contract from '../../assets/imgs/contract1.png'
import search from '../../assets/imgs/search.svg'
const Contracts = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const TABLE_HEAD = ["S.No", "Title", "Description", "contract Value", "Start date", "End date", "Payment"];
  const TABLE_ROWS = ["S.No", "Title", "Description", "contract Value", "Start date", "End date", "Payment"];
  // const contracts = useSelector(getContracts)
  const [contracts, setContracts] = useState([]);
  const getContracts = async () => {
    await AdminService.getAllContracts().then((response) => {
      setContracts(response.data)
      console.log(response);
    }).catch((error) => {
      // console.log(error);
    })
  }
  useEffect(() => {
    getContracts();
  }, [])

  const handleSearchChange = async (e) => {
    if (e.target.value == "")
      getContracts();
    else {
      await AdminService.getBySearch(e.target.value).then((response) => {
        setContracts(response.data);
      }).catch((e) => {
        console.log(e);
      })
    }
  }

  return (
    <div className="flex flex-col">
      <DashboardNavbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <div className="flex flex-col bg-bgGray min-h-screen">
        <Sidebar showSidebar={showSidebar} />
        <div className="flex  mt-24 ml-32 justify-between px-10 mr-5 py-3 rounded-xl bg-white shadow-xl">
          <div className="flex justify-center items-center">
            <img className='h-16 w-16 mr-5' src={contract} alt="" />
            <p className='font-openSans text-2xl my-1 '>Contracts</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex mx-5 justify-between min-w-[300px] border-[2px] rounded-3xl border-darkGray border-opacity-20 ">
              <input className="px-2 w-full ml-3 py-2 outline-none bg-transparent" name="search" id="search" onChange={handleSearchChange} type="text" placeholder="Search" />
              <img className="mr-2" src={search} alt="" />
            </div>
          </div>
        </div>
        {/* <p className="ml-32 mt-24 mb-6 text-xl font-black font-nutnitoSans">Contracts</p> */}
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
              {contracts.map(({ contractTitle, contractDescription, contractValue, startDate, endDate, paymentStatus }, index) => {
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
                        {index + 1}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {contractTitle}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {contractDescription}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {contractValue}
                      </Typography>
                    </td>

                    {/* <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {service}
                      </Typography>
                    </td> */}
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {startDate}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {endDate}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {paymentStatus ? "Paid" : "Not paid"}
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