export default function UpdateEmployee(){
    return(
        <>
        <div className="container my-5 py-5">
            <div className="card text-bg-light my-5 py-5 mb-3">
                    <div className="card-body">
                    <form>
                        
                        <div className="form-group">
                            <label htmlFor="inputAddress">Employee Id</label>
                            <input type='text'  className="form-control" id="inputAddress" value="emp123"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Employee Name</label>
                            <input type='text'  className="form-control" id="inputAddress" value='Smriti Mandana'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Employee Role</label>
                            <input type='text'  className="form-control" id="inputAddress" value='Designer'/>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Update
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>  
                    </div>
                </div>
                </div>
        </>
    )
}