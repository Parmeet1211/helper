import { Link } from "react-router-dom"
export default function EnquiryUser(){
    const types=['Function Test','Function Failure','Changes(effect)','Change (causes)','Controls','Action','Bugs','Need','Confirm']
    const status = ['In Progress','To Do','Done']
    const priority = ['High','Medium','Low']
    return(
        <>
            <div className="container my-5 py-5">
            <div className="row">
                <div className="col my-3 text-end">
                    <Link to='/user/reply'><button className="btn btn-warning">View Replies</button></Link>
                </div>
            </div>
            <div className="card text-bg-light my-5 mb-3">
                    <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Task Id</label>
                                <input type="text" className="form-control" placeholder=" eg ; AB3241" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Employee Id</label>
                                <input type="text" className="form-control" id="inputPassword4" placeholder="Name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Description</label>
                            <textarea  className="form-control" id="inputAddress" placeholder="Description"></textarea>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-3">
                                <label htmlFor="inputCity">Priority</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose</option>
                                    {priority.map((element,index)=>(
                                        <option key={index}>{element}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputCity">Status</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose</option>
                                    {status.map((element,index)=>(
                                        <option key={index}>{element}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">Category</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose</option>
                                    {types.map((element,index)=>(
                                        <option key={index}>{element}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputZip">Last Date</label>
                                <input type="date" className="form-control" id="inputZip"/>
                            </div>
                        </div>
                        
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>  
                    </div>
                </div>
            </div>
        </>
    )
}