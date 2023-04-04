import { Link } from "react-router-dom";

export default function Profile(){
    return(
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-5 mt-3">
                        <img src="/assets/img/team/team-1.jpg" className="image-fluid w-75" />
                        <div className="mt-5 text-start">
                            <Link to='/user/update'><span className="btn btn-primary">Update Profile</span></Link>
                        </div>
                    </div>
                    <div className="col-md-7 mt-3">
                        <h1 className="fw-bolder">Radhe Shaym</h1>
                        <h5 className="text-info">Product Designer</h5>

                        <hr className="fw-bolder"></hr>

                        <h5><span className="fw-bolder">Task Assigned</span>: 10</h5>
                        <h5><span className="fw-bolder">Team</span>: : Designer</h5>
                        <h5><span className="fw-bolder">Employee ID</span>: emp2345</h5>
                        <br/>
                        <br/>
                        <h6>Contact Details</h6>
                        <hr/>
                        <h5><span className="fw-bolder">Contact No</span>: +91 98765-43210</h5>
                        <h5><span className="fw-bolder">Email</span>: emp2345@company.com</h5>
                        <h5><span className="fw-bolder">Address</span>: H No 234 Bandra west,Mumbai,Maharastra,25478</h5>
                        <br/>
                        <br/>
                        <h5>Projects</h5>
                        <hr/>
                        <h5><span className="fw-bolder">ECommerce</span>: Developer</h5>
                        <h5><span className="fw-bolder">Detection System</span>: Tester</h5>
                        <h5><span className="fw-bolder">School Management</span>: Designer</h5>
                        <h5><span className="fw-bolder">Text Detection</span>: Tester</h5>
                    </div>
                </div>
            </div>
        </>
    )
}