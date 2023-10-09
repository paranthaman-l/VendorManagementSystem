/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import AdminService from "../services/AdminService";
import { useDispatch } from "react-redux";
import { setAdmin } from "../slices/adminSlice";
import toast from "react-hot-toast";

const AdminAuth = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const navigate = useNavigate();
  const path = useLocation().pathname;
  useEffect(() => {
    const authentication = async () => {
      if (localStorage.getItem('token')) {
        await AuthService.ByToken(localStorage.getItem('token')).then(async(response) => {
          if (!response.data.error) {
            const role = response.data.role;
            if (role === "ADMIN") {
              await AdminService.getAdminData(response.data.uid).then((res)=>{
                dispatch(setAdmin(res.data));
                navigate(path);
              }).catch(()=>{
                toast.error("Something went wrong!")
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
      {token && role === "ADMIN" ? <Outlet /> : <Navigate to={"/admin/login"} />}
    </div>
  )
}

export default AdminAuth