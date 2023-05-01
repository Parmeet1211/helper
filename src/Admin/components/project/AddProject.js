import { useState } from "react"
import { Link } from "react-router-dom"
export default function AddProject(){
    const [projectId,setProjectId]=useState("")
    const [projectName,setProjectName]=useState("")
    const [description,setDescription]=useState("")
    const [projectLeader,setProjectLeader]=useState("")
    const [projectType,setProjectType]=useState("")
    const [lastDate,setLastDate]=useState("")
    const category=['Android','Web Development','Networking','DevOps','Machine Learning','Cloud']
    return(
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col text-end">
                        <Link to='/admin/projectview'><button className="btn btn-warning">View</button>
                        </Link>
                    </div>
                </div>
                <div className="card text-bg-light my-5 mb-3">
                    <div className="card-body">
                    <form>
                        <div className="row">
                            {/* <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4" >Project Id</label>
                                <input type="text" className="form-control" placeholder=" eg ; AB3241" value={projectId} onChange={
                                    (e)=>{
                                        setProjectId(e.target.value)
                                    }
                                }/>
                            </div> */}
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Project Name</label>
                                <input type="text" className="form-control" id="inputPassword4" placeholder="Name"
                                value={projectName} onChange={
                                    (e)=>{
                                        setProjectName(e.target.value)
                                    }
                                }/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Is Completed</label>
                                <input type="text" className="form-control" id="inputPassword4" placeholder="Is Completed"
                                value="false" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Description</label>
                            <textarea  className="form-control" id="inputAddress" placeholder="Description"
                            value={description} onChange={
                                (e)=>{
                                    setDescription(e.target.value)
                                }
                            }></textarea>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">Project Leader</label>
                                <input type="text" className="form-control" id="inputCity"
                                value={projectLeader} onChange={
                                    (e)=>{
                                        setProjectLeader(e.target.value)
                                    }
                                }/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">category</label>
                                <select id="inputState" className="form-control"
                                value={projectType} onChange={
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
                                <input type="date" className="form-control" id="inputZip"
                                value={lastDate} onChange={
                                    (e)=>{
                                        setLastDate(e.target.value)
                                    }
                                }/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Create new Project
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </form>  
                    </div>
                </div>
            </div>
        </>
    )
}