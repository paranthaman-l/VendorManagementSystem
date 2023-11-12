import { Toaster } from "react-hot-toast"
import SideBar from "./SideBar"
import Navbar from "./Navber"

const OrganizationHome = () => {

  return (
    <>
      <Navbar/>
      <div className='mt-20 flex flex-col min-h-screen bg-lightGray2'>
        <Toaster position='top-right' />
        <SideBar />
        <div className="mx-80">
        
        </div>
      </div>
    </>
  )
}

export default OrganizationHome