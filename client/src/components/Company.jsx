/* eslint-disable react/no-unescaped-entities */
import helpImage from '../assets/imgs/helpImage.svg';
import aboutImage from '../assets/imgs/aboutImage.svg';
import atImage from '../assets/imgs/atImage.svg';
import eventImage from '../assets/imgs/eventImage.svg';
import ourCustomer from '../assets/imgs/ourCustomerImage.svg';
import ourCaseStudy from '../assets/imgs/caseStudyImage.svg';
import newsRoom from '../assets/imgs/newsRoomImage.svg';
import bookADemo from '../assets/imgs/bookADemoImage.svg';
import { useNavigate } from 'react-router-dom';

const Company = () => {
    const navigate = useNavigate();
    return (
        <div className='grid text-indigo1 font-inter font-bold grid-flow-row w-full gap-3 py-5 grid-cols-4 mr-16 ml-10'>
            <p onClick={()=>navigate('/about')} className='hover:bg-lightSkyBlue flex justify-start px-10 items-center max-w-[330px] min-h-[64px] group hover:text-blue duration-150 py-3 rounded-xl text-center relative'> <span className='absolute bg-gray bg-opacity-50 h-10 w-10 rounded-full left-12 group-hover:bg-[#e6f3ff]'></span><img src={aboutImage} className='mx-5 z-10 text-2xl group-hover:fill-blue' alt="" /><span className='Help Center'>About Delta's</span></p>
            <p  onClick={()=>navigate('/contact')} className='hover:bg-lightSkyBlue flex justify-start px-10 items-center max-w-[330px] min-h-[64px] group hover:text-blue duration-150 py-3 rounded-xl text-center relative'> <span className='absolute bg-gray bg-opacity-50 h-10 w-10 rounded-full left-12 group-hover:bg-[#e6f3ff]'></span><img src={atImage} className='mx-5 z-10 text-2xl group-hover:fill-blue' alt="" /><span className='Help Center'>Contact Us</span></p>
            <p className='hover:bg-lightSkyBlue flex justify-start px-10 items-center max-w-[330px] min-h-[64px] group hover:text-blue duration-150 py-3 rounded-xl text-center relative'> <span className='absolute bg-gray bg-opacity-50 h-10 w-10 rounded-full left-12 group-hover:bg-[#e6f3ff]'></span><img src={helpImage} className='mx-5 z-10 text-2xl group-hover:fill-blue' alt="" /><span className='Help Center'>Help Center</span></p>
            <p className='hover:bg-lightSkyBlue flex justify-start px-10 items-center max-w-[330px] min-h-[64px] group hover:text-blue duration-150 py-3 rounded-xl text-center relative'> <span className='absolute bg-gray bg-opacity-50 h-10 w-10 rounded-full left-12 group-hover:bg-[#e6f3ff]'></span><img src={eventImage} className='mx-5 z-10 text-2xl group-hover:fill-blue' alt="" /><span className='Help Center'>Events</span></p>
            <p className='hover:bg-lightSkyBlue flex justify-start px-10 items-center max-w-[330px] min-h-[64px] group hover:text-blue duration-150 py-3 rounded-xl text-center relative'> <span className='absolute bg-gray bg-opacity-50 h-10 w-10 rounded-full left-12 group-hover:bg-[#e6f3ff]'></span><img src={ourCustomer} className='mx-5 z-10 text-2xl group-hover:fill-blue' alt="" /><span className='Help Center'>Our Customers</span></p>
            <p className='hover:bg-lightSkyBlue flex justify-start px-10 items-center max-w-[330px] min-h-[64px] group hover:text-blue duration-150 py-3 rounded-xl text-center relative'> <span className='absolute bg-gray bg-opacity-50 h-10 w-10 rounded-full left-12 group-hover:bg-[#e6f3ff]'></span><img src={ourCaseStudy} className='mx-5 z-10 text-2xl group-hover:fill-blue' alt="" /><span className='Help Center'>Case Studies</span></p>
            <p className='hover:bg-lightSkyBlue flex justify-start px-10 items-center max-w-[330px] min-h-[64px] group hover:text-blue duration-150 py-3 rounded-xl text-center relative'> <span className='absolute bg-gray bg-opacity-50 h-10 w-10 rounded-full left-12 group-hover:bg-[#e6f3ff]'></span><img src={newsRoom} className='mx-5 z-10 text-2xl group-hover:fill-blue' alt="" /><span className='Help Center'>Newsroom</span></p>
            <p className='hover:bg-lightSkyBlue flex justify-start px-10 items-center max-w-[330px] min-h-[64px] group hover:text-blue duration-150 py-3 rounded-xl text-center relative'> <span className='absolute bg-gray bg-opacity-50 h-10 w-10 rounded-full left-12 group-hover:bg-[#e6f3ff]'></span><img src={bookADemo} className='mx-5 z-10 text-2xl group-hover:fill-blue' alt="" /><span className='Help Center'>Book a Demo</span></p>
        </div>
    )
}

export default Company