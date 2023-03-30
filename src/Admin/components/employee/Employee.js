import {Link,Outlet} from 'react-router-dom';
export default function Employee(){
    const num=27;
    const developers=13;
    const designers=4;
    const testers=5;
    const leaders=5;
    const managers=2;
    return(
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6 mb-3 mb-sm-0">
                        <Link to='viewemployee'>
                            <div className="card  mb-3" style={{backgroundColor:'rgba(159,190,255)'}}>
                                <div className="card-body">
                                    <h5 className="card-title text-dark">Employees</h5>   
                                </div>
                            </div>
                        </Link>
                    </div>
                    
                    <div className="col-md-6">
                        <Link to='addemployee'>
                        <div className="card mb-3" style={{backgroundColor:'rgba(159,190,255)'}}>
                            <div className="card-body">
                                <h5 className="card-title text-dark">Add new Employee</h5>    
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='row my-5'>
                    <div className='col-md-4 text-center my-4 bg-light' style={{borderRadius:'559px'}}>
                        <h1 className='mt-3'>Total Employees</h1>
                        <h2 className='font-weight-bolder'>{num}</h2>
                    </div>
                    <div className='col-md-4 text-center my-4 bg-light' style={{borderRadius:'559px'}}>
                        <h1 className='mt-3'>Developers</h1>
                        <h2 className='font-weight-bolder'>{developers}</h2>
                    </div>
                    <div className='col-md-4 text-center my-4 bg-light' style={{borderRadius:'559px'}}>
                        <h1 className='mt-3'>Designer</h1>
                        <h2 className='font-weight-bolder'>{designers}</h2>
                    </div>
                    <div className='col-md-4 text-center my-4 bg-light' style={{borderRadius:'559px'}}>
                        <h1 className='mt-3'>Tester</h1>
                        <h2 className='font-weight-bolder'>{testers}</h2>
                    </div>
                    <div className='col-md-4 text-center my-4 bg-light' style={{borderRadius:'559px'}}>
                        <h1 className='mt-3'>Leaders</h1>
                        <h2 className='font-weight-bolder'>{leaders}</h2>
                    </div>
                    <div className='col-md-4 text-center my-4 bg-light' style={{borderRadius:'559px'}}>
                        <h1 className='mt-3'>Manager</h1>
                        <h2 className='font-weight-bolder'>{managers}</h2>
                    </div>
                </div>
                {/* <Outlet/> */}
            </div>
        </>
    )
}