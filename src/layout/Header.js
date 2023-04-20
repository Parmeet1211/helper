import {Link} from 'react-router-dom';
export default function Header(){
    return(
        <>
            {/* <!-- ======= Header ======= --> */}
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">

                <h1 className="logo"><Link>Helper</Link></h1>                
                

                <nav id="navbar" className="navbar">
                    <ul>
                    <li className='px-3'><Link className="nav-link scrollto " to='/'>Home</Link></li>
                    <li className='px-3'><Link className="nav-link scrollto" to='/about'>About</Link></li>
                    <li className='px-3'><Link className="nav-link scrollto" to='/services'>Services</Link></li>
                    
                    <li className='px-3'><Link to='/contact' className="nav-link scrollto" >Contact</Link></li>
                    <li><Link className="getstarted scrollto" to='/signin'>Sign In</Link></li>
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