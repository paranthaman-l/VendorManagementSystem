import { useEffect, useState } from 'react';
import AdminService from '../../services/AdminService';
import paranthaman from '../../assets/imgs/paranthaman.jpg'
const ApprovedVen = () => {
  const [approvedVendors, setApprovedVendors] = useState([])
  const getPendingVendors = async () => {
    await AdminService.getVendors(true).then((response) => {
      setApprovedVendors(response.data);
      console.log(response);
    }).catch((err) => { console.log(err); })
  }
  useEffect(() => {
    getPendingVendors();
  }, [])

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label htmlFor='allCheckBox'>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Contact</th>
            <th>Location</th>
            <th>Performance</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {approvedVendors?.map((vendor, index) => {
            return (
              <tr key={index}>
                <th>
                  <label >
                    <input id='allCheckBox' type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={vendor?.profile || paranthaman} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{vendor?.user?.name}</div>
                      <div className="text-sm opacity-50">{vendor?.companyName||"Company Name"}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {vendor?.user?.email}
                  <br />
                  <span className="badge badge-ghost badge-sm">{vendor?.contact || "+91 9626474259"}</span>
                </td>
                <td>{vendor?.location || "Location"}</td>
                <td>{vendor?.performance||"Normal"}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Details</button>
                </th>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Contact</th>
            <th>Location</th>
            <th>Performance</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default ApprovedVen;