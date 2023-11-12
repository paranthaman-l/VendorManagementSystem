import { useEffect, useState } from 'react';
import AdminService from '../../services/AdminService';
import paranthaman from '../../assets/imgs/paranthaman.jpg'
const ApprovedOrg = () => {
  const [approvedOrganizations, setApprovedOrganizations] = useState([])
  const getApprovedOrganization = async () => {
    await AdminService.getOrganization(true).then((response) => {
      setApprovedOrganizations(response.data);
    }).catch((err) => { 
      // console.log(err)
     })
  }
  useEffect(() => {
    getApprovedOrganization();
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {approvedOrganizations?.map((organization, index) => {
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
                        <img src={organization?.profile || paranthaman} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{organization?.user?.name}</div>
                      <div className="text-sm opacity-50">{organization?.organizationName || "Organization Name"}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {organization?.user?.email}
                  <br />
                  <span className="badge badge-ghost badge-sm">{organization?.contact || "+91 9626474259"}</span>
                </td>
                <td>{organization?.address || "Location"}</td>
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
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default ApprovedOrg;