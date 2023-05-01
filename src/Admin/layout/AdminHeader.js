import {Link} from 'react-router-dom';

export default function AdminHeader(){
    return(
        <>
            {/* <!-- ======= Header ======= --> */}
            <header id="header" className="fixed-top" >
                <div className="container d-flex align-items-center justify-content-between ">

                <h1 className="logo"><Link to="/admin" >Helper</Link></h1>                
                

                <nav id="navbar" className="navbar ">
                    <ul>
                    {/* <li><Link to='/admin/task' className="nav-link scrollto" >Tasks</Link></li> */}
                    
                    {/* <li><Link to='/admin/employee' className="nav-link scrollto" >Employees</Link></li> */}
                    {/* <li><Link to='/admin/report' className="nav-link scrollto" >Reports</Link></li> */}
                    
                    
                    {/* <li><Link to='/admin/teams' className="nav-link scrollto" >Teams</Link></li> */}
                    <li>
                    <div className="dropdown">
                        <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Project
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to='/admin/project'>Project</Link>
                            </li>
                            <li>
                                <Link to='/admin/projectview'>Current Projects</Link>
                            </li>
                            <li>
                                <Link to='/admin/addproject'>Add new Project</Link>
                            </li>
                            
                        </ul>
                    </div>
                    </li>
                    <li>
                    <div className="dropdown">
                        <button className="btn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                             Tasks
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to='/admin/task'>Tasks</Link>
                            </li>
                            <li>
                                <Link to='/admin/taskview'>Current Tasks</Link>
                            </li>
                            <li>
                                <Link to='/admin/addtask'>Add new Task</Link>
                            </li>
                            {/* <li>
                                <Link to='/admin/assigntask'>Assign Task</Link>
                            </li> */}
                        </ul>
                    </div>
                    </li>
                    <li>
                    <div className="dropdown">
                        <button className="btn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                             Teams
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to='/admin/teams'>Create Team</Link>
                            </li>
                            <li>
                                <Link to='/admin/teamview'>View Team</Link>
                            </li>
                           
                        </ul>
                    </div>
                    </li>
                    <li>
                    <div className="dropdown">
                        <button className="btn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                             Employees
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to='/admin/addemployee'>Add Employee</Link>
                            </li>
                            <li>
                                <Link to='/admin/viewemployee'>View Employees</Link>
                            </li>
                           
                        </ul>
                    </div>
                    </li>
                    <li>
                    <div className="dropdown">
                        <button className="btn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                             Category
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to='/admin/addcategory'>Add Category</Link>
                            </li>
                            <li>
                                <Link to='/admin/viewcategory'>View Category</Link>
                            </li>
                           
                        </ul>
                    </div>
                    </li>
                    <li ><Link to='/admin/board' className="nav-link scrollto text-dark " ><button className='btn pt-2 '>Board</button></Link></li>
                    <li><Link to='/admin/enquiry' className="nav-link scrollto text-dark" ><button className='btn'>Enquiry</button></Link></li>
                    <li><Link to='/admin/viewcontact' className="nav-link scrollto text-dark" ><button className='btn'>Contact Enquiry</button></Link></li>
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