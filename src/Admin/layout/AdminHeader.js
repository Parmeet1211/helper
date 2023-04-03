import {Link} from 'react-router-dom';

export default function AdminHeader(){
    return(
        <>
            {/* <!-- ======= Header ======= --> */}
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">

                <h1 className="logo"><Link to="/admin">Helper</Link></h1>                
                

                <nav id="navbar" className="navbar">
                    <ul>
                    
                    <li><Link to='project' className="nav-link scrollto" >Project</Link></li>
                    <li><Link to='task' className="nav-link scrollto" >Tasks</Link></li>
                    
                    <li><Link to='employee' className="nav-link scrollto" >Employees</Link></li>
                    <li><Link to='report' className="nav-link scrollto" >Reports</Link></li>
                    <li><Link to='board' className="nav-link scrollto" >Board</Link></li>
                    <li><Link to='enquiry' className="nav-link scrollto" >Enquiry</Link></li>
                    <li><Link to='teams' className="nav-link scrollto" >Teams</Link></li>
                    <li><Link to='/'
                    className="getstarted scrollto" >Sign Out</Link></li>
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