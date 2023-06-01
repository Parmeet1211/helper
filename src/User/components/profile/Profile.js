import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Apiservices from "../../../apiservice/ApiServices"

const IMAGE_BASE_URL ="http://localhost:5000/"

export default function Profile(){
    const [role,setRole] = useState("")
    const [name,setName] = useState("")
    const [empId,setEmpId] = useState("")
    const [contact,setContact] = useState("")
    const [email,setEmail] = useState("")
    const [address,setAddress] = useState("")
    const [image,setImage] = useState()
    const navigate = useNavigate()

    useEffect(
        ()=>{ 
            if(sessionStorage.getItem("token") == null){
                navigate('/')
            }
            Apiservices.getEmployee({userId : sessionStorage.getItem("_id")}).then(
                    x=>{
                        console.log(x)
                        setRole(x.data.data[0].role)
                        setName(x.data.data[0].employee_name)
                        setEmpId(x.data.data[0].employee_id)
                        setContact(x.data.data[0].contact)
                        setEmail(x.data.data[0].email)
                        setAddress(x.data.data[0].address)
                        setImage(x.data.data[0].image)
                    }
                )
        }
    )
    return(
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-5 mt-3">
                        <img src={IMAGE_BASE_URL+`${image}`} className="image-fluid w-75" ></img>
                        <div className="mt-5 text-start">
                            <Link to='/user/update'><span className="btn btn-primary">Update Profile</span></Link>
                        </div>
                        <div className="mt-5 text-start">
                            <Link to='/user/changepassword'><span className="btn btn-primary">Change Password</span></Link>
                        </div>
                    </div>
                    <div className="col-md-7 mt-3">
                        <h1 className="fw-bolder">{name}</h1>
                        <h5 className="text-info">{role}</h5>

                        <hr className="fw-bolder"></hr>
                        <h5><span className="fw-bolder">Employee ID</span>: {empId}</h5>
                        <br/>
                        <br/>
                        <h6>Contact Details</h6>
                        <hr/>
                        <h5><span className="fw-bolder">Contact No</span>: +91 {contact}</h5>
                        <h5><span className="fw-bolder">Email</span>: {email}</h5>
                        <h5><span className="fw-bolder">Address</span>: {address}</h5>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </>
    )
}