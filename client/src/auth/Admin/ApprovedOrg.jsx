import { useDispatch, useSelector } from 'react-redux';
import { getOrganizations, removeOrganization } from '../../slices/adminSlice'
const ApprovedOrg = () => {
  const orgs = useSelector(getOrganizations);
  const dispatch = useDispatch();
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      {orgs?.map((org, i) => {
        return (
          <div key={i} className=" group w-[95%] min-h-[150px] my-5 rounded-2xl  bg-white mr-10">
            <p className='px-5 py-3 text-3xl font-poppins font-semibold'>{org.companyName}</p>
            <div className="flex justify-between items-center">
              <p className='ml-6 w-[35%]'>Organization Name :<span className='text-xl font-alata'> {org.firstName + " " + org.lastName}</span> </p>
              <div className="flex w-[40%] flex-col">
                <p className='ml-6'>email :<span className='font-alata text-lg'> {org.email}</span> </p>
                <p className='ml-6'>Contact :<span className='font-alata text-lg'> {org.contact}</span> </p>
              </div>
              <div className="flex group-hover:opacity-100 opacity-0 w-[25%] flex-col justify-center items-center">
                <button className='bg-blue text-white px-4 py-2 min-w-[100px] mb-1 rounded-2xl'>View</button>
                <button onClick={() => dispatch(removeOrganization(i))} className='bg-[#ff5e5b] text-white px-4 py-2 min-w-[100px] mt-1 rounded-2xl'>Delete</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ApprovedOrg