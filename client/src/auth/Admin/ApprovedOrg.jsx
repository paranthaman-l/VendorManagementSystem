import { useDispatch, useSelector } from 'react-redux';
import { getOrganizations, removeOrganization } from '../../slices/adminSlice'
import { Card, Typography } from '@material-tailwind/react';
import deleteIcon from '../../assets/imgs/delete.svg'
const ApprovedOrg = () => {
  const orgs = useSelector(getOrganizations);
  const dispatch = useDispatch();

  const TABLE_HEAD = ["Organization Name", "Founder Name", "email", "Organization", ""];
  const TABLE_ROWS = [
    {
      organizationName: "Delta",
      founderName: "PARANTHAMAN L",
      email: "paranthamanl2004@gmail.com",
      organization: "VMS",
    },
  ];
  return (
    // <div className='flex flex-col justify-center items-center mt-10'>
    //   {orgs?.map((org, i) => {
    //     return (
    //       <div key={i} className=" group w-[95%] min-h-[150px] my-5 rounded-2xl  bg-white mr-10">
    //         <p className='px-5 py-3 text-3xl font-poppins font-semibold'>{org.companyName}</p>
    //         <div className="flex justify-between items-center">
    //           <p className='ml-6 w-[35%]'>Organization Name :<span className='text-xl font-alata'> {org.firstName + " " + org.lastName}</span> </p>
    //           <div className="flex w-[40%] flex-col">
    //             <p className='ml-6'>email :<span className='font-alata text-lg'> {org.email}</span> </p>
    //             <p className='ml-6'>Contact :<span className='font-alata text-lg'> {org.contact}</span> </p>
    //           </div>
    //           <div className="flex group-hover:opacity-100 opacity-0 w-[25%] flex-col justify-center items-center">
    //             <button className='bg-blue text-white px-4 py-2 min-w-[100px] mb-1 rounded-2xl'>View</button>
    //             <button onClick={() => dispatch(removeOrganization(i))} className='bg-[#ff5e5b] text-white px-4 py-2 min-w-[100px] mt-1 rounded-2xl'>Delete</button>
    //           </div>
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
        {orgs.map(({ organizationName, founderName, email, organization }, index) => {
          const isLast = index === TABLE_ROWS.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
          return (
            <tr key={index}>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {organizationName}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {founderName}
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
                  {organization}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-medium"
                >
                  <p className='flex justify-center'>Edit <span className='mx-3'><img className='cursor-pointer' src={deleteIcon} alt='' /></span></p>
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

export default ApprovedOrg