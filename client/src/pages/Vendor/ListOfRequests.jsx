import { useEffect, useRef, useState } from 'react'
import VendorService from '../../services/VendorService'
import { Toaster } from 'react-hot-toast';
import SideBar from './Sidebar';
import deleteIcon from '../../assets/imgs/delete.svg';
import Organization from './Organization';
import { Button } from '@material-tailwind/react';
import ApplyContract from './ApplyContract';
import { useNavigate } from 'react-router-dom';
const ListOfRequests = () => {
    const navigate = useNavigate();
    const [requested, setRequested] = useState([]);
    const [data, setData] = useState({});
    const getAllRequested = async () => {
        await VendorService.getAllRequested().then((response) => {
            setRequested(response.data)
        }).catch((error) => {
            // console.log(error);
        })
    }
    useEffect(() => {
        getAllRequested()
    }, [])
   
    // const handleDelete = async (sid) => {
    //     await VendorService.deleteRequest(sid).then((response) => {
    //         if (response.status === 200)
    //             getAllRequested();
    //     }).catch((error) => {
    //         // console.log(error);
    //     })
    // }
    const [showApplyContract, setShowApplyContract] = useState(false);
    const applyRef = useRef();
    const handleApplyContract =async (e) => {
        e.preventDefault();
        await VendorService.applyContract(data?.sid,data).then((res)=>{
            if(res.status==200)
                navigate("/vendor/home")
        }).catch((e)=>{
            console.log(e);
        })
    }
    const handleClickOutside = (event) => {
        if (applyRef.current && !applyRef.current.contains(event.target)) {
            setShowApplyContract(false);
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
    }, [])
    return (
        <div className='mt-20 flex flex-col min-h-screen bg-lightGray2'>
            {showApplyContract && <ApplyContract data={data} setData={setData} applyRef={applyRef} setShowApplyContract={setShowApplyContract} handleApplyContract={handleApplyContract} />}
            <Toaster position='top-right' />
            <SideBar />
            <div className="ml-60 mr-10 mt-20 flex flex-col ">
                {requested?.map((request, i) => {
                    return (
                        <div key={i} className="flex bg-white p-5 rounded-xl justify-between">
                            <div className="flex flex-col p-3 w-full">
                                <Organization vid={request?.vid} />
                                <div className="mx-10 my-4 flex justify-between items-center w-full">
                                    <div className="">
                                        <p className='text-xl font-poppins'>{request?.serviceName}</p>
                                        <p className=' text-darkGray mt-2'>{request?.description}</p>
                                    </div>
                                    <div className="pr-10">
                                        <Button onClick={() => {setShowApplyContract(true);setData({...data,sid:request?.sid})}} className='bg-green-500'>Apply</Button>
                                    </div>
                                </div>
                            </div>
                            {/* <button onClick={() => handleDelete(request?.sid)} className='btn btn-ghost btn-xs  bottom-0 right-0 hover:bg-white'><img src={deleteIcon} alt="" /></button> */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListOfRequests