import React, { useEffect, useRef, useState } from 'react'
import OrganizationService from '../../services/OrganizationService'
import { Toaster } from 'react-hot-toast';
import SideBar from './SideBar';
import deleteIcon from '../../assets/imgs/delete.svg';
import { Button } from '@material-tailwind/react';
import Vendor from './Vendor';
import MakeContract from './MakeContract';

const RequestedService = () => {
    const [requested, setRequested] = useState([]);
    const [applied, setApplied] = useState([]);
    const [sid, setSid] = useState();
    const getAllRequested = async () => {
        await OrganizationService.getAllRequested().then((response) => {
            setRequested(response.data)
        }).catch((error) => {
            // console.log(error);
        })
    }
    useEffect(() => {
        getAllRequested()
    }, [])
    const handleDelete = async (sid) => {
        await OrganizationService.deleteRequest(sid).then((response) => {
            if (response.status === 200)
                getAllRequested();
        }).catch((error) => {
            // console.log(error);
        })
    }
    useEffect(() => {
        const getApplyRequest = async () => {

            await OrganizationService.getApplyRequest(sid).then((response) => {
                setApplied(response.data);
            }).catch((error) => { })
        }
        getApplyRequest();
    }, [sid])
    const [data, setData] = useState({})
    const [showContract, setShowContract] = useState(false)
    const ref= useRef();
    const handleClickOutside = () => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShowContract(false);
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
    }, [])
    const handleMakeContract=e=>{
        e.preventDefault();
        console.log("clicked");
    }
    return (
        <div className='mt-20 flex flex-col min-h-screen bg-lightGray2'>
            {showContract && <MakeContract ref={ref} data={data} setData={setData} handleMakeContract={handleMakeContract}/>}
            <Toaster position='top-right' />
            <SideBar />
            <div className="flex items-start mt-20">
                <div className="ml-80 w-1/2  grid grid-cols-2 gap-5">
                    {requested?.map((request, i) => {
                        return (
                            <div key={i} className="flex bg-white p-5 rounded-xl justify-between">
                                <div onClick={() => (setSid(request?.sid))} className="flex flex-col">
                                    <p className='text-xl font-poppins'>{request?.serviceName}</p>
                                    <p className=' text-darkGray '>{request?.description}</p>
                                </div>
                                <button onClick={() => handleDelete(request?.sid)} className='btn btn-ghost btn-xs  bottom-0 right-0 hover:bg-white'><img src={deleteIcon} alt="" /></button>
                            </div>
                        )
                    })}
                </div>
                {applied.length!==0 &&
                    <div className="w-1/2 bg-white h-full min-h-[600px] mx-10 p-3 rounded-lg">
                        {applied?.map((request, i) => {
                            const formatNumber = (number) => {
                                const parts = number.toString().split('.');
                                parts[0] = parts[0].split('').reverse().join('').replace(/(\d{3})/g, '$1,').split('').reverse().join('').replace(/^,/, '');
                                return parts.join('.');
                            };
                            return (
                                <div key={i} className="flex bg-white p-5 rounded-xl justify-between">
                                    <div className="flex flex-col p-3 w-full">
                                        <Vendor oid={request?.oid} />
                                        <div className="mx-10 my-4 flex justify-between items-center w-full">
                                            <div className="">
                                                <p className='text-xl font-poppins'>{formatNumber(request?.contractValue)}</p>
                                                <p className=' text-darkGray mt-2'>{request?.description}</p>
                                            </div>
                                            <div className="pr-10">
                                                <Button onClick={()=>{setShowContract(true)}} className='bg-green-500'>Make Contract</Button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <button onClick={() => handleDelete(request?.sid)} className='btn btn-ghost btn-xs  bottom-0 right-0 hover:bg-white'><img src={deleteIcon} alt="" /></button> */}
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </div>
    )
}

export default RequestedService