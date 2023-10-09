/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addVendor } from '../../slices/adminSlice';

const AddVendor = ({ addRef, showAddVendor, setShowAddVendor }) => {
    const [vendor, setVendor] = useState({})
    const [vendorError, setVendorError] = useState({});
    const dispatch = useDispatch();
    const services = [
        "Information Technology (IT) Services",
        "Marketing and Advertising Services",
        "Financial and Accounting Services",
        "Human Resources (HR) Services",
        "Legal Services",
        "Logistics and Supply Chain Services",
        "Real Estate and Property Services",
        "Healthcare Services",
        "Event Planning and Hospitality Services",
        "Maintenance and Repair Services",
        "Consulting Services",
        "Environmental and Sustainability Services",
        "Graphic Design and Creative Services",
        "Security Services",
        "Education and Training Services",
        "Telecommunications Services",
        "Manufacturing and Production Services",
        "Research and Development Services",
        "Transportation and Travel Services",
        "Agricultural and Farming Services"
    ]

    useEffect(() => {
        // document.body.style.overflow = showAddVendor ? "hidden" : "auto";
    }, [showAddVendor]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setVendor({ ...vendor, [name]: value });
    }

    const AddVendor = (e) => {
        e.preventDefault();
        dispatch(addVendor(vendor));
        setShowAddVendor(false);
    }
    return (
        <div className='fixed flex justify-center items-center w-screen h-screen z-50 bg-black bg-opacity-50'>
            <div ref={addRef} className="bg-white rounded-lg">
                <p className="text-xl flex m-4 my-4 font-bold text-blue hover:text-hoverBlue">
                    Add Vendor
                </p>
                <form className='flex flex-col' onSubmit={AddVendor} action="">
                    <div className="flex justify-center m-3">
                        <input
                            type="text"
                            className={` border-gray focus:border-blue focus:placeholder:text-[#9ca3af]  ${vendorError.firstName && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray h-[50px] px-[20px] py-[10px] text-lg max-w-[190px] rounded-l-lg outline-none border-l-[2.0px] border-t-[2.0px] border-b-[2.0px] border-r-[1.0px] `}
                            placeholder="First Name"
                            name="vendorName"
                            id="vendorName"
                            onChange={handleChange}
                            value={vendor.vendorName}
                        />
                        <input
                            type="text"
                            className={`border-gray focus:border-blue focus:placeholder:text-[#9ca3af]  ${vendorError.lastName && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray h-[50px] px-[20px] py-[10px] text-lg max-w-[190px] rounded-r-lg outline-none border-l-[1.0px] border-t-[2.0px] border-b-[2.0px] border-r-[2.0px] `}
                            placeholder="Last Name"
                            name="lastName"
                            id="lastName"
                            onChange={handleChange}
                            value={vendor.lastName}
                        />
                    </div>
                    <input
                        type="text"
                        className={`border-gray focus:border-blue focus:placeholder:text-[#9ca3af]  ${vendorError.companyName && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[380px] rounded-lg outline-none border-[2.0px] `}
                        placeholder="Company Name"
                        name="companyName"
                        id="companyName"
                        onChange={handleChange}
                        value={vendor.companyName}
                    />
                    <div className="relative">
                        <select name='category' onChange={handleChange} className={`appearance-none border-gray focus:border-blue focus:placeholder-text-[#9ca3af] ${vendorError.email && "border-inputErrorRed text-inputErrorRed placeholder-text-inputErrorRed"} text-darkGray m-3 h-12 px-4 py-2 text-lg min-w-[380px] rounded-lg outline-none border-2`}>
                            <option>select Service Category</option>
                            {services.map((service, i) => {
                                return (
                                    <option value={service} key={i}>{service}</option>
                                )
                            })}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M10 12L4 6h12z" />
                            </svg>
                        </div>
                    </div>
                    <input
                        type="email"
                        className={`border-gray focus:border-blue focus:placeholder:text-[#9ca3af]  ${vendorError.email && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[380px] rounded-lg outline-none border-[2.0px] `}
                        placeholder="Email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        value={vendor.email}
                    />
                    <input
                        type="text"
                        className={`border-gray focus:border-blue focus:placeholder:text-[#9ca3af]  ${vendorError.contact && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[380px] rounded-lg outline-none border-[2.0px] `}
                        placeholder="Contact"
                        name="contact"
                        id="contact"
                        onChange={handleChange}
                        value={vendor.contact}
                    />
                    <input
                        type="service"
                        className={`border-gray focus:border-blue focus:placeholder:text-[#9ca3af]  ${vendorError.service && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[380px] rounded-lg outline-none border-[2.0px] `}
                        placeholder="Service"
                        name="service"
                        id="service"
                        onChange={handleChange}
                        value={vendor.service}
                    />
                    <input
                        className="bg-blue m-4 text-white h-10 min-w-[100px]  px-5 py-2 cursor-pointer rounded-md hover:bg-hoverBlue"
                        type="submit"
                        value={"Add Vendor "}
                    />
                </form>
            </div>
        </div>
    )
}

export default AddVendor