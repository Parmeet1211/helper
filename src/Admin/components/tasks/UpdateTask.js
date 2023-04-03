export default function UpdateTask(){
    return(
        <>
            <div className="container my-5 py-5">
                <div className="card text-bg-light my-5 mb-3">
                    <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Task Id</label>
                                <input type="text" className="form-control" value='463' />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Employee Id</label>
                                <input type="text" className="form-control" id="inputPassword4" value='emp788'/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Description</label>
                            <textarea  className="form-control" id="inputAddress" value='this is a mobile development project'></textarea>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-3">
                                <label htmlFor="inputCity">Priority</label>
                                <input type="text" className="form-control" id="inputCity" value='high'/>
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputCity">Status</label>
                                <input type="text" className="form-control" id="inputCity" value='running'/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">Category</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose</option>
                                    <option>Web Development</option>
                                    <option>Android Application</option>
                                    <option>Machine Learning</option>
                                    <option>Networking</option>
                                    <option>Data Analyst</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputZip">Last Date</label>
                                <input type="date" className="form-control" id="inputZip"/>
                            </div>
                        </div>
                        
                        <button type="submit" className="btn btn-primary mt-3">Update</button>
                    </form>  
                    </div>
                </div>
            </div>
        </>
    )
}