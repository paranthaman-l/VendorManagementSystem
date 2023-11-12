/* eslint-disable react-hooks/exhaustive-deps */
import Sidebar from './Sidebar'
import service from '../../assets/imgs/service.png'
import search from '../../assets/imgs/search.svg'
import filter from '../../assets/imgs/filter.svg'
import plus from '../../assets/imgs/plus.svg'
import deleteIcon from '../../assets/imgs/delete.svg'
import { Card, Typography } from '@material-tailwind/react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import AddService from './AddService'
import ServiceService from '../../services/ServiceService'
import { getVendor } from '../../slices/vendorSlice'
import UpdateService from './UpdateService'
const Services = () => {
    // const TABLE_HEAD = ["Service Name", "Service Type", "Service Owner", "Service Status", "Service Price", "Service Duration", "Service Contacts"];
    // const vendor = useSelector(getVendor)
    // const dispatch = useDispatch()
    const [showAddService, setShowAddService] = useState(false);
    const [updateService, setUpdateService] = useState({});
    const [showUpdateService, setShowUpdateService] = useState(false);
    const [services, setServices] = useState([]);
    const addRef = useRef();
    const handleClickOutside = () => {
        if (addRef.current && !addRef.current.contains(event.target)) {
            setShowAddService(false);
            setShowUpdateService(false)
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
    }, [])
    const getService = async () => {
        await ServiceService.getAllVendorServices().then((response) => {
            console.log(response);
            setServices(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        getService();
    }, [])
    const handleDelete = async (sid) => {
        console.log(sid);
        await ServiceService.deleteService(sid).then((response) => {
            getService();
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className='mt-20 flex flex-col min-h-screen bg-lightGray2'>
            {showAddService && <AddService addRef={addRef} setShowAddService={setShowAddService}  getService={getService}/>}
            {showUpdateService && <UpdateService addRef={addRef} setShowUpdateService={setShowUpdateService} updateService={updateService} getService={getService}/>}
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
                            <button onClick={() => setShowAddService(true)} className='flex max-w-fit justify-center items-center bg-blue hover:bg-hoverBlue py-[9px] px-3  text-white font-openSans hover:border-blue mx-auto rounded-2xl'><img src={plus} className='mx-2' alt="" />Add Service</button>
                        </div>
                    </div>
                    {/* <Card className="h-full w-full overflow-scroll mt-10">
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
                    </Card> */}
                    <div className="overflow-x-auto mt-10">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>
                                        <label htmlFor='allCheckBox'>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>Service</th>
                                    <th>Service Owner</th>
                                    <th>Contact</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {services?.map((service, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>
                                                <label >
                                                    <input id='allCheckBox' type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center space-x-3">

                                                    <div>
                                                        <div className="font-bold">{service?.serviceName}</div>
                                                        <div className="text-sm opacity-50">{service.length <= 10 ? service?.serviceDescription : service?.serviceDescription?.slice(0, 10) + "..."}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{service?.serviceOwner || "Service Owner"}</td>
                                            <td>
                                                {service?.email}
                                                <br />
                                                <span className="badge badge-ghost badge-sm">{service?.contact || "+91 9626474259"}</span>
                                            </td>
                                            <td>{service?.serviceStatus || "Normal"}</td>
                                            <th>
                                                <button onClick={() => { setUpdateService(service); setShowUpdateService(true) }} className="btn btn-ghost btn-xs">Edit</button>
                                                <button onClick={() => handleDelete(service?.sid)} className="btn btn-ghost btn-xs">Delete</button>
                                            </th>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th>Service</th>
                                    <th>Service Owner</th>
                                    <th>Contact</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services