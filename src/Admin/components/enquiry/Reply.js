import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ApiServices from "../../../apiservice/ApiServices";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function Reply(){
    // const [enquiry,setEnquiry]=useState("5649")
    // const [email,setEmail]=useState("emp123@gmail.com")
    const [description,setDescription]=useState("")
    const param = useParams()
    const _id = param._id
    const navigate = useNavigate()

    const replyEnquiry = (e) =>{
        e.preventDefault()
        let data = {
            _id : _id,
            reply : description
        }
        ApiServices.replyenquiry(data).then(
            x=>{
                // console.log(x)
                if(x.data.success){
                    toast.success(x.data.msg)
                    setTimeout(() => {
                        navigate('/admin/enquiry')
                    }, 3000);
                }
                else{
                    toast.error(x.data.msg)
                }
            }
        )
    }

    return(
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <h1>Reply</h1>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to='/admin/enquiry'>
                        <button className="btn btn-warning">View</button>
                        </Link>
                    </div>
                </div>

                <div className="row my-5 py-5">
                    <div className="col">
                        <div className="card my-5 mb-3">
                            <div className="card-body">
                            <form onSubmit={replyEnquiry}>
                                <div className="form-group">
                                    <label htmlFor="inputAddress">Reply</label>
                                    <textarea  className="form-control" id="inputAddress" placeholder="Reply" value={description} onChange={
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
            <ToastContainer/>
        </>
    )
}