import { Link } from "react-router-dom";

export default function UserHome(){
    return(
        <>
            <div className="container my-5 py-5">
                <div className="row my-3">
                    <div className="col-lg-6 mt-5">
                        <Link to='/user/employeetask'>
                        <div className="card text-dark">
                        <h2 className="text-center display-4 mt-3"><i class="fa-solid fa-list-check"></i></h2>
                        <h1 className="text-center">Tasks Assigned</h1>
                        <br/>
                        <h1 className="text-center text-info">6</h1>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-6 mt-5">
                        <Link to='/user/projects'>
                            <div className="card text-dark">
                                <h2 className="text-center display-4 mt-3"><i class="fa-solid fa-diagram-project"></i></h2>
                                <h1 className="text-center">Projects</h1>
                                <br/>
                                <h1 className="text-center text-info">3</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-6 mt-5">
                        <Link to='/user/teams'>
                            <div className="card text-dark">
                                <h2 className="text-center display-4 mt-3"><i class="fa-solid fa-user-plus"></i></h2>
                                <h1 className="text-center">Team  </h1> 
                                <br/>
                                <h1 className="text-center text-info">Designer</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-6 mt-5">
                        <Link to='/user/history'>
                            <div className="card text-dark">
                                <h2 className="text-center display-4 mt-3"><i class="fa-solid fa-check"></i></h2>
                                <h1 className="text-center">Completed Tasks  </h1> 
                                <br/>
                                <h1 className="text-center text-info">06</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}