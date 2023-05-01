import { useState } from "react"

export default function ReportUser(){
    const projects=['Ecommerce','Student Management','Food Delivary']
    const tasks=['desingn ui','design backend','applying apis']

    const [task,setTask]=useState("")
    const [project,setProject]=useState("")
    const [percentage,setPercentage]=useState("")
    return(
        <>
            <div className="container my-5 py-5 text-center">
                <div className="col-lg-12 mt-5">
                    <form  method="post" role="form" >
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <select className="form-select" value={project} onChange={
                                (e)=>{
                                    setProject(e.target.value)
                                }
                            }>
                                {projects.map((element,index)=>(
                                    <option key={index}>{element}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <select className="form-select" value={task} onChange={
                                (e)=>{
                                    setTask(e.target.value)
                                }
                            }>
                                {tasks.map((element,index)=>(
                                    <option key={index}>{element}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <label>Percentage of completed work</label>
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="eg 40" value={percentage} onChange={
                            (e)=>{
                                setPercentage(e.target.value)
                            }
                        } required/>
                    </div>
                    
                    {/* <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div> */}
                    <div className="text-center mt-4 "><button type="submit" className="btn btn-primary">Submit</button></div>
                    </form>
                </div>
            </div>
        </>
    )
}