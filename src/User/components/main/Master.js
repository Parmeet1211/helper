import { Outlet, useNavigate } from "react-router-dom";
import UserHeader from "../../layouts/UserHeader";
import { useEffect } from "react";

export default function Master(){
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
            <UserHeader/>
            <Outlet/>
        </>
    )
}