import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import ApiServices from '../../../apiservice/ApiServices'
export default function ProjectView(){
    const[projects,setProjects]=useState([{}])
    const changeDate = (date)=>
    {
        if(date)
        {
            return (date.split('T',1))

        }
    }
    useEffect(
        ()=>{
            ApiServices.getProject({status : true}).then(
                x=>{
                    // console.log(x)
                    setProjects(x.data.data)
                }
            )
        },[1]
    )
    
    return(
        <>
            <div className="container my-5 py-5 text-end h2">
                <div className='row'>
                    <div className='col-6 text-center'>
                        <h1>All Projects</h1>
                    </div>
                    <div className='col-6'>
                        <Link to='/admin/addproject'>
                            <button className='btn btn-warning'>Add</button>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className="container table-responsive">
               <table className="table  table-hover ">
                    <thead className='text-primary'>
                        <tr>
                            <td>Sr No</td>
                            {/* <td>Project Id</td> */}
                            <td>Project Name</td>
                            <td>Project Manager</td>
                            <td>Project Deadline</td>
                            <td>Type</td>
                            {/* <td>View</td> */}
                            <td>Update</td>
                            {/* <td>Delete</td> */}
                        </tr>
                    </thead>
                    
                        {projects?.map((element,index)=>(
                            <tbody key={index}>
                            <tr>
                                <td>{index+1}</td>
                                <td>{element?.project_name}</td>
                                <td>{element?.project_leader?.employee_name}</td>
                                <td>{changeDate(element?.lastDate)}</td>
                                <td>{element.categoryId?.category_name}</td>
                                {/* <td><Link to='/admin/viewsingle'><i className="fa-solid fa-eye"></i></Link></td> */}
                                <td><Link to={'/admin/updateproject/'+`${element._id}`}><button className='btn btn-success' value={element._id}>Update</button></Link></td>
                                {/* <td><button className='btn btn-danger'>Delete</button></td> */}
                            </tr>
                            </tbody>
                        ))}
                    
                </table> 
            </div>
        </>
    )
}