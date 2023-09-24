/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import down from '../assets/imgs/down.svg'
import {
    Collapse,
} from "@material-tailwind/react";
const Faq = ({ faq }) => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen((cur) => !cur);
    return (
        <div onClick={toggleOpen} key={faq.id} className="w-[80%] duration-500 font-openSans text-start border-b-[2px] border-darkGray border-opacity-30 py-3">
            <p className="flex justify-between my-5 text-xl mx-5 text-indigo2 font-semibold cursor-pointer"><span>{faq.question}</span> <img className={`${open && "rotate-180"}`} src={down} alt="" /></p>
            <Collapse open={open}>
                <p className={` ml-10 leading-7 mb-7 text-indigo duration-500 `}>{faq.answer}</p>
            </Collapse>
        </div>
    )
}

export default Faq