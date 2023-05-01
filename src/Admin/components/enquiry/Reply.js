import { useState } from "react";
import { Link } from "react-router-dom";

export default function Reply(){
    const [enquiry,setEnquiry]=useState("5649")
    const [email,setEmail]=useState("emp123@gmail.com")
    const [description,setDescription]=useState("")
    return(
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col text-end">
                        <Link to='/admin/enquiry'>
                        <button className="btn btn-warning">View</button>
                        </Link>
                    </div>
                </div>

                <div className="row my-5 py-5">
                    <div className="col">
                        <div className="card my-5 mb-3">
                            <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Enquiry No</label>
                                        <input type="text" className="form-control" value={enquiry} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Employee Email</label>
                                        <input type="text" className="form-control" id="inputPassword4"value={email}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputAddress">Description</label>
                                    <textarea  className="form-control" id="inputAddress" placeholder="Description" value={description} onChange={
                                        (e)=>{
                                            setDescription(e.target.value)
                                        }
                                    }></textarea>
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