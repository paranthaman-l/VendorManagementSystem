import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const HomeNavbar = () => {
  const navigate = useNavigate();
  const [isScroll, setIsScrolled] = useState(false);
  const onScroll = () => {
    if (window.scrollY > 2) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    return () => window.removeEventListener("scroll", onScroll);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className={`navbar bg-black flex justify-between items-center fixed w-full top-0 z-50 h-16 px-3 duration-500 border-b`}
    >
      <div className="">
        <span className='text-blue font-alata text-4xl mx-10 hover:bg-hoverBlue'>De<span className='text-white'>l</span>ta</span>
      </div>
      <div className="font-poppins flex justify-center font-semibold items-center ">
            <div className="h-10 w-10 rounded-full bg-blue">

            </div>
      </div>
    </div>
  )
}

export default HomeNavbar