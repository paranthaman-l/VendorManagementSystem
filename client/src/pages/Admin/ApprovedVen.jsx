import { useDispatch, useSelector } from 'react-redux';
import { getVendors, removeVendor } from '../../slices/adminSlice'
import { Card, Typography } from '@material-tailwind/react';
import deleteIcon from '../../assets/imgs/delete.svg'
const ApprovedVen = () => {
  const vendors = useSelector(getVendors);
  const dispatch = useDispatch();

  const TABLE_HEAD = ["Company Name", "Vendor Name", "Email", "Service", ""];
  const TABLE_ROWS = [
    {
      companyName: "Delta",
      vendorName: "PARANTHAMAN L",
      email: "paranthamanl2004@gmail.com",
      service: "VMS",
    },
  ];

  return (
    // <div className='flex flex-col justify-center items-center mt-10'>
    //   {vendors?.map((vendor, i) => {
    //     return (
    //       <div key={i} className=" group w-[95%] min-h-[150px] my-5 rounded-2xl  bg-white mr-10">
    //         <p className='px-5 py-3 text-3xl font-poppins font-semibold'>{vendor.companyName}</p>
    //         <div className="flex justify-between items-center">
    //           <p className='ml-6 w-[35%]'>Vendor Name :<span className='text-xl font-alata'> {vendor.firstName + " " + vendor.lastName}</span> </p>
    //           <div className="flex w-[40%] flex-col">
    //             <p className='ml-6'>email :<span className='font-alata text-lg'> {vendor.email}</span> </p>
    //             <p className='ml-6'>Contact :<span className='font-alata text-lg'> {vendor.contact}</span> </p>
    //           </div>
    //           <div className="flex group-hover:opacity-100 opacity-0 w-[25%] flex-col justify-center items-center">
    //             <button className='bg-blue text-white px-4 py-2 min-w-[100px] mb-1 rounded-2xl'>View</button>
    //             <button onClick={() => dispatch(removeVendor(i))} className='bg-[#ff5e5b] text-white px-4 py-2 min-w-[100px] mt-1 rounded-2xl'>Delete</button>
    //           </div>
    //         </div>
    //         <div className="my-3 mx-6">
    //           <p>Service Category : <span className='text-xl'> {vendor.category}</span></p>
    //         </div>
    //         <div className="my-3 mx-6">
    //           <p>Service : <span className='text-xl'> {vendor.service}</span></p>
    //         </div>
    //       </div>
    //     )
    //   })}
    // </div>

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
          {vendors?.map((vendor, index) => {
            const isLast = index === vendors?.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {vendor?.companyName}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {vendor?.vendorName || vendor.firstName}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {vendor?.email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {vendor?.service}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    <p className='flex justify-center'>Edit <span onClick={()=>dispatch(removeVendor(index))} className='mx-3'><img className='cursor-pointer' src={deleteIcon} alt='' /></span></p>
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

export default ApprovedVen