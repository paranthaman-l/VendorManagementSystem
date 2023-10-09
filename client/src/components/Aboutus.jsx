import { BsArrowRight } from "react-icons/bs"

/* eslint-disable react/no-unescaped-entities */
const Aboutus = () => {
    return (
        <div className='flex items-center flex-col mt-20'>
            <div className="min-h-[650px] w-full">
                <div className="min-h-[400px] flex-col mt-10 w-full bg-lightSkyBlue1 flex justify-center items-center">
                    <p className='text-5xl tracking-wide font-poppins font-bold text-white'>We are Delta's</p>
                    <p className='font-inter  my-5 text-2xl  text-white'>We are here to help you run your business</p>
                    <img className='absolute bottom-16' src="https://connecteam.com/wp-content/uploads/2021/02/about-cover-desktop.png" alt="" />
                </div>
            </div>
            <div className="my-10 mt-16 text-center">
                <p className='text-4xl tracking-wide font-poppins font-bold '>We live by our mission.</p>
                <p className='w-[582px] font-inter py-8 text-center flex justify-center mx-auto'>Running a business is hard and at times overwhelming. That’s why we created Delta, so businesses can easily communicate, operate and train their deskless teams, no matter where they are.</p>
                <p className='w-[582px] font-inter  text-center flex justify-center mx-auto'>Our mission is to help businesses thrive by taking away the daily hustle and complexities of managing teams so they can have the peace of mind to grow and run their business.</p>
            </div>
            <img src="https://connecteam.com/wp-content/uploads/2021/02/about-us_stars_.png" alt="" />
            <div className="my-10 mt-16 text-center">
                <p className='text-4xl tracking-wide font-poppins font-bold '>Our values drive us.</p>
                <div className="grid my-14 grid-flow-row gap-7 grid-cols-2">
                    <div className="flex w-[385px] items-start">
                        <img className="mr-5" src="https://connecteam.com/wp-content/uploads/2021/08/icon-1.svg" alt="" />
                        <div className="flex flex-col  items-start justify-start">
                            <p className="text-xl mt-2 mb-3 font-poppins ">Industry Leaders</p>
                            <p className="w-[325px] text-start font-inter">
                                We provide an amazing product and out-of-this-world service which, combined, deliver premium quality to all our customers.</p>
                        </div>
                    </div>
                    <div className="flex w-[385px] items-start">
                        <img className="mr-5" src="https://connecteam.com/wp-content/uploads/2021/08/icon-2.svg" alt="" />
                        <div className="flex flex-col  items-start justify-start">
                            <p className="text-xl mt-2 mb-3 font-poppins ">Customer Focused</p>
                            <p className="w-[325px] text-start font-inter">
                                We are building long-term relationships and are constantly improving our product and service to create a positive difference in our customers’ work and lives.</p>
                        </div>
                    </div>
                    <div className="flex w-[385px] items-start">
                        <img className="mr-5" src="https://connecteam.com/wp-content/uploads/2021/08/icon-3.svg" alt="" />
                        <div className="flex flex-col  items-start justify-start">
                            <p className="text-xl mt-2 mb-3 font-poppins text-start">Promote Team Growth & Happiness</p>
                            <p className="w-[325px] text-start font-inter">
                                Our success comes from the shared energy, skill, and contributions of every single team member.</p>
                        </div>
                    </div>
                    <div className="flex w-[385px] items-start">
                        <img className="mr-5" src="https://connecteam.com/wp-content/uploads/2021/08/icon-4.svg" alt="" />
                        <div className="flex flex-col  items-start justify-start">
                            <p className="text-xl mt-2 mb-3 font-poppins ">Ambitious and Hard Working</p>
                            <p className="w-[325px] text-start font-inter">We believe there’s no substitute for hard work and ambition, just like our customers, we work hard to succeed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-10 mt-10 flex w-full flex-col text-center">
                <p className='text-4xl tracking-wide font-poppins font-bold '>Facts about Delta's</p>
                <div className="flex  mt-20 px-24 justify-evenly w-full items-center">
                    <div className="flex w-[270px] flex-col justify-center">
                        <p className="text-[55px] text-[#fec006] font-poppins">36,000+</p>
                        <p className="font-poppins text-xl text-center mx-auto">Organizations</p>
                    </div>
                    <div className="flex w-[270px] flex-col justify-center">
                        <p className="text-[55px] text-[#5200ff] font-poppins">500k+</p>
                        <p className="font-poppins text-xl text-center mx-auto">Vendors</p>
                    </div>
                    <div className="flex w-[270px] flex-col justify-center">
                        <p className="text-[55px] text-[#00c6ea] font-poppins">79+</p>
                        <p className="font-poppins text-xl text-center mx-auto">Help Centers</p>
                    </div>
                    <div className="flex w-[270px] flex-col justify-center">
                        <p className="text-[55px] text-[#eb608f] font-poppins">200+</p>
                        <p className="font-poppins text-xl text-center mx-auto">Services</p>
                    </div>
                </div>
        </div>
            <div className="min-h-[360px] flex-col flex justify-center items-center bg-blue w-full my-10 ">
                <p className='font-poppins text-2xl text-white font-semibold'>Delta</p>
                <p className='text-4xl font-poppins text-center text-white w-[47%] font-bold my-10'>Get started in less than a minute.
                    It's that easy.</p>
                <button className='flex justify-center items-center px-8 py-2 text-lg text-white font-inter border-[3px] border-white rounded-3xl font-semibold group hover:bg-hoverBlue'>Start for FREE <BsArrowRight className='ml-2 group-hover:translate-x-2 duration-500' /></button>
            </div>
        </div>
    )
}

export default Aboutus