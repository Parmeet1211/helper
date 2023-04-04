import { Link } from "react-router-dom";

export default function AddEmployee(){
    return(
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col text-end">
                        <Link to='/admin/viewemployee'><button className="btn btn-warning">View</button>
                        </Link>
                    </div>
                </div>
                <div className="card text-bg-light my-5 mb-3">
                    <div className="card-body">
                    <form>
                        
                        <div className="form-group">
                            <label htmlFor="inputAddress">Employee Id</label>
                            <input type='text'  className="form-control" id="inputAddress" placeholder=""/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Employee Name</label>
                            <input type='text'  className="form-control" id="inputAddress" placeholder=""/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Employee Role</label>
                            <input type='text'  className="form-control" id="inputAddress" placeholder=""/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Employee Email</label>
                            <input type='email'  className="form-control" id="inputAddress" placeholder=""/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Employee Password</label>
                            <input type='text'  className="form-control" id="inputAddress" placeholder=""/>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Add new Employee
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form>  
                    </div>
                </div>
            </div>
        </>
    )
}