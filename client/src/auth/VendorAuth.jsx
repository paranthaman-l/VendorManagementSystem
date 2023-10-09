import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import VendorService from "../services/VendorService";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setVendor } from "../slices/vendorSlice";


const VendorAuth = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const navigate = useNavigate();
  const path = useLocation().pathname;
  useEffect(() => {
    const authentication = async () => {
      if (localStorage.getItem('token')) {
        await AuthService.ByToken(localStorage.getItem('token')).then((response) => {
          if (!response.data.error) {
            const role = response.data.role;
            if (role === "VENDOR") {
              VendorService.getVendorData(response.data.uid).then((res)=>{
                dispatch(setVendor(res.data));
                console.log(res.data);
                navigate(path);
              }).catch(()=>{
                toast.error("Something went wrong!");
              })
            }
          }
        });
      }
    }
    authentication();
  }, [])
  return (
    <div>
      {token && role === "VENDOR" ? <Outlet /> : <Navigate to={"/login"} />}
    </div>
  )
}

export default VendorAuth