import Sidebar from "./Sidebar"
// import paranthaman from '../../assets/imgs/paranthaman.jpg'
import { GiVerticalBanner } from 'react-icons/gi'
import { TbPhotoEdit } from 'react-icons/tb'
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getVendor, setVendor } from '../../slices/vendorSlice'
import VendorService from "../../services/VendorService"
import toast, { Toaster } from 'react-hot-toast'
import Skeleton from 'react-loading-skeleton'

const Profile = () => {
    const vendor = useSelector(getVendor);
    const dispatch = useDispatch();
    const [banner, setBanner] = useState(vendor?.banner || "");
    const [profile, setProfile] = useState(vendor?.profile || "");
    const [loading, setLoading] = useState(true);
    const [loadingProfile, setLoadingProfile] = useState(true);
    const fileRef = useRef();
    const fileRefProfile = useRef();
    useEffect(() => {
        const authentication = async () => {
            await VendorService.getVendorData(localStorage.getItem('id')).then((res) => {
                dispatch(setVendor(res.data));
                setProfile(res.data.profile);
                setBanner(res.data.banner);
                setLoading(false)
            }).catch(() => {
                toast.error("Something went wrong!");
                setLoading(false)
            })
        }
        authentication();
    }, [])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const handleChange = async (event) => {
        const file = event.target.files[0];
        setLoading(true);
        await VendorService.updateBanner({ id: vendor?.vid, file: file }).then(async (response) => {
            if (response.status == 200) {
                await VendorService.getVendorData(vendor?.vid).then((res) => {
                    dispatch(setVendor(res.data));
                    setLoading(false);
                    setBanner(res.data.banner);
                    setProfile(res.data.profile);
                }).catch(() => {
                    toast.success("Something went wrong!");
                    setLoading(false)
                })
            }
        }).catch(() => {
            toast.error("Something went wrong!");
            setLoading(false)
        })
    }

    const handleChangeProfile = async (event) => {
        const file = event.target.files[0];
        setLoadingProfile(true);
        await VendorService.updateProfile({ id: vendor?.vid, file: file }).then(async (response) => {
            if (response.status == 200) {
                await VendorService.getVendorData(vendor?.vid).then((res) => {
                    dispatch(setVendor(res.data));
                    setLoadingProfile(false)
                    setBanner(res.data.banner);
                    setProfile(res.data.profile);
                }).catch(() => {
                    toast.success("Something went wrong!");
                    setLoadingProfile(false)
                })
            }
        }).catch(() => {
            toast.error("Something went wrong!");
            setLoadingProfile(false)
        })
    }

    return (
        <div className='mt-20 flex flex-col min-h-screen bg-lightGray2'>
            <Sidebar />
            <Toaster />
            <div className="ml-56 mt-5  flex flex-col">
                <div className="flex relative justify-between h-96 w-full object-cover rounded-xl bg-white shadow-xl group">
                    {
                        loading ?
                            <Skeleton className="h-96  w-full object-cover rounded-xl shadow-xl" />
                            :
                            <img src={`data:image/jpeg;base64,` + banner} className="max-h-96 w-full object-cover rounded-xl shadow-xl" />
                    }
                    <input ref={fileRef} accept="image/*" multiple={false} onChange={handleChange} type="file" name="" style={{ display: "none" }} id="" />
                    <div onClick={() => fileRef.current.click()} className="absolute text-white bg-opacity-50 cursor-pointer hover:text-blue right-4 bottom-0 flex justify-center items-center">
                        <GiVerticalBanner className="mx-3 text-xl" />
                        <p className="font-poppins text-xl">Edit Banner</p>
                    </div>
                    <div className="absolute -bottom-20 right-[40%] h-60 w-60 rounded-full">
                        <img src={`data:image/jpeg;base64,` + profile} className="h-60 object-cover rounded-full shadow-xl" />
                        <input ref={fileRefProfile} accept="image/*" multiple={false} onChange={handleChangeProfile} type="file" name="" style={{ display: "none" }} id="" />
                        <div onClick={() => fileRefProfile.current.click()} className="absolute text-white bg-opacity-50 cursor-pointer hover:text-blue right-7 bottom-10 flex justify-center items-center">
                            <TbPhotoEdit className="mx-3 text-xl" />
                        </div>
                    </div>
                </div>
                <div className="mt-24 flex flex-col items-center">
                    <p className="font-poppins text-3xl uppercase">
                        {vendor?.user?.name}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile