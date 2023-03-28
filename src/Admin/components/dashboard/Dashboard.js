import AdminHeader from "../../layout/AdminHeader";
import { Outlet } from 'react-router-dom';

export default function Dashboard(){
    return(
        <>
            <AdminHeader/>
            <Outlet/>
        </>
    )
}