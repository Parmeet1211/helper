import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ApiServices from "../../../apiservice/ApiServices"
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


export default function EnquiryUser(){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [subject,setSubject] = useState("")
    const [description,setDescription] = useState("")  
    const navigate = useNavigate()

    useEffect(
        ()=>{
            if(sessionStorage.getItem("token") == null){
                navigate('/')
            }
        },[1]
    ) 
    const formHandler = ( e) =>{
        e.preventDefault()
        let data = {
            empId : sessionStorage.getItem("empId"),
            description : description,
            subject : subject
        }
        ApiServices.addEnquiry(data).then(
            x=>{
                console.log(x)
                if(x.data.success){
                    toast.success(x.data.msg)
                }
                else{
                    toast.success(x.data.msg)
                }
            }
        )
    }

    return(
        <>
            <div className="container my-5 py-5">
                <div className="row my-3 text-center">
                    <h1>Add Enquiry</h1>
                </div>
                <div className="row">
                    <div className="col my-3 text-end">
                        <Link to='/user/reply'><button className="btn btn-warning">View Replies</button></Link>
                    </div>
                </div>
                <div className="col-lg-12 mt-4 mt-md-0">
                    <form onSubmit={formHandler}>
                    {/* <div className="row">
                        <div className="col-md-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" value={name} onChange={
                            (e)=>{
                                setName(e.target.value)
                            }
                        } required />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" value={email} onChange={
                            (e)=>{
                                setEmail(e.target.value)
                            }
                        } required/>
                        </div>
                    </div> */}
                    <div className="form-group mt-3">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" value={subject} onChange={
                            (e)=>{
                                setSubject(e.target.value)
                            }
                        } required/>
                    </div>
                    <div className="form-group mt-3">
                        <textarea className="form-control" name="message" rows="5" placeholder="Message" value={description} onChange={
                            (e)=>{
                                setDescription(e.target.value)
                            }
                        } required></textarea>
                    </div>
                    <div className="text-center mt-4 "><button type="submit" className="btn btn-primary">Send Enquiry</button></div>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}