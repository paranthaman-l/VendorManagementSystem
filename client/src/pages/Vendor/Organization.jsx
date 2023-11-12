/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react'
import AuthService from '../../services/AuthService'

const Organization = ({ vid }) => {
    const [org, setOrg] = useState({})
    useEffect(() => {
        const getData = async () => {
            await AuthService.getOrganization(vid).then((res) => { 
                setOrg(res.data);
            }).catch(() => { })
        }
        getData();
    }, [vid])

    return (
        <div className='flex items-center'>
            <img className='h-10 w-10 rounded-full mx-3' src={org?.profile} alt="" />
            <p className='font-montserrat+'>{org?.user?.name}</p>
        </div>
    )
}

export default Organization