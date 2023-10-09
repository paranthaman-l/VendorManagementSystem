/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import OrganizationService from "../services/OrganizationService";
import {setOrganization} from '../slices/organizationSlice';
import {toast} from 'react-hot-toast'
const OrganizationAuth = () => {
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
              if (role === "ORGANIZATION") {
                await OrganizationService.getOrganizationData(response.data.uid).then((res)=>{
                  dispatch(setOrganization(res.data));
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
            {token && role === "ORGANIZATION" ? <Outlet /> : <Navigate to={"/login"} />}
        </div>
    )
}

export default OrganizationAuth