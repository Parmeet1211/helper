import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ApiServices from "../../../apiservice/ApiServices"
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


export default function AddProject(){
    const navigate = useNavigate()
    const [categoryId,setCategoryId]=useState("")
    const [projectName,setProjectName]=useState("")
    const [description,setDescription]=useState("")
    const [projectLeader,setProjectLeader]=useState()
    // console.log(setProjectLeader)
    // console.log(projectLeader)
    // const [projectType,setProjectType]=useState("")
    const [lastDate,setLastDate]=useState("")
    const [category,setCategory]=useState([{}])
    const [employee,setEmployee]=useState([{}])
    useEffect(
        ()=>{
            ApiServices.getCategory().then(
                x=>{
                    // console.log(x)
                    setCategory(x.data.data)
                }
            )
            ApiServices.getEmployee().then(
                x=>{
                    // console.log(x)
                    setEmployee(x.data.data)
                }
            )
        },[1]
    )
    const formHandler = (e) =>{
        e.preventDefault()
        let data = {
            project_name : projectName,
            description :description,
            categoryId : categoryId,
            lastDate : lastDate,
            iscompleted :false,
            project_leader : projectLeader
        }
        // console.log(data)
        ApiServices.addProject(data).then(
            x=>{
                // console.log(x)
                if(x.data.success){
                    toast.success(x.data.msg)
                    setTimeout(
                        ()=>{
                            navigate('/admin/projectview')
                        },3000
                    
                    )
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
                        <Link to='/admin/projectview'><button className="btn btn-warning">View</button>
                        </Link>
                    </div>
                </div>
                <div className="card text-bg-light my-5 mb-3">
                    <div className="card-body">
                    <form onSubmit={formHandler}>
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
                                <select className="form-select" value={projectLeader} onChange={(e)=>
                                {
                                    console.log(e.target.value)
                                    setProjectLeader(e.target.value)}}>
                                        <option>Select</option>
                                    {employee?.map((element,index)=>(
                                        <option key={index} value={element?._id}>{element?.employee_name
                                        }</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">category</label>
                                <select id="inputState" className="form-control"
                                value={categoryId} onChange={
                                    (e)=>{
                                        setCategoryId(e.target.value)
                                    }
                                }>
                                    <option>Select</option>

                                    {category?.map((element,index)=>(
                                        <option key={index}value={element?._id}>{element.category_name
                                        }</option>
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
            <ToastContainer/>
        </>
    )
}