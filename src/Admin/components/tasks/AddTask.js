import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiServices from "../../../apiservice/ApiServices";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function AddTask(){
    const [empName , setEmpName] = useState([{}])
    const [category ,setCategory] = useState([{}])
    const [project, setProject] = useState([{}])
    const priority = ['medium','high','low']

    // usestates
    const [taskName,setTaskName]=useState("")
    const [employee,setEmployee]=useState("")
    const [description,setDescription]=useState("")
    const [taskPriority,setTaskPriority]=useState("")
    const [projectId,setProjectId]=useState("")
    const [taskCategory,setTaskCategory]=useState("")
    const [lastDate,setLastDate]=useState("")
    const [isComplete,setIsComplete]=useState(false)

    const navigate = useNavigate()



    useEffect(
        ()=>{
            let data={}
            ApiServices.getEmployee(data).then(
                x=>{
                    // console.log(x)
                    setEmpName(x.data.data)
                }
            )

            ApiServices.getCategory(data).then(
                x=>{
                    console.log(x)
                    setCategory(x.data.data)
                }
            )

            ApiServices.getProject(data).then(
                x=>{
                    // console.log(x)
                    setProject(x.data.data)
                }
            )
        },[1]
    )


    const formHandler = (e) =>{
        e.preventDefault()
        let data={
            taskname : taskName,
            employeeId : employee,
            description : description,
            priority : taskPriority,
            projectId : projectId,
            categoryId : taskCategory,
            lastDate : lastDate
        }

        ApiServices.addtask(data).then(
            x=>{
                // console.log(x)
                if(x.data.success){
                    toast.success(x.data.msg)
                    setTimeout(() => {
                        navigate('/admin/taskview')
                    },3000);
                }
                else{
                    toast.error(x.data.msg)
                }
            }
        )
    }
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
                    <form onSubmit={formHandler}>
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
                                    <option>Select</option>
                                    {empName.map((element,index)=>(
                                        
                                        <option key={index+1} value={element._id}>{element.employee_name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="inputEmail4">Is Completed</label>
                                <input type="text" className="form-control"  value={isComplete}
                                />
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
                                    <option>Select</option>
                                    {priority.map((element,index)=>(
                                        
                                        <option key={index+1} value={index+1}>{element}</option>
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
                                    <option>Select</option>
                                    {project.map((element,index)=>(
                                        <option key={index}value={element._id}>{element.project_name}</option>
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
                                    <option>Select</option>
                                    {category.map((element,index)=>(
                                        <option key={index}value={element._id}>{element.category_name
                                        }</option>
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
            <ToastContainer/>
        </>
    )
}