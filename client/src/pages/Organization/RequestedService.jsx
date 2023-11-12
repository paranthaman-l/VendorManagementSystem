import React, { useEffect, useState } from 'react'
import OrganizationService from '../../services/OrganizationService'
import { Toaster } from 'react-hot-toast';
import SideBar from './SideBar';
import deleteIcon from '../../assets/imgs/delete.svg';
const RequestedService = () => {
    const [requested, setRequested] = useState([]);
    const getAllRequested = async () => {
        await OrganizationService.getAllRequested().then((response) => {
            setRequested(response.data)
            console.log(response.data);
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

    return (
        <div className='mt-20 flex flex-col min-h-screen bg-lightGray2'>
            <Toaster position='top-right' />
            <SideBar />
            <div className="mx-80 mt-20 grid grid-cols-3 gap-5">
                {requested?.map((request, i) => {
                    return (
                        <div key={i} className="flex bg-white p-5 rounded-xl justify-between">
                            <div className="flex flex-col">
                                <p className='text-xl font-poppins'>{request?.serviceName}</p>
                                <p className=' text-darkGray '>{request?.description}</p>
                            </div>
                            <button onClick={() => handleDelete(request?.sid)} className='btn btn-ghost btn-xs  bottom-0 right-0 hover:bg-white'><img src={deleteIcon} alt="" /></button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RequestedService