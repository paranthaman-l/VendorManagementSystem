import { BsArrowRight } from 'react-icons/bs'
import location from '../assets/imgs/location.svg'
import { Element, Link } from 'react-scroll'
const Contact = () => {
    return (
        <div className='flex items-center flex-col mt-20'>
            <div className="h-[545px] flex justify-between items-center flex-col bg-lightSkyBlue2 w-full">
                <p className="text-5xl mt-20 font-poppins font-bold text-indigo ">We want to hear from you!</p>
                <img className="" src="https://connecteam.com/wp-content/uploads/2023/06/Hero-Desktop-1866-0-1.jpg" alt="" />
            </div>
            <div className="my-5 flex flex-col justify-center items-center min-h-[300px]">
                <img className='mb-7' src={location} alt="" />
                <p className='text-darkGray text-opacity-70 font-inter text-[17px] w-[250px] text-center'>211, C - BLOCK Boys Hostel, Sri Krishna College of Technology , Coimbatore - 641042</p>
            </div>
            <div className="flex items-center my-5  justify-center">
                <Link duration={500} to='contact1' className="w-[400px] cursor-pointer hover:scale-[1.01] duration-500 hover:shadow-xl p-8 h-[226px] shadow-2xl rounded-2xl shadow-[#b0d8fd]  mx-6 flex justify-between flex-col">
                    <img className="h-12 w-12" src="https://connecteam.com/wp-content/uploads/2023/06/1866-Support-icon-4.svg" alt="" />
                    <div className="flex  flex-col justify-center">
                        <p className="font-inter">Already have an account?</p>
                        <p className="font-poppins tracking-wide  text-xl">Contact support</p>
                    </div>
                </Link>
                <Link duration={500} to='contact2' className="w-[400px] cursor-pointer hover:scale-[1.01] duration-500 hover:shadow-xl p-8 h-[226px] shadow-2xl rounded-2xl shadow-[#b0d8fd]  mx-6 flex justify-between flex-col">
                    <img className="h-12 w-12" src="https://connecteam.com/wp-content/uploads/2023/06/1866-Sales-icon-2.svg" alt="" />
                    <div className="flex  flex-col justify-center">
                        <p className="font-inter">Interested in Delta?</p>
                        <p className="font-poppins tracking-wide  text-xl">Let's connect</p>
                    </div>
                </Link>
            </div>
            <div className="h-56 mt-16 bg-lightSkyBlue2 w-full flex justify-center items-center flex-col">
                <p className='text-5xl font-poppins font-bold text-indigo'>We're here for you!</p>
                <p className='font-inter text-2xl my-10'>Get quick answers to your questions or contact our team</p>
            </div>
            <Element  id='contact1' className="px-10 flex justify-between items-center w-full mt-16">
                <img className='w-1/2' src="https://connecteam.com/wp-content/uploads/2023/06/Support-Desktop-1866-1-2-768x509.jpg" alt="" />
                <div className="w-1/2 px-5 flex flex-col items-start">
                    <p className='font-poppins text-[28px] font-bold'>Still need help? Get in touch</p>
                    <form className='w-full' onSubmit={(e) => e.preventDefault()}>
                        <div className="flex items-center my-5 justify-between">
                            <input className='p-3 focus:border-blue flex w-[48%] outline-none border-[1px] border-darkGray border-opacity-50 rounded-md text-xl' placeholder='First name' type="text" name="firstName" id="firstName" />
                            <input className='p-3 focus:border-blue flex w-[48%] outline-none border-[1px] border-darkGray border-opacity-50 rounded-md text-xl' placeholder='Last name' type="text" name="lastName" id="lastName" />
                        </div>
                        <div className="flex items-center my-5 justify-between">
                            <input className='p-3 focus:border-blue flex w-[48%] outline-none border-[1px] border-darkGray border-opacity-50 rounded-md text-xl' placeholder='Work Email' type="email" name="email" id="email" />
                            <input className='p-3 focus:border-blue flex w-[48%] outline-none border-[1px] border-darkGray border-opacity-50 rounded-md text-xl' placeholder='Phone number' type="text" name="phoneNumber" id="phoneNumber" />
                        </div>
                        <select className='p-3 focus:border-blue my-5 flex w-full outline-none border-[1px] border-darkGray border-opacity-50 rounded-md text-xl' name="" id="">
                            <option value="">Select Topic</option>
                            <option value="">Something's not working</option>
                            <option value="">Pricing/Billing</option>
                            <option value="">Account management</option>
                            <option value="">Product related questions</option>
                            <option value="">I have a feature request</option>
                        </select>
                        <textarea placeholder='Description' className='p-3 my-5 h-[130px] focus:border-blue flex w-full outline-none border-[1px] border-darkGray border-opacity-50 rounded-md text-xl' name="" id="" cols="30" rows="10"></textarea>
                        <button className='flex my-8 min-w-[145px]  bg-blue  font-poppins text-base justify-center font-semibold hover:bg-hoverBlue text-white duration-150 rounded-[35px] items-center py-4'>
                            Submit <BsArrowRight className='ml-4 group-hover:translate-x-2 duration-300 text-xl' />
                        </button>
                    </form>
                </div>
            </Element>
            <Element id='contact2' className="px-10 flex justify-between items-center w-full mt-16">
                <div className="w-5/12 px-5 flex flex-col items-start">
                    <p className='font-poppins text-[28px] font-bold'>Drop your message and we'll reply quickly!</p>
                    <form className='w-full' onSubmit={(e) => e.preventDefault()}>
                        <div className="flex items-center my-5 justify-between">
                            <input className='p-3 focus:border-blue flex w-[48%] outline-none border-[1px] border-darkGray border-opacity-50 rounded-md text-xl' placeholder='First name' type="text" name="firstName" id="firstName" />
                            <input className='p-3 focus:border-blue flex w-[48%] outline-none border-[1px] border-darkGray border-opacity-50 rounded-md text-xl' placeholder='Last name' type="text" name="lastName" id="lastName" />
                        </div>
                        <div className="flex items-center my-5 justify-between">
                            <input className='p-3 focus:border-blue flex w-[48%] outline-none border-[1px] border-darkGray border-opacity-50 rounded-md text-xl' placeholder='Work Email' type="email" name="email" id="email" />
                            <input className='p-3 focus:border-blue flex w-[48%] outline-none border-[1px] border-darkGray border-opacity-50 rounded-md text-xl' placeholder='Phone number' type="text" name="phoneNumber" id="phoneNumber" />
                        </div>
                        
                        <textarea placeholder='How can our team help you?*' className='p-3 my-5 h-[130px] focus:border-blue flex w-full outline-none border-[1px] border-darkGray border-opacity-50 rounded-md text-xl' name="" id="" cols="30" rows="10"></textarea>
                        <p className='text-darkGray text-opacity-60  text-center text-[10px] w-full'>
                            By clicking “Submit” I acknowledge Connecteam’s Privacy Policy</p>
                        <button className='flex my-8 min-w-[145px]  bg-blue  font-poppins text-base justify-center font-semibold hover:bg-hoverBlue text-white duration-150 rounded-[35px] items-center py-4'>
                            Submit <BsArrowRight className='ml-4 group-hover:translate-x-2 duration-300 text-xl' />
                        </button>
                    </form>
                </div>
                <img className='w-1/2' src="https://connecteam.com/wp-content/uploads/2023/06/Sales-Desktop-1866-2-1-768x575.jpg" alt="" />
            </Element>
        </div>
    )
}

export default Contact