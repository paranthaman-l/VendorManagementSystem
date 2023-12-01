/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { Select, Option } from "@material-tailwind/react";
import FileUploader from "./FileUploader";
import ServiceService from "../../services/ServiceService";
import { useSelector } from 'react-redux'
import { getVendor } from "../../slices/vendorSlice";
import toast from "react-hot-toast";
import VendorService from '../../services/VendorService'
/* eslint-disable react/prop-types */
const AddEmployee = ({ addRef,
    setShowAddEmployee }) => {
    const [stage, setStage] = useState(1);
    const vendor = useSelector(getVendor)
    const [images, setImages] = useState([]);
    const [employee, setEmployee] = useState({
       "createdBy": vendor?.user?.name
    });
    const [services, setServices] = useState([]);
    const [sid,setSid]  = useState("");
    const [serviceName,setServiceName]  = useState("");
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    }
    const handleAddEmployee = async (e) => {
        e.preventDefault();
        await VendorService.addEmployee(employee,sid, vendor?.vid).then((response) => {
            if (response.status == 200) {
                toast.success(response.data)
                getEmployee();
                setShowAddEmployee(false)
            }
        }).catch((err) => {
            console.log(err);
        })
    }
    const getEmployee= async()=>{
        await VendorService.getAllEmployees().then((response)=>{
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })
    }
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
    return (
        <form onSubmit={handleAddEmployee} className="w-full  z-30 bg-black bg-opacity-20 flex justify-center items-center fixed h-screen">
            <div ref={addRef} className="lg:col-start-2  h-[75%]  absolute top-10 rounded max-w-4xl  bg-white col-span-12 lg:col-span-10 grid grid-cols-6 gap-x-8 gap-y-10 border-b border-darkGray/10 pb-12 mx-auto">
                <div className="p-4 col-span-6 md:col-span-2 ">
                    <div className="grid grid-cols-5">
                        <div onClick={() => setStage(1)} className={`${stage === 1 ? "bg-lightSkyBlue1" : ""} md:col-span-5 group relative flex items-left gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-indigo1 `}>
                            <div style={{ textAlign: 'center' }} className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray group-hover:bg-white mx-auto md:mx-0">
                                <svg className="mx-auto items-center justify-center h-6 w-6 text-darkGray group-hover:text-black" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                </svg>
                            </div>
                            <div className="flex-auto hidden md:block">
                                <p className="block font-semibold text-darkGray group-hover:text-white ">
                                    Personal Info
                                    <span className="absolute inset-0"></span>
                                </p>
                                <p className="mt-1 text-darkGray group-hover:text-lime-50 ">Access personalized service information easily</p>
                            </div>
                        </div>
                        <div onClick={() => setStage(2)} className={`${stage === 2 ? "bg-lightSkyBlue1" : ""} md:col-span-5 group relative flex items-left justify-left gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-indigo1`}>
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray group-hover:bg-white  mx-auto md:mx-0">
                                <svg className="h-6 w-6 text-darkGray group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                                </svg>
                            </div>
                            <div className="flex-auto  hidden md:block">
                                <p className="block font-semibold text-darkGray group-hover:text-white">
                                    Service Info
                                    <span className="absolute inset-0"></span>
                                </p>
                                <p className="mt-1 text-darkGray group-hover:text-lime-50">Availability of the service</p>
                            </div>
                        </div>
                        {/* <div onClick={() => setStage(3)} className={`${stage === 3 ? "bg-lightSkyBlue1" : ""} md:col-span-5 group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-indigo1`}>
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray group-hover:bg-white  mx-auto md:mx-0">
                                <svg className="h-6 w-6 text-darkGray group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                                </svg>
                            </div>
                            <div className="flex-auto  hidden md:block">
                                <p className="block font-semibold text-darkGray group-hover:text-white">
                                    Salary Details
                                    <span className="absolute inset-0"></span>
                                </p>
                                <p className="mt-1 text-darkGray group-hover:text-lime-50">About the Payment Poilcy</p>
                            </div>
                        </div> */}
                        <div onClick={() => setStage(4)} className={`${stage === 4 ? "bg-lightSkyBlue1" : ""} md:col-span-5 group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-indigo1`}>
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray group-hover:bg-white  mx-auto md:mx-0">
                                <svg className="h-6 w-6 text-darkGray group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                            </div>
                            <div className="flex-auto  hidden md:block">
                                <p className="block font-semibold text-darkGray group-hover:text-white">
                                    Profile
                                    <span className="absolute inset-0"></span>
                                </p>
                                <p className="mt-1 text-darkGray group-hover:text-lime-50">We are Achieved</p>
                            </div>
                        </div>
                        {/* <div onClick={() => setStage(5)} className={`${stage === 5 ? "bg-lightSkyBlue1" : ""} md:col-span-5 group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-indigo1`}>
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray group-hover:bg-white  mx-auto md:mx-0">
                                <svg className="h-6 w-6 text-darkGray group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                            </div>
                            <div className="flex-auto  hidden md:block">
                                <p className="block font-semibold text-darkGray group-hover:text-white">
                                    Service Contacts
                                    <span className="absolute inset-0"></span>
                                </p>
                                <p className="mt-1 text-darkGray group-hover:text-lime-50">Our Contact Info</p>
                            </div>
                        </div> */}
                        <button type="submit" className="btn mt-4 rounded-md bg-indigo px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo2  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo min-w-[100px]">Add</button>

                    </div>
                </div>
                {stage === 1 ?
                    <div className="p-4 col-span-6 md:col-span-4 overflow-y-scroll">
                        <div className="mx-auto grid grid-cols-2 gap-x-8 gap-y-10">
                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-darkGray">First Name</label>
                                <div className="mt-2">
                                    <input value={employee?.firstName} onChange={handleChange} type="text" name="firstName" id="firstName" autoComplete="given-name" className="block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-darkGray">Last Name</label>
                                <div className="mt-2">
                                    <input value={employee?.lastName} onChange={handleChange} type="text" name="lastName" id="lastName" autoComplete="given-name" className="block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            {/* <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="contact" className="block text-sm font-medium leading-6 text-darkGray">Service Status</label>
                                <div className="mt-2">
                                    <Select name="serviceStatus" label="Select Service Status">
                                        <Option onClick={() => setService({ ...service, "serviceStatus": "Active" })}>Active</Option>
                                        <Option onClick={() => setService({ ...service, "serviceStatus": "In Progress" })}>In Progress</Option>
                                        <Option onClick={() => setService({ ...service, "serviceStatus": "In Active" })}>In Active</Option>
                                    </Select>
                                    <input  onChange={handleChange} type="text" name="contact" id="contact" autoComplete="given-name" className="block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div> */}
                            <div className="col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-darkGray">email</label>
                                <div className="mt-2">
                                    <input value={employee?.email} onChange={handleChange} maxLength={200} type="email" name="email" id="email" autoComplete="given-name" className="block w-full  p-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="dateOfBirth" className="block text-sm font-medium leading-6 text-darkGray">Date of Birth</label>
                                <div className="mt-2">
                                    <input value={employee?.dateOfBirth} onChange={handleChange} type="date" name="dateOfBirth" id="dateOfBirth" autoComplete="given-name" className="block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-darkGray">About</label>
                                <div className="mt-2">
                                    <textarea value={employee?.about} onChange={handleChange} maxLength={200} type="text" name="about" id="about" autoComplete="given-name" className="block w-full  p-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            {/* <button  type="button" className="text-sm font-semibold leading-6 text-darkGray">Cancel</button> */}
                            {/* <button type="submit" className="btn rounded-md bg-indigo px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo2  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo min-w-[100px]">Add</button> */}
                        </div>
                    </div>
                    :
                    stage === 2 ?
                        <div className="p-4 col-span-6 md:col-span-4 overflow-y-scroll">
                            <div className="mx-auto grid grid-cols-2 gap-x-8 gap-y-10">
                                {/* <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="noOfEmployees" className="block text-sm font-medium leading-6 text-darkGray">No of Employees</label>
                                    <div className="mt-2">
                                        <input value={employee?.noOfEmployees} onChange={handleChange} type="text" name="noOfEmployees" id="noOfEmployees" autoComplete="given-name" className="block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div> */}
                                {/* <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-darkGray">Last name</label>
                                    <div className="mt-2">
                                        <input  onChange={handleChange} type="text" name="lastName" id="lastName" autoComplete="family-name" className="block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div> */}
                                {/* <div className="col-span-2">
                                    <label htmlFor="serviceCost" className="block text-sm font-medium leading-6 text-darkGray">Service Cost</label>
                                    <div className="mt-2">
                                        <input value={employee?.serviceCost} onChange={handleChange} id="serviceCost" name="serviceCost" type="text" autoComplete="Service" className="block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div> */}
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="contact" className="block text-sm font-medium leading-6 text-darkGray">Service Status</label>
                                    <div className="mt-2">
                                        <Select name="service" label="Select Service" value={serviceName}>
                                            {services?.map((service,i) => {
                                                return (
                                                    <Option key={i}  onClick={() => {setSid(service.sid);setServiceName(service?.serviceName);setEmployee({...employee,"serviceName":service?.serviceName})}}>{service.serviceName}</Option>
                                                )
                                            })}
                                        </Select>
                                    </div>
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="position" className="block text-sm font-medium leading-6 text-darkGray">Position</label>
                                    <div className="mt-2">
                                        <input value={employee?.position} onChange={handleChange} type="text" name="position" id="position" autoComplete="given-name" className="block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="salary" className="block text-sm font-medium leading-6 text-darkGray">Salary</label>
                                    <div className="mt-2">
                                        <input value={employee?.salary} onChange={handleChange} type="text" name="salary" id="salary" autoComplete="given-name" className="block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="performance" className="block text-sm font-medium leading-6 text-darkGray">Performance</label>
                                    <div className="mt-2">
                                        <input value={employee?.performance} onChange={handleChange} type="text" name="performance" id="performance" autoComplete="given-name" className="block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                {/* <div className="col-span-2">
                                    <label htmlFor="address" className="block text-sm font-medium leading-6 text-darkGray">Address</label>
                                    <div className="mt-2">
                                        <textarea type="text" name="address" id="address" autoComplete="given-name" className="block w-full  p-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div> */}
                            </div>
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                {/* <button  type="button" className="text-sm font-semibold leading-6 text-darkGray">Cancel</button> */}
                                {/* <button type="submit" className="btn rounded-md bg-indigo px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo2  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo min-w-[100px]">Add</button> */}
                            </div>
                        </div> :
                        // stage === 3 ?
                        //     <div className="col-span-3">
                        //         <div className=" mx-auto mt-8 p-4  rounded">
                        //             <h1 className="text-2xl font-bold mb-4">Payment Policy</h1>
                        //             <div className="flex space-x-2 w-[350px]">
                        //                 <div action="" className="flex">
                        //                     <input
                        //                         type="text"
                        //                         placeholder="Add a Payment Policy"
                        //                         value={input}
                        //                         onChange={(e) => setInput(e.target.value)}
                        //                         className="flex-grow p-2 border border-gray-300 rounded w-full"
                        //                     />
                        //                     <button onClick={addPaymentPolicy} type="submit" className="btn btn-square bg-blue min-w-[100px] p-2 hover:bg-hoverBlue text-white rounded">
                        //                         Add
                        //                     </button>
                        //                 </div>
                        //             </div>
                        //             <ul className="mt-4">
                        //                 {employee?.paymentPolicy?.map((policy, index) => (
                        //                     <li key={index} className="mb-3 mx-7 list-disc ">
                        //                         {policy}
                        //                     </li>
                        //                 ))}
                        //             </ul>
                        //         </div>
                        //     </div>
                        //     :
                        stage === 4 ?
                            <div className="w-full col-span-2 mt-10">
                                <div className="flex">
                                    {images?.map((image, index) => {
                                        return (
                                            <img key={index} className="w-40 h-40 rounded-full" src={image} alt="" />
                                        )
                                    })}
                                </div>
                                {images.length === 0 &&
                                    <FileUploader service={employee} setService={setEmployee} setImages={setImages} />
                                }
                            </div> : 
                            // <div className="p-4 col-span-6 md:col-span-4 overflow-y-scroll">
                            //     <div className="mx-auto grid grid-cols-2 gap-x-8 gap-y-10">
                            //         <div className="col-span-2 sm:col-span-1">
                            //             <label htmlFor="serviceOwner" className="block text-sm font-medium leading-6 text-darkGray">Service Owner</label>
                            //             <div className="mt-2">
                            //                 <input value={employee?.serviceOwner} onChange={handleChange} type="text" name="serviceOwner" id="serviceOwner" autoComplete="given-name" className="block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            //             </div>
                            //         </div>
                            //         {/* <div className="col-span-2 sm:col-span-1">
                            //               <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-darkGray">Last name</label>
                            //               <div className="mt-2">
                            //                   <input  onChange={handleChange} type="text" name="lastName" id="lastName" autoComplete="family-name" className="block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            //               </div>
                            //           </div> */}
                            //         <div className="col-span-2">
                            //             <label htmlFor="email" className="block text-sm font-medium leading-6 text-darkGray">Email address</label>
                            //             <div className="mt-2">
                            //                 <input value={employee?.email} onChange={handleChange} id="email" name="email" type="email" autoComplete="email" className="block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            //             </div>
                            //         </div>
                            //         <div className="col-span-2 sm:col-span-1">
                            //             <label htmlFor="contact" className="block text-sm font-medium leading-6 text-darkGray">Mobile No</label>
                            //             <div className="mt-2">
                            //                 <input value={employee?.contact} onChange={handleChange} type="text" name="contact" id="contact" autoComplete="given-name" className="block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            //             </div>
                            //         </div>
                            //         <div className="col-span-2 sm:col-span-1">
                            //             <label htmlFor="dateOfBirth" className="block text-sm font-medium leading-6 text-darkGray">DOB</label>
                            //             <div className="mt-2">
                            //                 <input value={employee?.dateOfBirth} onChange={handleChange} type="date" name="dateOfBirth" id="dateOfBirth" autoComplete="given-name" className="block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            //             </div>
                            //         </div>
                            //         <div className="col-span-2">
                            //             <label htmlFor="address" className="block text-sm font-medium leading-6 text-darkGray">Address</label>
                            //             <div className="mt-2">
                            //                 <textarea value={employee?.address} onChange={handleChange} type="text" name="address" id="address" autoComplete="given-name" className="block w-full  p-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            //             </div>
                            //         </div>
                            //     </div>
                            //     <div className="mt-6 flex items-center justify-end gap-x-6">
                            //         {/* <button  type="button" className="text-sm font-semibold leading-6 text-darkGray">Cancel</button> */}
                            //         {/* <button type="submit" className="btn rounded-md bg-indigo px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo2  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo min-w-[100px]">Add</button> */}
                            //     </div>
                            // </div>
                            ""
                }
            </div>
        </form>
    )
}

export default AddEmployee