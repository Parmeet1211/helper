export default function AddProject(){
    return(
        <>
            <div className="container my-5 py-5">
                <div className="card text-bg-light my-5 mb-3">
                    <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Project Id</label>
                                <input type="text" className="form-control" placeholder=" eg ; AB3241" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Project Name</label>
                                <input type="text" className="form-control" id="inputPassword4" placeholder="Name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Description</label>
                            <textarea  className="form-control" id="inputAddress" placeholder="Description"></textarea>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">Project Leader</label>
                                <input type="text" className="form-control" id="inputCity"/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">Type</label>
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
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Create new Project
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </form>  
                    </div>
                </div>
            </div>
        </>
    )
}