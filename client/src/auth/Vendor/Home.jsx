import Sidebar from './Sidebar'
import addUser from '../../assets/imgs/add-user.svg'
import payment from '../../assets/imgs/payment.svg'
import service from '../../assets/imgs/addservice.png'
import requested from '../../assets/imgs/requested.png'
import check from '../../assets/imgs/check.svg'
import goToChat from '../../assets/imgs/go-to-chat.svg'
import activity from '../../assets/imgs/activity.webp'
const Home = () => {
  return (
    <>
      <div className='mt-20 flex flex-col min-h-screen bg-lightGray2'>
        <Sidebar />
        <div className="pl-20 flex justify-end mx-4 mt-4">
          <div className="w-[89%] flex flex-col rounded-2xl bg-white h-60 shadow-xl">
            <p className='font-poppins mx-10 pt-5'>Quick Actions</p>
            <div className="flex w-full mx-3 justify-between items-center">
              <div className="w-2/12 flex-col flex items-center justify-center h-40 mt-5 duration-200 cursor-pointer rounded-lg bg-white shadow-xl border-[1px] border-transparent hover:border-blue hover:shadow-none">
                <img className='h-14 my-1 w-14' src={addUser} alt="" />
                <p className='py-1 font-inter'>Add Employee</p>
              </div>
              <div className="w-2/12 flex-col  flex items-center justify-center h-40 mt-5 duration-200 cursor-pointer rounded-lg bg-white shadow-xl border-[1px] border-transparent hover:border-blue hover:shadow-none">
                <div className="relative h-14 w-14">
                  <span className='h-14 w-14 flex justify-center items-center rounded-xl top-0 left-0  bg-[#0051ff] bg-opacity-20 absolute'>
                    <img className='h-11 z-50 right-0 left-0 my-1 w-11' src={service} alt="" />
                  </span>
                </div>
                <p className='py-1 font-inter'>Add Service</p>
              </div>
              <div className="w-2/12 flex-col flex items-center justify-center h-40 mt-5 duration-200 cursor-pointer rounded-lg bg-white shadow-xl border-[1px] border-transparent hover:border-blue hover:shadow-none">
                <div className="relative h-14 w-14">
                  <span className='h-14 w-14 flex justify-center items-center rounded-xl top-0 left-0  bg-[#ffe591] bg-opacity-20 absolute'>
                    <img className='h-10 z-50 right-0 left-0 my-1 w-10' src={requested} alt="" />
                  </span>
                </div>
                <p className='py-1 font-inter'>Requested</p>
              </div>
              <div className="w-2/12 flex-col flex items-center justify-center h-40 mt-5 duration-200 cursor-pointer rounded-lg bg-white shadow-xl border-[1px] border-transparent hover:border-blue hover:shadow-none">
              <img className='h-14 my-1 w-14' src={goToChat} alt="" />
                <p className='py-1 font-inter'>Chat</p>
              </div>
              <div className="w-2/12 mr-10 flex-col flex items-center justify-center h-40 mt-5 duration-200 cursor-pointer rounded-lg bg-white shadow-xl border-[1px] border-transparent hover:border-blue hover:shadow-none">
                <img className='h-14 my-1 w-14' src={payment} alt="" />
                <p className='py-1 font-inter'>Payments</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-52  font-openSans flex justify-evenly items-start my-12">
          <div className="flex flex-col min-h-[305px] bg-white shadow-xl rounded-xl w-5/12">
            <p className='py-5 px-4  text-lg'>Alerts</p>
            <div className="flex flex-col  justify-center h-full border-t-[1px] border-darkGray border-opacity-40 pt-14 items-center w-full">
              <img src={check} alt="" />
              <p className='font-semibold text-lg mt-6 text-blue'>You’re all caught up</p>
              <p className='text-blue'>No new alerts to display at this time</p>
            </div>
          </div>
          <div className="flex flex-col min-h-[345px] bg-white shadow-xl rounded-xl w-6/12">
            <div className="flex justify-between items-center">
              <p className='py-5 px-4  text-lg'>Activity</p>
              <button className='py-2 px-3 border-[1.5px] border-darkGray border-opacity-40 text-blue font-openSans hover:border-blue mx-5 rounded-2xl'>View History</button>
            </div>
            <div className="flex flex-col  justify-center h-full border-t-[1px] border-darkGray border-opacity-40 pt-14 items-center w-full">
              <img src={activity} alt="" />
              <p className='font-semibold text-lg mt-6 text-blue'>There is nothing to display</p>
              <p className='text-gray w-1/2 flex justify-center items-center text-center mt-3'>Your employees need to engage with your content</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home