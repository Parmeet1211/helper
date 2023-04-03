export default function Reply(){
    return(
        <>
            <div className="container my-5 py-5">
                <div className="row my-5 py-5">
                    <div className="col">
                        <div className="card my-5 mb-3">
                            <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Enquiry No</label>
                                        <input type="text" className="form-control" value='3653' />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Employee No</label>
                                        <input type="text" className="form-control" id="inputPassword4"value='emp3745'/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputAddress">Description</label>
                                    <textarea  className="form-control" id="inputAddress" placeholder="Description"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary my-3">Reply</button>
                            </form>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}