import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiServices from "../../../apiservice/ApiServices";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function Team() {
    const teams = ['Designing', 'Development', 'Testing', 'Maintenance'];
    
    const [projectId,setProjectId] = useState("")
    const [employeeId,setEmployeeId] = useState("")
    const [team,setTeam]=useState("")
    const [project,setProject]=useState([{}])
    const [employee,setEmployee]=useState([{}])
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
            ApiServices.getEmployee({}).then(
                x=>{
                    // console.log(x)
                    setEmployee(x.data.data)
                }
            )
            ApiServices.getProject({}).then(
                x=>{
                    console.log(x)
                    setProject(x.data.data)
                }
            )
        },[1]
    )

    const formHandler = (e) =>{
        e.preventDefault()
        let data={
            teamType : team,
            projectId : projectId,
            empId : employeeId
        }
        // console.log(data)
        ApiServices.addTeam(data).then(
            x=>{
                // console.log(x)
                if(x.data.success){
                    toast.success(x.data.msg)
                    setTimeout(() => {
                        navigate('/admin/teamview')
                    },3000);
                }
                else{
                    toast.error(x.data.msg)
                }
            }
        )
    }
    return (
        <>
            <div className="container my-5 py-5">
                <div className="row my-3">
                    <div className="col-md-6 text-end">
                        <h1>Add Team</h1>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to='/admin/teamview'><button className="btn btn-primary">View Teams</button></Link>
                    </div>
                </div>
                <div className="row my-3 py-5">.
                    <div className="col">
                        <div className="card my-5 mb-3">
                            <div className="card-body">
                                <form onSubmit={formHandler}>
                                    <div className="row mt-5">
                                        <div className="form-group col-md-6 ">
                                            <label htmlFor="inputEmail4">Team</label>

                                            <select className=" form-select" value={team}
                                            onChange={
                                                (e)=>{
                                                    setTeam(e.target.value)
                                                }
                                            }>
                                                <option>Select</option>
                                                {teams.map((element, index) => (
                                                    <option key={index}value={index+1}>{element}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Project name</label>
                                            <select className="form-select" value={projectId} onChange={
                                                (e)=>{
                                                    setProjectId(e.target.value)
                                                }
                                            }>
                                              <option>Select</option> 
                                              {project.map((element,index)=>(
                                                <option key={index}value={element?._id}>{element?.project_name}</option>
                                              ))} 
                                            </select>
                                        </div>
                                        <div className="form-group col-md-12 mt-5">
                                            <label htmlFor="inputEmail4" >Employee Name</label>
                                            <select className=" form-select" value={employeeId} onChange={
                                                (e)=>{
                                                    setEmployeeId(e.target.value)
                                                }
                                            }>
                                            <option>Select</option>  
                                            {employee?.map((element,index)=>(
                                                <option key={index}value={element._id}>{element?.employee_name
                                                }</option>
                                            ))}  
                                            </select>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary my-3">Create</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <ToastContainer/>
        </>
    )
}