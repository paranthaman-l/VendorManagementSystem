import Sidebar from './Sidebar'
import service from '../../assets/imgs/service.png'
import search from '../../assets/imgs/search.svg'
import filter from '../../assets/imgs/filter.svg'
import plus from '../../assets/imgs/plus.svg'
import deleteIcon from '../../assets/imgs/delete.svg'
import { Card, Typography } from '@material-tailwind/react'
import { useDispatch, useSelector } from 'react-redux'
import { getVendors, removeVendor } from '../../slices/adminSlice'
import { useEffect, useRef, useState } from 'react'
import AddService from './AddService'
const Services = () => {
    const TABLE_HEAD = ["Service Name", "Service Type", "Service Owner", "Service Status", "Service Price", "Service Duration", "Service Contacts"];
    const vendors = useSelector(getVendors)
    const dispatch = useDispatch()
    const [showAddService,setShowAddService] = useState(false);
    const addRef = useRef();
    const handleClickOutside = () => {
      if (addRef.current && !addRef.current.contains(event.target))
      setShowAddService(false);
    }
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, [])
    return (
        <div className='mt-20 flex flex-col min-h-screen bg-lightGray2'>
            {showAddService && <AddService addRef={addRef} setShowAddService={setShowAddService}/>}
            <Sidebar />
            <div className="ml-60 mt-5 flex flex-col">
                <div className="flex justify-between px-10 mr-5 py-3 rounded-xl bg-white shadow-xl">
                    <div className="flex justify-center items-center">
                        <img className='h-16 w-16 mr-5 rounded-full' src={service} alt="" />
                        <p className='font-openSans text-2xl my-1 '>Services</p>
                    </div>
                    <div className="flex justify-center items-center">
                        {/* <div className="flex mx-5 justify-between min-w-[300px] border-[2px] rounded-3xl border-darkGray border-opacity-20 ">
                            <input className="px-2 w-full ml-3 py-2 outline-none bg-transparent" type="text" placeholder="Search" />
                            <img className="mr-2" src={search} alt="" />
                        </div> */}
                    </div>
                </div>
                <div className="flex my-6 justify-between px-10 mr-5 py-3 rounded-xl bg-white shadow-xl flex-col">
                    <div className="flex justify-between items-center">
                        <button className='flex justify-center items-center bg-lightGray py-2 px-3 border-[1.5px] border-darkGray border-opacity-40 text-blue font-openSans hover:border-blue mx-2 rounded-2xl'><img src={filter} className='mx-2' alt="" />Filter</button>
                        <div className="flex justify-center items-center">
                            <div className="flex mx-5 justify-between min-w-[300px] border-[2px] rounded-3xl border-darkGray border-opacity-20 ">
                                <input className="px-2 w-full ml-3 py-2 outline-none bg-transparent" type="text" placeholder="Search" />
                                <img className="mr-2" src={search} alt="" />
                            </div>
                            <button  onClick={()=>setShowAddService(true)} className='flex max-w-fit justify-center items-center bg-blue hover:bg-hoverBlue py-[9px] px-3  text-white font-openSans hover:border-blue mx-auto rounded-2xl'><img src={plus} className='mx-2' alt="" />Add Service</button>
                        </div>
                    </div>
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
                                                    <p className='flex justify-center'>Edit <span onClick={() => dispatch(removeVendor(index))} className='mx-3'><img className='cursor-pointer' src={deleteIcon} alt='' /></span></p>
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
        </div>
    )
}

export default Services