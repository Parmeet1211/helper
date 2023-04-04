import {Link,Outlet} from 'react-router-dom';
export default function Project(){
    const projectnum=12;
    const running=5;
    const done=3;
    const pending=4; 
    return(
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6 mb-3 mb-sm-0">
                        <Link to='/admin/projectview'>
                            <div className="card  mb-3" style={{backgroundColor:'rgba(159,190,255)'}}>
                                <div className="card-body">
                                    <h5 className="card-title text-dark">Current Projects</h5>   
                                </div>
                            </div>
                        </Link>
                    </div>
                    
                    <div className="col-md-6">
                        <Link to='/admin/addproject'>
                        <div className="card  mb-3" style={{backgroundColor:'rgba(159,190,255)'}}>
                            <div className="card-body">
                                <h5 className="card-title text-dark">Add new Project</h5>    
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
                {/* <Outlet/> */}
                <div className='row my-5'>
                    
                    <div className='col-lg-5 col-xl-5'>
                        <div className="card mb-3 bg-light">
                                <div className="card-body">
                                    <h5 className="card-title">No of Projects</h5> 
                                        <hr/> 
                                        <h4>{projectnum}</h4> 
                                </div>
                        </div>
                        <div className="card mb-3 bg-light">
                                <div className="card-body">
                                    <h5 className="card-title">Running</h5> 
                                    <hr/> 
                                    <h4>{running}</h4> 
                                </div>
                        </div>
                        <div className="card mb-3 bg-light">
                                <div className="card-body">
                                    <h5 className="card-title">Done</h5> 
                                    <hr/> 
                                    <h4>{done}</h4> 
                                </div>
                        </div>
                        <div className="card mb-3 bg-light">
                                <div className="card-body">
                                    <h5 className="card-title">Pending</h5> 
                                    <hr/> 
                                    <h4>{pending}</h4> 
                                </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-7 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                        <img src="/assets/img/features-4.png"
                        className="img-fluid" alt="Sample image"/>
                    </div>
                </div>
            </div>
            
            
        </>
    )
}