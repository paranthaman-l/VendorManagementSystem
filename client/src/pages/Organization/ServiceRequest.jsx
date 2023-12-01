import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import SideBar from './SideBar'
import OrganizationService from '../../services/OrganizationService'
import { useNavigate } from 'react-router-dom'
import ClientNavbar from './Navber'

const ServiceRequest = () => {
    const [request, setRequest] = useState({
        "vid":localStorage.getItem("id")
    })
    const navigate = useNavigate();
    const  handleSubmit =async(e)=>{
        e.preventDefault();
        await OrganizationService.CreateRequest(request).then((response)=>{
            console.log(response);
            if(response.status===200)
                navigate("/organization/requested")
        }).catch((error)=>{
            console.log(error);
        })
    }
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setRequest({...request,[name]:value});
    }
    
    return (
        <div className='mt-20 flex flex-col min-h-screen bg-lightGray2'>
             <ClientNavbar/>
            <Toaster position='top-right' />
            <SideBar />
            <div className="mx-80 mt-24 h-full flex justify-center items-center">
                <form onSubmit={handleSubmit} action="" className='min-h-[500px] min-w-[400px] bg-white p-10' >
                    <div className="flex flex-col my-3">
                        <label htmlFor="">
                            Service Name
                        </label>
                        <input onChange={handleChange} type="text" className='block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none' name="serviceName" id="serviceName" />
                    </div>
                    <div className="flex flex-col my-3">
                        <label htmlFor="">
                            Description
                        </label>
                        <textarea onChange={handleChange} type="text" className='block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none' name="description" id="description" />
                    </div>
                    <button type="submit" className="btn rounded-md bg-indigo px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo2  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo min-w-[100px] mx-auto flex mt-10">Create Service Request</button>
                </form>
            </div>
        </div>
    )
}

export default ServiceRequest