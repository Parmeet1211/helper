import { useEffect } from "react"
import { useState } from "react"
import ApiServices from "../../../apiservice/ApiServices"
import { useNavigate, useParams } from "react-router-dom"
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"



export default function UpdateProject(){
    const [isCompleted,setIscompleted]=useState("")
    const [projectName,setProjectName]=useState("")
    const [description,setDescription]=useState("")
    const [projectLeader,setProjectLeader]=useState([{}])
    const [categoryId,setCategoryId]=useState("")
    const [lastDate,setLastDate]=useState()
    const [category,setCategory]=useState([{}])
    const [empId,setEmpId]=useState("")

    const param = useParams()
    const _id =param._id
    const nav = useNavigate()
    const navigate = useNavigate()

    useEffect(
        ()=>{
            if(sessionStorage.getItem("token") == null){
                navigate('/')
            }
        },[1]
    )


    useEffect(
        ()=>{
            let data={
                _id : _id
            }
            ApiServices.getCategory({}).then(
                x=>{
                    // console.log(x)
                    setCategory(x.data.data)
                }
            )
            ApiServices.getEmployee({}).then(
                x=>{
                    // console.log(x)
                    setProjectLeader(x.data.data)
                }
            )
            ApiServices.singleProject(data).then(
                x=>{
                    console.log(x)
                    setProjectName(x.data.data.project_name)
                    setIscompleted(x.data.data.iscompleted)
                    setDescription(x.data.data.description)
                }
            )
        },[]
    )
    const formHandle = (e) =>{
        e.preventDefault()
        let data={
            project_name : projectName,
            project_leader :empId,
            categoryId : categoryId,
            description : description,
            lastDate : lastDate,
            iscompleted : isCompleted,
            _id : _id
        }
        // console.log(data)
        ApiServices.updateProject(data).then(
            x=>{
                // console.log(x)
                if(x.data.success){
                    toast.success(x.data.msg)
                    setTimeout(() => {
                        nav('/admin/projectview')
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
                <div className="card text-bg-light my-5 mb-3">
                    <div className="card-body">
                    <form onSubmit={formHandle}>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Project Name</label>
                                <input type="text" className="form-control" value={projectName} onChange={(e)=>{
                                  setProjectName(e.target.value)  
                                }} />
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
                                <select className="form-select" onChange={(e)=>{setEmpId(e.target.value)}}>
                                    <option>Select</option>
                                    {projectLeader.map((element,index)=>(
                                        <option key={index} value={element._id}>{element.employee_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">Category</label>
                                <select id="inputState" className="form-control" value={categoryId} onChange={
                                    (e)=>{
                                        setCategoryId(e.target.value)
                                    }
                                }>
                                    <option>Select</option>
                                    {category.map((element,index)=>(
                                        <option key={index} value={element._id}>{element.category_name
                                        }</option>
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
            <ToastContainer/>
        </>
    )
}