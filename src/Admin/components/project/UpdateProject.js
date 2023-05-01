import { useState } from "react"
export default function UpdateProject(){
    const [isCompleted,setIscompleted]=useState("False")
    const [projectName,setProjectName]=useState("Book Store")
    const [description,setDescription]=useState("build online book store for book delivery")
    const [projectLeader,setProjectLeader]=useState("Abhinav")
    const [projectType,setProjectType]=useState("Android")
    const [lastDate,setLastDate]=useState("05/12/2023")
    const category=['Android','Web Development','Networking','DevOps','Machine Learning','Cloud']
    return(
        <>
            <div className="container my-5 py-5">
                <div className="card text-bg-light my-5 mb-3">
                    <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Project Name</label>
                                <input type="text" className="form-control" id="inputPassword4" value={projectName} onChange={(e)=>{
                                    setProjectName(e.target.value)
                                }}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Is Completed</label>
                                <input type="text" className="form-control" value={isCompleted} onChange={(e)=>{
                                  setIscompleted(e.target.value)  
                                }} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Description</label>
                            <textarea  className="form-control" id="inputAddress" value={description} onChange={
                                (e)=>{
                                    setDescription(e.target.value)
                                }
                            }></textarea>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">Project Leader</label>
                                <input type="text" className="form-control" id="inputCity" value={projectLeader} onChange={(e)=>{
                                    setProjectLeader(e.target.value)
                                }}/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">Type</label>
                                <select id="inputState" className="form-control" value={projectType} onChange={
                                    (e)=>{
                                        setProjectType(e.target.value)
                                    }
                                }>
                                    {category.map((element,index)=>(
                                        <option key={index}>{element}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputZip">Last Date</label>
                                <input type="date" className="form-control" id="inputZip" value={lastDate} onChange={
                                    (e)=>{
                                        setLastDate(e.target.value)
                                    }
                                }/>
                            </div>
                        </div>
                        
                        <button type="submit" className="btn btn-primary mt-3">Update</button>
                    </form>  
                    </div>
                </div>
            </div>
        </>
    )
}