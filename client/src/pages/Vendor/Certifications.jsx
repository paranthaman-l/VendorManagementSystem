import Sidebar from "./Sidebar"
import certifications from '../../assets/imgs/certification.png'
import search from '../../assets/imgs/search.svg'
import { useEffect, useRef, useState } from "react"
import VendorService from '../../services/VendorService'
import FileUploader from './FileUploader'
import deleteIcon from '../../assets/imgs/delete.svg'
import AddCertificate from "./AddCertificate"
import {BsPlusLg} from 'react-icons/bs'
const Certifications = () => {
    const [certificates, setCertificates] = useState([]);
    const [showAddCertificate, setShowAddCertificate] = useState(false);
    const getCertificates = async () => {
        await VendorService.getAllCertificates().then((response) => {
            console.log(response.data);
            setCertificates(response.data);
        }).catch((error) => {
            // console.log(error);
        })
    }
    const  handleDelete =async(certificateId)=>{
        await VendorService.deleteCertificate(certificateId).then((response) => {
            getCertificates();
        }).catch((error) => {
            // console.log(error);
        })
    }
    useEffect(() => {
        getCertificates();
    }, [])
    const addRef = useRef();
    const handleClickOutside = () => {
        if (addRef.current && !addRef.current.contains(event.target)) {
            setShowAddCertificate(false);
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
    }, [])
    return (
        <div className='mt-20 flex flex-col min-h-screen bg-lightGray2'>
            {showAddCertificate && <AddCertificate addRef={addRef} setShowAddCertificate={setShowAddCertificate} />}
            <Sidebar />
            <div className="ml-60 mt-5 flex flex-col">
                <div className="flex justify-between px-10 mr-5 py-3 rounded-xl bg-white shadow-xl">
                    <div className="flex justify-center items-center">
                        <img className='h-16 w-16 mr-5' src={certifications} alt="" />
                        <p className='font-openSans text-2xl my-1 '>Certifications</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex mx-5 justify-between min-w-[300px] border-[2px] rounded-3xl border-darkGray border-opacity-20 ">
                            <input className="px-2 w-full ml-3 py-2 outline-none bg-transparent" type="text" placeholder="Search" />
                            <img className="mr-2" src={search} alt="" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4  gap-4  py-3 rounded-xl bg-white shadow-xl my-7 px10 mr-5">
                    {certificates.map((certificate, i) => {
                        return (
                            <div key={i} className="min-h-[250px] flex justify-center items-center flex-col">
                                <div className="relative">
                                    <img className="h-[250px] w-52 rounded-md object-cover relative" src={certificate?.certificate} alt="" />
                                    <button onClick={()=>handleDelete(certificate?.certificateId)} className='btn btn-ghost btn-xs absolute bg-white bottom-0 right-0 hover:bg-white'><img src={deleteIcon} alt="" /></button>
                                </div>
                                <p>{certificate?.title}</p>
                                <p>{certificate?.description}</p>
                            </div>
                        )
                    })}
                    <div onClick={() => setShowAddCertificate(true)} className="min-h-[250px] m-9 border-[2px] border-dotted border-blue  flex justify-center items-center">
                        <span className="text-9xl cursor-pointer" title="Add Certificate">
                            <BsPlusLg className="font-light"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certifications