import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddTask(){
    const empName = ['Ram','Raju','Sandhya','Ayesha','Neeraj','Siddharth','Mayuri']
    const Category = ['Web Development','Machine Learning','Android Application','Data Analytics','Networking','DevOps']
    const project = ['ecommerce','face detection system','food delivery website','School management system']
    const priority = ['medium','high','low']

    // usestates
    const [taskName,setTaskName]=useState("")
    const [employee,setEmployee]=useState("")
    const [description,setDescription]=useState("")
    const [taskPriority,setTaskPriority]=useState("")
    const [projectId,setProjectId]=useState("")
    const [taskCategory,setTaskCategory]=useState("")
    const [lastDate,setLastDate]=useState("")

    return(
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col text-end">
                        <Link to='/admin/taskview'><button className="btn btn-warning">View</button>
                        </Link>
                    </div>

                </div>
                <div className="card text-bg-light my-5 mb-3">
                    <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Task Name</label>
                                <input type="text" className="form-control"  value={taskName}
                                onChange={
                                    (e)=>{
                                        setTaskName(e.target.value)
                                    }
                                }/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputState">Employee Name</label>
                                <select id="inputState" className="form-control"
                                value={employee}
                                onChange={
                                   (e)=>{
                                    setEmployee(e.target.value)
                                   }
                                }>
                                    {empName.map((element,index)=>(
                                        
                                        <option key={index+1}>{element}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Description</label>
                            <textarea  className="form-control" id="inputAddress" placeholder="Description"
                            value={description}
                            onChange={
                                (e)=>{
                                    setDescription(e.target.value)
                                }
                            }></textarea>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-3">
                                <label htmlFor="inputCity">Priority</label>
                                <select id="inputState" className="form-control"
                                value={taskPriority}
                                onChange={
                                    (e)=>{
                                        setTaskPriority(e.target.value)
                                    }
                                }>
                                    {priority.map((element,index)=>(
                                        
                                        <option key={index+1}>{element}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputCity">Project</label>
                                <select id="inputState" className="form-control"
                                value={projectId}
                                onChange={
                                    (e)=>{
                                        setProjectId(e.target.value)
                                    }
                                }>
                                    {project.map((element,index)=>(
                                        <option key={index}>{element}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">Category</label>
                                <select id="inputState" className="form-control"
                                value={taskCategory}
                                onChange={
                                    (e)=>{
                                        setTaskCategory(e.target.value)
                                    }
                                }>
                                    {Category.map((element,index)=>(
                                        <option key={index}>{element}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputZip">Last Date</label>
                                <input type="date" className="form-control" id="inputZip"
                                value={lastDate}
                                onChange={
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
                                    Create new Task
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