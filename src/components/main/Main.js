import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import {Outlet} from 'react-router-dom';
export default function Main(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}