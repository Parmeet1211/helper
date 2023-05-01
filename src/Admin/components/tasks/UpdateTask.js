import { useState } from "react"
export default function UpdateTask(){
    const status = ['running','todo']
    const priority = ['medium','high']
    const empName = ['Ram','Raju','Sandhya','Ayesha','Neeraj','Siddharth','Mayuri']
    const Category = ['Web Development','Machine Learning','Android Application','Data Analytics','Networking','DevOps']
    const project = ['ecommerce','face detection system','food delivery website','School management system']

    // usestates
    const [taskName,setTaskName]=useState("Creating Database")
    const [employee,setEmployee]=useState("Ayesha")
    const [description,setDescription]=useState('this is a mobile development project')
    const [taskPriority,setTaskPriority]=useState("high")
    const [projectId,setProjectId]=useState("")
    const [taskCategory,setTaskCategory]=useState("Android Development")
    const [lastDate,setLastDate]=useState("")
    return(
        <>
            <div className="container my-5 py-5">
                <div className="card text-bg-light my-5 mb-3">
                    <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Task Name</label>
                                <input type="text" className="form-control" value={taskName} 
                                onChange={
                                    (e)=>{
                                        setTaskName(e.target.value)
                                    }
                                }/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Employee Name</label>
                                <select className="form-select" value={employee}
                                onChange={
                                    (e)=>{
                                        setEmployee(e.target.value)
                                    }
                                }>
                                    {empName.map((element,index)=>(
                                        <option key={index}>{element}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Description</label>
                            <textarea  className="form-control" id="inputAddress" value={description}
                            onChange={
                                (e)=>{
                                    setDescription(e.target.value)
                                }
                            }></textarea>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-3">
                                <label htmlFor="inputCity">Priority</label>
                                <select className="form-select"
                                value={taskPriority}
                                onChange={
                                    (e)=>{
                                        setTaskPriority(e.target.value)
                                    }
                                }>
                                    {priority.map((element,index)=>(
                                        <option key={index}>{element}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputCity">Project</label>
                                <select className="form-select" value={projectId}
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
                                <select className="form-select"
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
                                <input type="date" className="form-control" id="inputZip" value={lastDate}
                                onChange={
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