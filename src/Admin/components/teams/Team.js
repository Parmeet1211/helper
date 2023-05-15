import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiServices from "../../../apiservice/ApiServices";
export default function Team() {
    const teams = ['Designing', 'Development', 'Testing', 'Maintenance'];
    
    const [projectId,setProjectId] = useState("")
    const [employeeId,setEmployeeId] = useState("")
    const [team,setTeam]=useState("")
    const [project,setProject]=useState([{}])
    const [employee,setEmployee]=useState([{}])


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


            
        }
    }
    return (
        <>
            <div className="container my-5 py-5">
                <div className="row my-3 text-end">
                    <Link to='/admin/teamview'><button className="btn btn-primary">View Teams</button></Link>
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
        </>
    )
}