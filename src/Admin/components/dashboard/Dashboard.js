import { useEffect } from "react";
import AdminHeader from "../../layout/AdminHeader";
import { Outlet, useNavigate } from 'react-router-dom';

export default function Dashboard(){
    const navigate = useNavigate()

    useEffect(
        ()=>{
            if(sessionStorage.getItem("token") == null){
                navigate('/')
            }
        },[1]
    )
    return(
        <>
            <AdminHeader/>
            <Outlet/>
        </>
    )
}