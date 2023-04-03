export default function UpdateProfile(){
    return(
        <>
            <div className="container my-5 py-5">
                <div className="row my-5 py-5">
                    <div className="col">
                        <div className="card">
                            <form>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Name</label>
                                        <input type="text" className="form-control" value='Radhe Shaym' />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Phone No</label>
                                        <input type="text" className="form-control" id="inputPassword4" value='9876543210'/>
                                    </div>
                                </div>
                        
                        <div className="row">
                            <div className="form-group col-md-3">
                                <label htmlFor="inputCity">Email</label>
                                <input type="text" className="form-control" id="inputCity" value='emp234@company.com'/>
                            </div>
                            <div className="form-group col-md-9">
                                <label htmlFor="inputCity">Address</label>
                                <input type="text" className="form-control" id="inputCity" value='H No 234 Bandra west,Mumbai,Maharastra,25478'/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mt-4">Update</button>
                    </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}