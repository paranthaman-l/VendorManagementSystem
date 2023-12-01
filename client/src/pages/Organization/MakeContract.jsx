/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const MakeContract = ({ viewRef, handleMakeContract, data, setData }) => {
    const [error, setError] = useState({});
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    return (
        // contractTitle
        // contractDescription
        // startDate
        // endDate
        // contractValue
        // paymentTerms
        // contractStatus
        // createdBy
        <form onSubmit={handleMakeContract} className="w-full z-30 top-0 bg-black bg-opacity-20 flex justify-center items-center fixed h-screen">
            <div ref={viewRef} className="bg-white p-10 rounded-xl min-h-[400px] w-1/2 items-center flex justify-center">
                <div className="flex items-center justify-center w-full flx flex-col mt-5">
                    <input
                        type="text"
                        className={`border-gray focus:border-blue focus:placeholder:text-[#9ca3af]  ${error.contractTitle && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[200px] rounded-lg outline-none border-[2.0px] `}
                        placeholder="Contract Title"
                        name="contractTitle"
                        id="contractTitle"
                        onChange={handleChange}
                        value={data.contractTitle}
                    />
                    <textarea
                        type="text"
                        className={`border-gray focus:border-blue focus:placeholder:text-[#9ca3af]  ${error.contractValue && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 px-[20px] py-[10px] text-lg min-w-[200px] rounded-lg outline-none border-[2.0px] `}
                        placeholder="Contract Description"
                        name="contractDescription"
                        id="contractDescription"
                        onChange={handleChange}
                        value={data.contractDescription}
                    />
                    <div className="flex justify-between items-center">
                        <label className='flex flex-col' htmlFor="">
                            Start Date
                            <input
                                type="date"
                                aria-label='Start Date'
                                className={`border-gray focus:border-blue focus:placeholder:text-[#9ca3af]  ${error.contractTitle && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray ml-0 m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[200px] rounded-lg outline-none border-[2.0px] `}
                                placeholder="Contract Start Date"
                                name="startDate"
                                id="startDate"
                                onChange={handleChange}
                                value={data.startDate}
                            />
                        </label>
                        <label htmlFor="" className='flex flex-col'>
                            End Date
                            <input
                                type="date"
                                aria-label='End Date'
                                className={`border-gray focus:border-blue focus:placeholder:text-[#9ca3af]  ${error.contractTitle && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray  ml-0 m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[200px] rounded-lg outline-none border-[2.0px] `}
                                placeholder="Contract End Date"
                                name="endDate"
                                id="endDate"
                                onChange={handleChange}
                                value={data.endDate}
                            />
                        </label>
                    </div>
                    <input
                        type="text"
                        className={`border-gray focus:border-blue focus:placeholder:text-[#9ca3af]  ${error.contractTitle && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[200px] rounded-lg outline-none border-[2.0px] `}
                        placeholder="Contract Value"
                        name="contractValue"
                        id="contractValue"
                        // onChange={handleChange}
                        disabled={true}
                        value={data.contractValue}
                    />
                    <button type="submit" onClick={handleMakeContract} className="btn mt-4 rounded-md bg-indigo px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo2  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo min-w-[100px]">Apply Contract</button>
                </div>
            </div>
        </form>
    )
}

export default MakeContract