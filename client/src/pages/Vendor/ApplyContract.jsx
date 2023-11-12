/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const ApplyContract = ({ applyRef, setShowApplyContract,handleApplyContract ,data,setData}) => {
    const [error, setError] = useState({});
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <form onSubmit={handleApplyContract} className="w-full z-30 bg-black bg-opacity-20 flex justify-center items-center fixed h-screen">
            <div ref={applyRef} className="bg-white rounded-xl min-h-[400px] w-1/2 items-center flex justify-center">
                <div className="flex items-center justify-center w-full flx flex-col mt-5">
                    <input
                        type="text"
                        className={`border-gray focus:border-blue focus:placeholder:text-[#9ca3af]  ${error.contractValue && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[200px] rounded-lg outline-none border-[2.0px] `}
                        placeholder="Contract Value"
                        name="contractValue"
                        id="contractValue"
                        onChange={handleChange}
                        value={data.contractValue}
                    />
                    <textarea
                        type="text"
                        className={`border-gray focus:border-blue focus:placeholder:text-[#9ca3af]  ${error.Description && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 px-[20px] py-[10px] text-lg min-w-[200px] rounded-lg outline-none border-[2.0px] `}
                        placeholder="Description"
                        name="description"
                        id="description"
                        onChange={handleChange}
                        value={data.Description}
                    />
                    <button type="submit" onClick={handleApplyContract} className="btn mt-4 rounded-md bg-indigo px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo2  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo min-w-[100px]">Apply Contract</button>
                </div>
            </div>
        </form>
    )
}

export default ApplyContract