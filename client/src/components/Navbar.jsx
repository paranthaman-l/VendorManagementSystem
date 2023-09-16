import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
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
        <button onClick={() => navigate("/login")} className='bg-blue uppercase min-w-[100px] mx-4 hover:bg-hoverBlue px-4 py-2 rounded-md text-white '>Login</button>
        <button onClick={() => navigate("/signup")} className='bg-blue uppercase min-w-[100px] hover:bg-hoverBlue px-4 py-2 rounded-md text-white '>SignUp</button>
      </div>
    </div>
  )
}

export default Navbar