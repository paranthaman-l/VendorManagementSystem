/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react'
import AuthService from '../../services/AuthService'

const Vendor = ({ oid }) => {
    const [vendor, setVendor] = useState({})
    useEffect(() => {
        const getData = async () => {
            await AuthService.getVendor(oid).then((res) => { 
                setVendor(res.data);
                console.log(res);
            }).catch(() => { })
        }
        getData();
    }, [oid])

    return (
        <div className='flex items-center'>
            <img className='h-10 w-10 rounded-full mx-3' src={vendor?.profile} alt="" />
            <p className='font-montserrat+'>{vendor?.user?.name}</p>
        </div>
    )
}

export default Vendor