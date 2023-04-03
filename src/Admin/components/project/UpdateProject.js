export default function UpdateProject(){
    return(
        <>
            <div className="container my-5 py-5">
                <div className="card text-bg-light my-5 mb-3">
                    <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Project Id</label>
                                <input type="text" className="form-control" value='2434' />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Project Name</label>
                                <input type="text" className="form-control" id="inputPassword4" value='Food Delivery'/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Description</label>
                            <textarea  className="form-control" id="inputAddress" value='build mobile application for food delivery'></textarea>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">Project Leader</label>
                                <input type="text" className="form-control" id="inputCity" value='Ram'/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">Type</label>
                                <select id="inputState" className="form-control" value='Android'>
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
                                <input type="date" className="form-control" id="inputZip" value='12-april-2023'/>
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