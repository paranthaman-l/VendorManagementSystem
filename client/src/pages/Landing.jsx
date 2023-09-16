import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <p className='text-'>HOME</p>

            <button onClick={() => navigate('/login')}>
                Logout
            </button>
        </div>
    )
}

export default Landing