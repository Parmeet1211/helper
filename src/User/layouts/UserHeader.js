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
                    <li><Link className="nav-link scrollto " to='/'>Home</Link></li>
                    <li><Link className="nav-link scrollto" to='/about'>About</Link></li>
                    <li><Link className="nav-link scrollto" to='employeetask'>Tasks</Link></li>
                    
                    <li><Link to='profile' className="nav-link scrollto" >Profile</Link></li>
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