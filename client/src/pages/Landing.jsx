/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom'
import homepageImage1 from '../assets/imgs/homePageImage1.svg'
import { BsArrowRight, BsFillPlayCircleFill } from 'react-icons/bs';
import homePage3rdDivImage from '../assets/imgs/homePage3rdDivImage.webp'
import homePage4rdDivImage from '../assets/imgs/homePage4rdDivImage.webp'
import homePage5rdDivImage from '../assets/imgs/homePage5rdDivImage.webp'
import homePage6rdDivImage from '../assets/imgs/homePage56rdDivImage.webp'
import bg from '../assets/imgs/bubble_blue.svg'
import blueGraphics from '../assets/imgs/blue_graphics.svg'
import { useEffect } from 'react';
const Landing = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    const speed = 2000;
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = parseInt(counter.getAttribute("data-target"));
        const count = parseInt(counter.innerText);
        const increment = Math.trunc(target / speed);
        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };
      updateCount();
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div className='mt-20 min-h-full flex flex-col items-center lg-max:w-full'>
      {/* First div */}
      <div className="flex justify-between px-20 mt-10 w-full items-center lg-max:px-3 lg-max:flex-col lg-max:justify-center ">
        <div className="w-7/12 lg-max:w-full lg-max:px-5">
          <p className='text-5xl font-poppins font-extrabold'>The One Solution for Managing Your Vendors</p>
          <p className='font-inter mt-7 tracking-wider'>Manage, train, and communicate with your non-desk workforce, all on Delta's easy-to-use app</p>
          <div className="flex justify-start w-[90%]  items-center mt-10 ">
            <button onClick={()=>navigate('/signup')} className='flex justify-center mr-5 group items-center bg-blue px-4 py-2 min-w-[180px] min-h-[50px] text-white font-inter font-bold rounded-3xl'>Get Started <BsArrowRight className='ml-4 group-hover:translate-x-2 duration-300 text-xl' /></button>
            <button className='min-w-[210px] min-h-[50px] border-[3px] border-blue text-blue hover:text-hoverBlue flex justify-between items-center pl-5 pr-1 rounded-3xl font-bold font-inter'>What is Delta? <BsFillPlayCircleFill className='text-4xl text-blue' /> </button>
          </div>
        </div>
        <div className="w-5/12 flex justify-center">
          <img className='w-full z-0' src={homepageImage1} alt="" />
          <img className='absolute  right-10  overflow-hidden h-1/2  ' src={bg} alt="" />
          <img className='absolute left-0 top-0 h-full -z-10 opacity-20 rotate-45' src={blueGraphics} alt="" />
        </div>
      </div>
      {/*End of First div */}
      {/* Start of Second div */}
      <div className=" flex flex-col mt-20">
        <p className='flex justify-center text-xl font-poppins font-semibold mb-10 '>Trusted by Over <span data-target="36000" className='counter mx-2 min-w-[65px] text-center'> 0 </span>{" "} Companies Worldwide</p>
        <marquee direction="1000">
          <div className="flex justify-center items-center">
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/sodexoBW@2x-300x128.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/sodastreamBW@2x-300x103.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/caremarkBW@2x-300x140.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/chickfilaBW@2x-300x130.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/edibleBW@2x-300x107.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/totenamBW@2x-300x128.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/biggyBW@2x-300x150.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/bollabongBW@2x-300x97.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/EY-BW@2x-300x242.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/foltonBW@2x-300x143.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/HankelBW@2x-300x176.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/masonBW@2x-300x222.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/PlassonBW@2x-300x88.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/SubwayBW@2x-300x112.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/volvoBW@2x-300x107.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/McdonaldsBW@2x-300x107.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/sodexoBW@2x-300x128.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/sodastreamBW@2x-300x103.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/caremarkBW@2x-300x140.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/chickfilaBW@2x-300x130.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/edibleBW@2x-300x107.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/totenamBW@2x-300x128.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/biggyBW@2x-300x150.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/bollabongBW@2x-300x97.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/EY-BW@2x-300x242.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/foltonBW@2x-300x143.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/HankelBW@2x-300x176.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/masonBW@2x-300x222.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/PlassonBW@2x-300x88.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/SubwayBW@2x-300x112.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/volvoBW@2x-300x107.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/McdonaldsBW@2x-300x107.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/sodexoBW@2x-300x128.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/sodastreamBW@2x-300x103.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/caremarkBW@2x-300x140.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/chickfilaBW@2x-300x130.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/edibleBW@2x-300x107.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/totenamBW@2x-300x128.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/biggyBW@2x-300x150.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/bollabongBW@2x-300x97.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/EY-BW@2x-300x242.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/foltonBW@2x-300x143.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/HankelBW@2x-300x176.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/masonBW@2x-300x222.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/PlassonBW@2x-300x88.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/SubwayBW@2x-300x112.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/volvoBW@2x-300x107.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/McdonaldsBW@2x-300x107.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/sodexoBW@2x-300x128.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/sodastreamBW@2x-300x103.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/caremarkBW@2x-300x140.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/chickfilaBW@2x-300x130.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/edibleBW@2x-300x107.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/totenamBW@2x-300x128.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/biggyBW@2x-300x150.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/bollabongBW@2x-300x97.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/EY-BW@2x-300x242.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/foltonBW@2x-300x143.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/HankelBW@2x-300x176.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/masonBW@2x-300x222.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/PlassonBW@2x-300x88.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/SubwayBW@2x-300x112.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/volvoBW@2x-300x107.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/McdonaldsBW@2x-300x107.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/sodexoBW@2x-300x128.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/sodastreamBW@2x-300x103.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/caremarkBW@2x-300x140.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/chickfilaBW@2x-300x130.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/edibleBW@2x-300x107.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/totenamBW@2x-300x128.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/biggyBW@2x-300x150.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/bollabongBW@2x-300x97.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/EY-BW@2x-300x242.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/foltonBW@2x-300x143.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/HankelBW@2x-300x176.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/masonBW@2x-300x222.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/PlassonBW@2x-300x88.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/SubwayBW@2x-300x112.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/volvoBW@2x-300x107.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/McdonaldsBW@2x-300x107.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/sodexoBW@2x-300x128.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/sodastreamBW@2x-300x103.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/caremarkBW@2x-300x140.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/chickfilaBW@2x-300x130.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/edibleBW@2x-300x107.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/totenamBW@2x-300x128.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/biggyBW@2x-300x150.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/bollabongBW@2x-300x97.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/EY-BW@2x-300x242.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/foltonBW@2x-300x143.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/HankelBW@2x-300x176.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/masonBW@2x-300x222.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/PlassonBW@2x-300x88.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/SubwayBW@2x-300x112.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/volvoBW@2x-300x107.jpg" alt='' />
            <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/McdonaldsBW@2x-300x107.jpg" alt='' />
          </div>
        </marquee>
        {/* End of second div */}
      </div>
      {/* Start of the 3rd Div */}
      <div className="bg-yellow w-full mt-20 flex items-center py-5 px-10">
        <div className="w-5/12">
          <img src={homePage3rdDivImage} alt="" />
        </div>
        <div className="w-7/12 font-poppins flex flex-col justify-center items-center">
          <p className='text-2xl mb-8'>A BIG deal for small businesses</p>
          <p className='text-5xl mb-5 font-bold'>Delta's is <span className='bg-[#a1ece5] p-0'>100% free</span></p>
          <p className='text-5xl '>for up to 10 users!</p>
          <button className='flex justify-center group items-center bg-white px-4 py-2 min-w-[180px] min-h-[50px] text-indigo1 mt-5 font-extrabold font-inter rounded-3xl'>Create free Account! <BsArrowRight className='ml-4 group-hover:translate-x-2 duration-300 text-xl' /></button>
        </div>
      </div>
      {/* End of the 3rd Div */}
      {/* Start of the 4 th div */}
      <div className="flex justify-around px-10 mt-20 lg-max:flex-col-reverse lg-max:w-full">
        <img src={homePage4rdDivImage} alt="" />
        <div className="w-full mt-20 ml-20">
          <p className='font-poppins text-4xl font-bold w-9/12  my-3'>One-Stop Shop for All Business Vendors</p>
          <p className='font-poppins text-xl tracking-wider lg-max:w-10/12'>Everything your business needs to manage time efficiently and get things done quickly & paper free</p>
          <div className="flex items-center mt-10">
            <button className='text-blue mx-10 flex justify-center items-center group px-3 py-1 rounded-2xl bg-[#eaf5ff] hover:bg-hoverBlue hover:text-white'>
              Contracts<BsArrowRight className='ml-2 group-hover:translate-x-2 duration-300 text-xl' />
            </button>
            <button className='text-blue flex justify-center items-center group px-3 py-1 rounded-2xl bg-[#eaf5ff] hover:bg-hoverBlue hover:text-white'>
              Complaints<BsArrowRight className='ml-2 group-hover:translate-x-2 duration-300 text-xl' />
            </button>
          </div>
        </div>
      </div>
      {/* End of the 4 th div */}
      {/* Start of the 5 th div */}
      <div className="flex justify-around px-10 mt-20 lg-max:flex-col lg-max:w-full">
        <div className="w-full mt-20 ml-20 lg-max:w-full">
          <p className='font-poppins text-4xl font-bold w-9/12 my-3'>Effortlessly Communicate With Your Deskless Workforce</p>
          <p className='font-poppins text-xl lg-max:w-10/12 tracking-wider'>Everything you need to simplify work communication and keep everyone on the same page</p>
          <div className="flex items-center mt-10 lg-max:justify-end">
            <button className='text-[#d8a305]  bg-yellow mx-10 flex justify-center items-center group px-3 py-1 rounded-2xl   '>
              Chat<BsArrowRight className='ml-2 group-hover:translate-x-2 duration-300 text-xl' />
            </button>
            <button className='text-[#d8a305]  bg-yellow flex justify-center items-center group px-3 py-1 rounded-2xl '>
              Dictionary<BsArrowRight className='ml-2 group-hover:translate-x-2 duration-300 text-xl' />
            </button>
            <button className='text-[#d8a305]  mx-10 bg-yellow flex justify-center items-center group px-3 py-1 rounded-2xl '>
              Surveys<BsArrowRight className='ml-2 group-hover:translate-x-2 duration-300 text-xl' />
            </button>
          </div>
        </div>
        <img className='h-[500px] w-[500px] object-contain lg-max:w-full lg-max:h-[90%]' src={homePage5rdDivImage} alt="" />
      </div>
      {/* End of the 5 th div */}
      {/* Start of 6th div */}
      <div className="flex justify-around px-10 mt-20 lg-max:flex-col-reverse lg-max:w-full">
        <img src={homePage6rdDivImage} alt="" />
        <div className="w-full mt-20 ml-20">
          <p className='font-poppins text-4xl font-bold w-9/12 my-3'>People Management Made Easy</p>
          <p className='font-poppins text-xl tracking-wider'>Everything your needs to keep employees engaged, professional, and motivated</p>
          <div className="flex items-center mt-10">
            <button className='text-[#c95e00] mx-10 flex justify-center items-center group px-3 py-1 rounded-2xl bg-[#c95e00] bg-opacity-20'>
              Documentation<BsArrowRight className='ml-2 group-hover:translate-x-2 duration-300 text-xl' />
            </button>
            <button className='text-[#c95e00] flex justify-center items-center group px-3 py-1 rounded-2xl bg-[#c95e00] bg-opacity-20'>
              Best Vendors<BsArrowRight className='ml-2 group-hover:translate-x-2 duration-300 text-xl' />
            </button>
          </div>
        </div>
      </div>
      {/* End of 6th div */}
      {/* Start of 7th div */}
      <div className="mt-10 flex flex-col justify-center items-center">
        <p className='text-5xl font-bold'> Trending on Delta</p>
        <div className=" flex flex-col mt-20">
          <marquee direction="1000">
            <div className="flex justify-center items-center">
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/sodexoBW@2x-300x128.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/sodastreamBW@2x-300x103.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/caremarkBW@2x-300x140.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/chickfilaBW@2x-300x130.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/edibleBW@2x-300x107.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/totenamBW@2x-300x128.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/biggyBW@2x-300x150.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/bollabongBW@2x-300x97.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/EY-BW@2x-300x242.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/foltonBW@2x-300x143.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/HankelBW@2x-300x176.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/masonBW@2x-300x222.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/PlassonBW@2x-300x88.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/SubwayBW@2x-300x112.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/volvoBW@2x-300x107.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/McdonaldsBW@2x-300x107.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/sodexoBW@2x-300x128.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/sodastreamBW@2x-300x103.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/caremarkBW@2x-300x140.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/chickfilaBW@2x-300x130.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/edibleBW@2x-300x107.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/totenamBW@2x-300x128.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/biggyBW@2x-300x150.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/bollabongBW@2x-300x97.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/EY-BW@2x-300x242.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/foltonBW@2x-300x143.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/HankelBW@2x-300x176.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/masonBW@2x-300x222.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/PlassonBW@2x-300x88.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/SubwayBW@2x-300x112.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/volvoBW@2x-300x107.jpg" alt='' />
              <img className='h-14 mx-10 object-contain' src="https://connecteam.com/wp-content/uploads/2023/02/McdonaldsBW@2x-300x107.jpg" alt='' />
            </div>
          </marquee>
          {/* End of second div */}
        </div>
      </div>
      {/* End of 7th div */}
      <div className="min-h-[360px] flex-col flex justify-center items-center bg-blue w-full my-10 ">
        <p className='font-poppins text-2xl text-white font-semibold'>Delta</p>
        <p className='text-4xl font-poppins text-white font-bold my-10'>Connect your deskless workers with Delta's Vendor Manage app</p>
        <button className='flex justify-center items-center px-8 py-2 text-lg text-white font-inter border-[3px] border-white rounded-3xl font-semibold group hover:bg-hoverBlue'>Start for FREE <BsArrowRight className='ml-2 group-hover:translate-x-2 duration-500' /></button>
      </div>
    </div>
  )
}

export default Landing