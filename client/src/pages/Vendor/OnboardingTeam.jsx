import { useState } from 'react'
import Sidebar from './Sidebar'
import group from '../../assets/imgs/group.png'
import paranthaman from '../../assets/imgs/paranthaman.jpg'
import search from '../../assets/imgs/search.svg'
import qrcode from '../../assets/imgs/qrcode.svg'
import inviteLink from '../../assets/imgs/inviteLink.svg'
import filter from '../../assets/imgs/filter.svg'
import plus from '../../assets/imgs/plus.svg'
import plusblack from '../../assets/imgs/plusblack.svg'
import down from '../../assets/imgs/down.svg'
import deleteIcon from '../../assets/imgs/delete.svg'
import addEmployee from '../../assets/imgs/add-users.gif'
const OnboardingTeam = () => {
    const [isEmployee, setIsEmployee] = useState("employees")
    return (
        <div className='mt-20 flex flex-col min-h-screen bg-lightGray2'>
            <Sidebar />
            <div className="ml-60 mt-5 flex flex-col">
                <div className="flex justify-between px-10 mr-5 py-3 rounded-xl bg-white shadow-xl">
                    <div className="flex justify-center items-center">
                        <img className='h-16 w-16' src={group} alt="" />
                        <p className='font-openSans text-2xl my-1 '>On Boarding</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <img className='h-8 w-8 rounded-full' src={paranthaman} alt="" />
                        <button className='flex justify-center items-center  py-2 px-3 border-[1.5px] border-darkGray border-opacity-40 text-blue font-openSans hover:border-blue mx-2 rounded-2xl'><img src={qrcode} className='mx-2' alt="" />QR code</button>
                        <button className='flex justify-center items-center  py-2 px-3 border-[1.5px] border-darkGray border-opacity-40 text-blue font-openSans hover:border-blue mx-2 rounded-2xl'><img src={inviteLink} className='mx-2' alt="" />Get Invite Link</button>
                    </div>
                </div>
                <div className="flex mt-7 justify-around  mr-5 rounded-xl bg-lightGray2 text-gray">
                    <label onClick={() => setIsEmployee('employees')}
                        className={`cursor-pointer ${isEmployee === 'employees' && "bg-white text-darkGray"} w-1/2 flex justify-center items-center py-4 rounded-t-2xl text-xl tracking-wide font-openSans  `}
                        htmlFor="employees">
                        <input className='appearance-none' type="radio" id='employees' name='choice' value={"employees"} />
                        <p>Employees</p>
                    </label>
                    <label onClick={() => setIsEmployee('groups')}
                        className={`cursor-pointer ${isEmployee === 'groups' && "bg-white text-darkGray"} w-1/2 flex justify-center items-center py-4 rounded-t-2xl text-xl tracking-wide font-openSans  `}
                        htmlFor="groups">
                        <input className='appearance-none' type="radio" id='groups' name='choice' value={"employees"} />
                        <p>Groups</p>
                    </label>
                </div>
                <div className="flex flex-col mr-5 py-3 rounded-b-2xl bg-white">
                    <div className="flex justify-between items-center">
                        <button className='flex justify-center items-center bg-lightGray py-2 px-3 border-[1.5px] border-darkGray border-opacity-40 text-blue font-openSans hover:border-blue mx-2 rounded-2xl'><img src={filter} className='mx-2' alt="" />Filter</button>
                        <div className="flex justify-center items-center">
                            <div className="flex mx-5 justify-between min-w-[300px] border-[2px] rounded-3xl border-darkGray border-opacity-20 ">
                                <input className="px-2 w-full ml-3 py-2 outline-none bg-transparent" type="text" placeholder="Search" />
                                <img className="mr-2" src={search} alt="" />
                            </div>
                            <button className='flex justify-center items-center bg-lightGray py-2 px-3 border-[1.5px] border-darkGray border-opacity-40 text-blue font-openSans hover:border-blue mx-2 rounded-2xl'>Export <img src={down} className='mx-2' alt="" /></button>
                            <button className='flex justify-center items-center bg-blue hover:bg-hoverBlue py-[9px] px-3  text-white font-openSans hover:border-blue mx-2 rounded-2xl'><img src={plus} className='mx-2' alt="" />{isEmployee === 'employees' ? "Add Employee" : "Create Group"}</button>
                        </div>
                    </div>
                    {isEmployee === 'employees' ?
                        <div className="flex flex-col text-center">
                            <table className='mt-4 mx-6'>
                                <tr className='font-openSans bg-lightGray1 border-b-[2px] border-darkGray border-opacity-20 '>
                                    <th className='pr-20'></th>
                                    <th className='font-light text-sm text-start'>First name</th>
                                    <th className='font-light text-sm text-start py-4'>Last name</th>
                                    <th className='font-light text-sm text-start py-4'>Title</th>
                                    <th className='font-light text-sm text-start py-4'>Employee Start date</th>
                                    <th className='font-light text-sm text-start py-4'>Team</th>
                                    <th className='font-light text-sm text-start py-4'>Department</th>
                                    <th className='font-light text-sm text-start py-4'>Date of Added</th>
                                    <th className='font-light text-sm text-start py-4 text-transparent opacity-0'>Action</th>
                                </tr>
                                <tr className='font-openSans  hover:bg-lightGray1 group'>
                                    <th className='h-10 w-10 text-center '><img className='rounded-full h-10 w-10 text-center mx-auto' src={paranthaman} alt="" /></th>
                                    <th className='font-light text-sm text-start '>Paranthaman </th>
                                    <th className='font-light text-sm text-start py-4'>L</th>
                                    <th className='font-light text-sm text-start py-4'>Admin</th>
                                    <th className='font-light text-sm text-start py-4'>23 Sep 2023</th>
                                    <th className='font-light text-sm text-start py-4'>Team 1</th>
                                    <th className='font-light text-sm text-start py-4'>Department 1</th>
                                    <th className='font-light text-sm text-start py-4'>22 Sep 2023</th>
                                    <th className='font-light text-sm text-start py-4 opacity-0 group-hover:opacity-100 cursor-pointer'><img src={deleteIcon} alt="" /></th>
                                </tr>
                            </table>
                            <img className='h-28 object-contain mt-10' src={addEmployee} alt="" />
                            <p className='font-openSans text-xl my-3 font-bold'>Connect your Employees!</p>
                            <button className='flex max-w-fit justify-center items-center bg-blue hover:bg-hoverBlue py-[9px] px-3  text-white font-openSans hover:border-blue mx-auto rounded-2xl'><img src={plus} className='mx-2' alt="" />Add Employee</button>
                        </div>
                        :
                        <div className="flex flex-col">
                            <table className='my-10 mx-6 '>
                                <tr className='font-openSans bg-lightGray1 border-b-[2px] border-darkGray border-opacity-20 px-5'>
                                    <th className='font-light text-sm text-start py-4 px-5'>Group name</th>
                                    <th className='font-light text-sm text-start py-4'>Connected</th>
                                    <th className='font-light text-sm text-start py-4'>Created by</th>
                                    <th className='font-light text-sm text-start py-4'>Administered by</th>
                                    <th className='font-light text-sm text-start py-4 text-transparent opacity-0'>Action</th>
                                    <th className='font-light text-sm text-start py-4 text-transparent opacity-0'>Action</th>
                                </tr>
                                <tr className='font-openSans  hover:bg-lightGray1 group px-5'>
                                    <th className='font-light text-sm text-start flex py-4 px-5'> <img className='h-4 w-6 mr-3' src="https://app.connecteam.com/images/categories/groups/group-table-icon.png" alt="" /> Admins </th>
                                    <th className='font-light text-sm text-start py-4'>0 / 10</th>
                                    <th className='font-light text-sm text-start py-4'>Paranthaman L</th>
                                    <th className='font-light text-sm text-start py-4'>Paranthaman L</th>
                                    <th className='font-light text-sm text-start py-4 opacity-0 group-hover:opacity-100 cursor-pointer'><img className="fill-black" src={plusblack} alt="" /></th>
                                    <th className='font-light text-sm text-start py-4 opacity-0 group-hover:opacity-100 cursor-pointer'><img src={deleteIcon} alt="" /></th>
                                </tr>
                            </table>
                            <button className='flex mb-5 max-w-fit justify-center items-center bg-blue hover:bg-hoverBlue py-[9px] px-3  text-white font-openSans hover:border-blue mx-auto rounded-2xl'><img src={plus} className='mx-2' alt="" />Create Group</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default OnboardingTeam