import {Link,Outlet} from 'react-router-dom'; 

export default function Task(){
    const tasknum=35;
    const running=15;
    const done=12;
    const pending=8;
    return(
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-4 mb-3 mb-sm-0">
                        <Link to='taskview'>
                            <div className="card mb-3" style={{backgroundColor:'rgba(159,190,255)'}}>
                                <div className="card-body">
                                    <h5 className="card-title text-dark">Current Tasks</h5>   
                                </div>
                            </div>
                        </Link>
                    </div>
                    
                    <div className="col-md-4">
                        <Link to='addtask'>
                        <div className="card  mb-3 text-dark" style={{backgroundColor:'rgba(159,190,255)'}}>
                            <div className="card-body">
                                <h5 className="card-title">Add new Task</h5>    
                            </div>
                        </div>
                        </Link>
                    </div>

                    <div className="col-md-4">
                        <Link to='assigntask'>
                        <div className="card  mb-3" style={{backgroundColor:'rgba(159,190,255)'}}>
                            <div className="card-body">
                                <h5 className="card-title text-dark">Assign Task</h5>    
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='row my-5'>
                    
                    <div className='col-lg-5 col-xl-5'>
                        <div className="card mb-3 ">
                                <div className="card-body">
                                    <h5 className="card-title">No of Tasks</h5> 
                                        <hr/> 
                                        <h4>{tasknum}</h4> 
                                </div>
                        </div>
                        <div className="card mb-3 ">
                                <div className="card-body">
                                    <h5 className="card-title">Running</h5> 
                                    <hr/> 
                                    <h4>{running}</h4> 
                                </div>
                        </div>
                        <div className="card mb-3 ">
                                <div className="card-body">
                                    <h5 className="card-title">Done</h5> 
                                    <hr/> 
                                    <h4>{done}</h4> 
                                </div>
                        </div>
                        <div className="card mb-3 ">
                                <div className="card-body">
                                    <h5 className="card-title">Pending</h5> 
                                    <hr/> 
                                    <h4>{pending}</h4> 
                                </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-7 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                        <img src="/assets/img/hero.png"
                        className="img-fluid" alt="Sample image"/>
                    </div>
                </div>
                {/* <Outlet/> */}
            </div>
        </>
    )
}