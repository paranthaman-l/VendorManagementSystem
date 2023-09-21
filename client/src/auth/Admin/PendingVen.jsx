/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
const PendingVen = () => {
  const [pendingVendors, setPendingVendors] = useState([]);

  const getPendingVendors =  () => {
    // await AdminService.GetPendingVendors().then((res) => {
    //   const response = res.data;
    //   setPendingVendors(response.data);
    //   console.log(response.data);
    // }).catch((err) => { console.log(err); })
  }
  useEffect(() => {
    getPendingVendors();
  })
  
  return (
    <div>
      {pendingVendors?.map((vendor) => {
        return (
          <div key={vendor.vid} className="">
            <p>{vendor.firstName}</p>
          </div>
        )
      })}
    </div>
  )
}

export default PendingVen