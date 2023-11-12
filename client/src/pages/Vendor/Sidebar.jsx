import contract from '../../assets/imgs/contract1.png'
import service from '../../assets/imgs/service.png'
import certification from '../../assets/imgs/certification.png'
import risk from '../../assets/imgs/risk.png'
import review from '../../assets/imgs/review.png'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
const Sidebar = () => {
  const [active, setActive] = useState("overview");
  const navigate = useNavigate();
  const location = useLocation();
    const currentPath = location.pathname;
  return (
    <div className='fixed bg-white h-full font-openSans py-4 pr-3 text-indigo2 w-[15%] '>
      <ul className='flex my-4 flex-col justify-center mr-1 border-b-[2px] border-darkGray border-opacity-20 pb-1'>
        <li onClick={() => { setActive('overview'); navigate('/vendor/home') }} className={`${currentPath === '/vendor/home' && "bg-lightSkyBlue2 hover:bg-lightSkyBlue2"} flex justify-start items-center py-3 px-2 cursor-pointer hover:bg-[#f6f7f7]`}>
          <img className='mx-3' src="https://app.connecteam.com/images/base-line/sidebar/overview-sidebar.svg" alt="" />Overview
        </li>
        <li onClick={() => { setActive('onboardingTeam'); navigate('/vendor/onboardingTeam') }} className={`${currentPath === '/vendor/onboardingTeam' && "bg-lightSkyBlue2 hover:bg-lightSkyBlue2"} flex justify-start items-center py-3 px-2 cursor-pointer hover:bg-[#f6f7f7]`}>
          <img className='mx-3' src="https://app.connecteam.com/images/base-line/sidebar/groups-sidebar.svg" alt="" />Onboarding Team
        </li>
      </ul>
      <ul className='flex my-3 flex-col justify-center mr-1 border-b-[2px] border-darkGray border-opacity-20 pb-1'>
        <li onClick={() => { setActive('services'); navigate('/vendor/services') }} className={`${currentPath === '/vendor/services' && "bg-lightSkyBlue2 hover:bg-lightSkyBlue2"} flex justify-start items-center py-3 px-2 cursor-pointer hover:bg-[#f6f7f7]`}>
          <img className='mx-3 h-5 w-5' src={service} alt="" />Services
        </li>
        <li onClick={() => { setActive('contracts'); navigate('/vendor/contracts') }} className={`${currentPath === '/vendor/contracts' && "bg-lightSkyBlue2 hover:bg-lightSkyBlue2"} flex justify-start items-center py-3 px-2 cursor-pointer hover:bg-[#f6f7f7]`}>
          <img className='mx-3 h-5 w-5' src={contract} alt="" />Contracts
        </li>
        <li onClick={() => { setActive('certifications'); navigate('/vendor/certifications') }} className={`${currentPath === '/vendor/certifications' && "bg-lightSkyBlue2 hover:bg-lightSkyBlue2"} flex justify-start items-center py-3 px-2 cursor-pointer hover:bg-[#f6f7f7]`}>
          <img className='mx-3 h-5 w-5' src={certification} alt="" />Certifications
        </li>
        {/* <li onClick={() => { setActive('riskManagement'); navigate('/vendor/riskManagement') }} className={`${currentPath === '/vendor/riskManagement' && "bg-lightSkyBlue2 hover:bg-lightSkyBlue2"} flex justify-start items-center py-3 px-2 cursor-pointer hover:bg-[#f6f7f7]`}>
          <img className='mx-3 h-5 w-5' src={risk} alt="" />Risk Management
        </li> */}
        {/* <li onClick={() => { setActive('reviews'); navigate('/vendor/reviews') }} className={`${currentPath === '/vendor/reviews' && "bg-lightSkyBlue2 hover:bg-lightSkyBlue2"} flex justify-start items-center py-3 px-2 cursor-pointer hover:bg-[#f6f7f7]`}>
          <img className='mx-3 h-5 w-5' src={review} alt="" />Feedbacks & Reviews
        </li> */}
        <li onClick={() => { setActive('serviceRequests'); navigate('/vendor/serviceRequests') }} className={`${currentPath === '/vendor/serviceRequests' && "bg-lightSkyBlue2 hover:bg-lightSkyBlue2"} flex justify-start items-center py-3 px-2 cursor-pointer hover:bg-[#f6f7f7]`}>
          <img className='mx-3 h-5 w-5' src={review} alt="" />Service Requests
        </li>
      </ul>
    </div>
  )
}

export default Sidebar