/* eslint-disable no-unused-vars */
import { Card, Typography } from "@material-tailwind/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import deleteIcon from '../../assets/imgs/delete.svg'
import { addVendor, getPendingVendors, removeNewVendor } from "../../slices/adminSlice"
import AdminService from "../../services/AdminService"

const PendingVen = () => {
  const TABLE_HEAD = ["Company Name", "Vendor Name", "email", "Service", ""];
  const pendingVendors = useSelector(getPendingVendors)
  const dispatch = useDispatch();
  // const getPendingVendors =  () => {
  //   // await AdminService.GetPendingVendors().then((res) => {
  //   //   const response = res.data;
  //   //   setPendingVendors(response.data);
  //   //   console.log(response.data);
  //   // }).catch((err) => { console.log(err); })
  // }
  // useEffect(() => {
  //   // getPendingVendors();
  // })
  const Approve = async (vendor,i) => {
    await AdminService.Approve(vendor.email).then((res) => {
      const response = res.data;
      console.log(response);
      dispatch(addVendor(vendor));
      dispatch(removeNewVendor(i));
    }).catch((err) => { console.log(err); })
  }
  return (
    <Card className="h-full w-full overflow-scroll mt-10">
      <table className="w-full min-w-max table-auto text-left">
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
          {pendingVendors?.map((vendor, index) => {
            const isLast = index === pendingVendors?.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr key={index}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {vendor.companyName}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {vendor.firstName}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {vendor.email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {vendor.service}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    <p className='flex justify-center'><span onClick={() => { Approve(vendor,index) }}>Approve</span> <span className='mx-3'><img className='cursor-pointer' src={deleteIcon} alt='' /></span></p>
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  )
}

export default PendingVen