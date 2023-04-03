import { Outlet } from "react-router-dom";
import UserHeader from "../../layouts/UserHeader";

export default function Master(){
    return(
        <>
            <UserHeader/>
            <Outlet/>
        </>
    )
}