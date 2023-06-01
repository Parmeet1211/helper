import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ApiServices from "../../../apiservice/ApiServices"

export default function Replies(){
    const [reply,setReply]=useState([{}])
    const navigate = useNavigate()

    useEffect(
        ()=>{
            if(sessionStorage.getItem("token") == null){
                navigate('/')
            }
            let data = {
                empId : sessionStorage.getItem("empId")
            }
            // console.log(data)
            ApiServices.getenquiry(data).then(
                x=>{
                    console.log(x)
                    setReply(x.data.data)
                }
            )
        }
    )
    return(
        <>
            <div className="container my-5 py-5">
                <div className="row my-3 text-center">
                    <h1>View Enquiry</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to='/user/enquiry'><button className="btn btn-warning">
                            Back
                        </button>
                        </Link>
                    </div>

                </div>
                <div className="row">
                    {reply.map((element,index)=>(
                        <div className="col-12 mt-4" key={index}>
                        <div className="card">
                            <div className="card-header">
                                <h5>Enquiry No : {element?._id}</h5>
                                {/* <h5>Task Id : {element.taskId}</h5> */}
                                {/* <h3>Type : {element.type}</h3> */}
                            </div>
                            <div className="card-body">
                                <p>
                                    <h5>Subject : {element?.subject}</h5>
                                    <hr/>
                                    <h5>{element?.description}</h5>
                                    <hr/>
                                    <h5>{element?.reply}</h5>
                                </p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}