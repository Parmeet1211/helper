import { Link } from "react-router-dom"
export default function UserHeader(){
    return(
        <>
            {/* <!-- ======= Header ======= --> */}
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">

                <h1 className="logo"><Link>Helper</Link></h1>                
                

                <nav id="navbar" className="navbar">
                    <ul>
                    <li className="px-3"><Link className="nav-link scrollto " to='/user'>Home</Link></li>
                    <li className="px-3"><Link className="nav-link scrollto " to='/user/enquiry'>Enquiry</Link></li>
                    <li className="px-3"><Link className="nav-link scrollto" to='/user/employeetask'>Tasks</Link></li>
                    <li className="px-3"><Link className="nav-link scrollto" to='/user/reportuser'>Report</Link></li>
                    <li className="px-3"><Link to='profile' className="nav-link scrollto" >Profile</Link></li>
                    <li><Link className="getstarted scrollto" to='/'>Sign Out</Link></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                {/* <!-- .navbar --> */}

                </div>
            </header>
            {/* <!-- End Header --> */}
        </>
    )
}