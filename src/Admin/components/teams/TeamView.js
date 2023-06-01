import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ApiServices from "../../../apiservice/ApiServices"
export default function TeamView(){
    const [team,setTeam] = useState([{}])
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
            ApiServices.getteams({}).then(
                x=>{
                    console.log(x)
                    setTeam(x.data.data)
                }
            )
        },[3]
    )
    return(
        <>
            <div className="container my-5 py-5 text-end h2">
                <div className='row'>
                    <div className='col-6 text-center'>
                        <h1>View Teams</h1>
                    </div>
                    <div className='col-6'>
                        <Link to='/admin/teams'><button className='btn btn-warning'>Add</button>
                        </Link>
                    </div>
                </div>     
            </div>
            <div className="container table-responsive">
               <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Team</th>
                            <th>Project</th>
                            <th>Employee</th>
                            <th>Employee Email</th>
                            <th>Employee Role</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {team.map((element,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{element?.teamType == 1?'Designer':element?.teamType == 2 ? 'Developer':element?.teamType == 3?'Tester' : 'Maintenance'}</td>
                                <td>{element?.projectId?.project_name}</td>
                                <td>{element?.empId?.employee_name}</td>
                                <td>{element?.empId?.email}</td>
                                <td>{element?.empId?.role}</td>
                                <td><Link to={'/admin/updateteam/'+`${element._id}`}><button className="btn btn-success">Update</button></Link></td>
                            </tr>
                        ))}
                    </tbody>
               </table>
            </div>
        </>
    )
}