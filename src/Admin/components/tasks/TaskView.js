import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import ApiServices from '../../../apiservice/ApiServices';
export default function TaskView(){
    const [task , setTask] = useState([{}])
    useEffect(
        ()=>{
            let data={}
            ApiServices.gettask(data).then(
                x=>{
                    console.log(x)
                    setTask(x.data.data)
                }
            )
        },[1]
    )
    const changeDate = (date)=>
    {
        if(date)
        {
            return (date.split('T',1))

        }
    }
    return(
        <>
            <div className="container my-5 py-5 text-end h2">
                <div className='row'>
                    <div className='col-6 text-center'>
                        <h1>View Tasks</h1>
                    </div>
                    <div className='col-6'>
                        <Link to='/admin/addtask'><button className='btn btn-warning'>Add</button>
                        </Link>
                    </div>
                </div>     
            </div>
            
            <div className="container table-responsive">
               <table className="table table-hover ">
                    <thead className='text-primary'>
                        <tr>
                            <td>Sr No</td>
                            <td>Task Name</td>
                            <td>Assigned to</td>
                            <td>Description</td>
                            <td>Category</td>
                            <td>Deadline</td>
                            <td>Priority</td>
                            <td>progress</td>
                            {/* <td>View</td> */}
                            <td>Update</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {task?.map((element,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{element?.taskname}</td>
                                <td>{element?.employeeId?.employee_name}</td>
                                <td>{element.description}</td>
                                <td>{element?.categoryId?.category_name}</td>
                                <td>{changeDate(element?.lastDate)}</td>
                                <td>{element?.priority == 1 ? 'High': element?.priority == 2 ? 'Medium' : 'Low'}</td>
                                <td>{element?.progress}</td>
                                <td><Link to={'/admin/updatetask/'+`${element._id}`}><button className='btn btn-success'>Update</button></Link></td>
                                <td><Link><button className='btn btn-danger'>Delete</button></Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table> 
            </div>
            
        </>
    )
}