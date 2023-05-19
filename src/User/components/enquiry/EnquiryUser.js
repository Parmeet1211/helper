import { useState } from "react"
import { Link } from "react-router-dom"
export default function EnquiryUser(){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [subject,setSubject] = useState("")
    const [description,setDescription] = useState("")

    return(
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col my-3 text-end">
                        <Link to='/user/reply'><button className="btn btn-warning">View Replies</button></Link>
                    </div>
                </div>
                <div className="col-lg-12 mt-4 mt-md-0">
                    <form  method="post" role="form" >
                    <div className="row">
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
                    </div>
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
        </>
    )
}