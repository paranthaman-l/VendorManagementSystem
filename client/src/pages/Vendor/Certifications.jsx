import Sidebar from "./Sidebar"
import certifications from '../../assets/imgs/certification.png'
import search from '../../assets/imgs/search.svg'
const Certifications = () => {
  return (
    <div className='mt-20 flex flex-col min-h-screen bg-lightGray2'>
            <Sidebar />
            <div className="ml-60 mt-5 flex flex-col">
                <div className="flex justify-between px-10 mr-5 py-3 rounded-xl bg-white shadow-xl">
                    <div className="flex justify-center items-center">
                        <img className='h-16 w-16 mr-5' src={certifications} alt="" />
                        <p className='font-openSans text-2xl my-1 '>Certifications</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex mx-5 justify-between min-w-[300px] border-[2px] rounded-3xl border-darkGray border-opacity-20 ">
                            <input className="px-2 w-full ml-3 py-2 outline-none bg-transparent" type="text" placeholder="Search" />
                            <img className="mr-2" src={search} alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex my-6 justify-between px-10 mr-5 py-3 rounded-xl bg-white shadow-xl">
                    Paranthaman
                </div>
            </div>
        </div>
  )
}

export default Certifications