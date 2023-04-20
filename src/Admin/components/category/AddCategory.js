export default function AddCategory(){
    return(
        <>
            <div className="container my-5 py-5">
            <div className="card text-bg-light my-5 mb-3">
                    <div className="card-body">
                    <form>
                        
                        <div className="form-group">
                            <label htmlFor="inputAddress">Category</label>
                            <input type='text'  className="form-control" id="inputAddress" placeholder=""/>
                        </div>
                        <div className="form-group mt-3">
                            <label>Description</label>
                            <textarea className="form-control"></textarea>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Add new Category
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