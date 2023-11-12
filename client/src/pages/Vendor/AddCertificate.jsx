/* eslint-disable react/prop-types */
import { useState } from 'react'
import CertificateUploader from './CertificateUploader'
import VendorService from '../../services/VendorService';
const AddCertificate = ({ addRef,setShowAddCertificate }) => {
    const [certificate, setCertificate] = useState();
    const handleAddCertificate = async (e) => {
        e.preventDefault();
        await VendorService.addCertificate(certificate).then((response)=>{
            console.log(response);
            setShowAddCertificate(false);
        }).catch((error)=>{
            console.log(error);
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCertificate({ ...certificate, [name]: value });
    }
    return (
        <form onSubmit={handleAddCertificate} className="w-full  z-30 bg-black bg-opacity-20 flex justify-center items-center fixed h-screen">
            <div ref={addRef} className="bg-white rounded-xl min-h-[550px] w-1/2">
                <div className="flex items-center justify-center w-full flx flex-col mt-5">
                    <div className="w-1/2">
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-darkGray">Certificate Title</label>
                        <input value={certificate?.title} onChange={handleChange} type="text" name="title" id="title" autoComplete="given-name" className="block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                    <div className="w-1/2 mt-3">
                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-darkGray">Certificate Description</label>
                        <textarea value={certificate?.description} onChange={handleChange} type="text" name="description" id="description" autoComplete="given-name" className="block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                    <div className="flex ">
                        {!(certificate?.certificate) ?
                            <CertificateUploader setCertificate={setCertificate} certificate={certificate} />
                            :
                            <img className='h-[250px] w-48 mt-3 object-cover' src={certificate?.certificate} alt="" />
                        }
                    </div>
                    <button type="submit" className="btn mt-4 rounded-md bg-indigo px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo2  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo min-w-[100px]">Add Certificate</button>
                </div>
            </div>
        </form>
    )
}

export default AddCertificate