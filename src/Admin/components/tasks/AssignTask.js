import { Link } from "react-router-dom";
export default function AssignTask(){
    const taskId=['design','admin side','routing','applying algo','oops','test'];
    const empId=['Ramesh','Suresh','Satyam','Anushree','Kalpana','Rajender']
    return(
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-6">
                        <Link to='/admin/addtask'>
                        <button className="btn btn-info"><span className="h1">+</span></button>
                        </Link>
                    </div>
                    <div className="col-6 text-end">
                        <Link to='/admin/taskview'>
                        <button className="btn btn-warning"><span className="h3">View</span></button>
                        </Link>
                    </div>
                </div>
                <div className="card text-bg-light my-5 mb-3">
                    <div className="card-body">
                    <form>
                        <div className="row my-2">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputState">Task Name</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose</option>
                                    {taskId.map((element)=>(
                                        <option>{element}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                            <label htmlFor="inputState">Employee Name</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose</option>
                                    {empId.map((element)=>(
                                        <option>{element}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        
                        <button type="submit" className="btn btn-primary mt-5">Create</button>
                    </form>  
                    </div>
                </div>
            </div>
        </>
    )
}