import { useState } from "react"
import { Link } from "react-router-dom"
export default function EnquiryUser(){
    const [name,setName] = useState("")
    
    return(
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col my-3 text-end">
                        <Link to='/user/reply'><button className="btn btn-warning">View Replies</button></Link>
                    </div>
                </div>
            {/* <div className="card text-bg-light my-5 mb-3">
                    <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Task Id</label>
                                <input type="text" className="form-control" placeholder=" eg ; AB3241" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Employee Id</label>
                                <input type="text" className="form-control" id="inputPassword4" placeholder="Name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Description</label>
                            <textarea  className="form-control" id="inputAddress" placeholder="Description"></textarea>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-3">
                                <label htmlFor="inputCity">Priority</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose</option>
                                    {priority.map((element,index)=>(
                                        <option key={index}>{element}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputCity">Status</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose</option>
                                    {status.map((element,index)=>(
                                        <option key={index}>{element}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">Category</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose</option>
                                    {types.map((element,index)=>(
                                        <option key={index}>{element}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputZip">Last Date</label>
                                <input type="date" className="form-control" id="inputZip"/>
                            </div>
                        </div>
                        
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>  
                    </div>
                </div> */}
                <div className="col-lg-12 mt-4 mt-md-0">
                    <form  method="post" role="form" >
                    <div className="row">
                        <div className="col-md-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                    </div>
                    <div className="form-group mt-3">
                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                    </div>
                    {/* <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div> */}
                    <div className="text-center mt-4 "><button type="submit" className="btn btn-primary">Send Enquiry</button></div>
                    </form>
                </div>
            </div>
        </>
    )
}