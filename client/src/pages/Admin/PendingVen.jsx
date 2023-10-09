/* eslint-disable no-unused-vars */
import { Card, Typography } from "@material-tailwind/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import deleteIcon from '../../assets/imgs/delete.svg'
import { addVendor, getPendingVendors, removeNewVendor } from "../../slices/adminSlice"
import AdminService from "../../services/AdminService"
import paranthaman from '../../assets/imgs/paranthaman.jpg'
const PendingVen = () => {
  const TABLE_HEAD = ["Company Name", "Vendor Name", "email", "Service", ""];
  // const pendingVendors = useSelector(getPendingVendors)
  const [pendingVendors, setPendingVendors] = useState([])
  const dispatch = useDispatch();
  const getPendingVendors = async () => {
    await AdminService.getVendors(false).then((response) => {
      setPendingVendors(response.data);
      console.log(response);
    }).catch((err) => { console.log(err); })
  }
  useEffect(() => {
    getPendingVendors();
  }, [])
  const Approve = async (vendor, i) => {
    await AdminService.approveVendor(vendor?.vid).then((res) => {
      getPendingVendors();
    }).catch((err) => { console.log(err); })
  }
  return (
    <div className="overflow-x-auto">
      {pendingVendors.length === 0 ?
        <div className="">

        </div>
        :
        // <table className="table">
        //   <thead>
        //     <tr>
        //       <th>
        //         <label htmlFor='allCheckBox'>
        //           <input type="checkbox" className="checkbox" />
        //         </label>
        //       </th>
        //       <th>Name</th>
        //       <th>Contact</th>
        //       <th>Location</th>
        //       <th>Performance</th>
        //       <th></th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     {pendingVendors?.map((vendor, index) => {
        //       return (
        //         <tr key={index}>
        //           <th>
        //             <label >
        //               <input id='allCheckBox' type="checkbox" className="checkbox" />
        //             </label>
        //           </th>
        //           <td>
        //             <div className="flex items-center space-x-3">
        //               <div className="avatar">
        //                 <div className="mask mask-squircle w-12 h-12">
        //                   <img src={vendor?.profile || paranthaman} alt="Avatar Tailwind CSS Component" />
        //                 </div>
        //               </div>
        //               <div>
        //                 <div className="font-bold">{vendor?.user?.name}</div>
        //                 <div className="text-sm opacity-50">{vendor?.companyName || "Company Name"}</div>
        //               </div>
        //             </div>
        //           </td>
        //           <td>
        //             {vendor?.user?.email}
        //             <br />
        //             <span className="badge badge-ghost badge-sm">{vendor?.contact || "+91 9626474259"}</span>
        //           </td>
        //           <td>{vendor?.location || "Location"}</td>
        //           <td>{vendor?.performance || "Normal"}</td>
        //           <th>
        //             <button className="btn btn-ghost btn-xs">Details</button>
        //           </th>
        //         </tr>
        //       )
        //     })}
        //   </tbody>
        //   <tfoot>
        //     <tr>
        //       <th></th>
        //       <th>Name</th>
        //       <th>Contact</th>
        //       <th>Location</th>
        //       <th>Performance</th>
        //       <th></th>
        //     </tr>
        //   </tfoot>
        // </table>
        <div className="hero min-h-screen bg-base-200 flex justify-start rounded-3xl flex-col">
          {pendingVendors.map((vendor, index) => {
            return (
              <div key={index} className="hero-content my-10 h-full flex-col lg:flex-row-reverse px-72 rounded-2xl hover:bg-lightSkyBlue2 w-full">
                <img src={vendor?.profile || paranthaman} className="max-w-sm w-72 h-80 object-cover rounded-lg shadow-2xl" />
                <div className="min-w-full">
                  <h1 className="text-5xl font-bold my-2">{vendor?.companyName || "Company Name"}</h1>
                  <h1 className="text-3xl font-semibold">{vendor?.user?.name || "Vendor Name"}</h1>
                  <p className="py-6">{vendor?.about|| "About"}</p>
                  <button className="btn btn-primary">View Details</button>
                  <button onClick={()=>Approve(vendor)} className="btn btn-success text-white mx-10">Approve</button>
                </div>
              </div>
            )
          })}
        </div>
      }

    </div>
  )
}

export default PendingVen