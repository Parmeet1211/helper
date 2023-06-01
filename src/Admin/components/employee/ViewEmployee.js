import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import ApiServices from '../../../apiservice/ApiServices';
export default function ViewEmployee(){
    const [employee ,setEmployee] = useState([{}])
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
                    console.log(x)
                    setEmployee(x.data.data)
                }
            )
        },[1]
    )
    return(
        <>
            <div className="container my-5 py-5 text-end h2">
                <div className='row'>
                    <div className='col-6 text-center'>
                        <h1>View Employee</h1>
                    </div>
                    <div className='col-6 text-end'>
                        <Link to='/admin/addemployee'>
                        <button className='btn btn-warning'>Add</button>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className="container table-responsive">
               <table className="table table-hover ">
                    <thead className='text-primary'>
                        <tr>
                            <td>Sr No</td>
                            <td>Employee Id</td>
                            <td>Employee Name</td>
                            <td>Role</td>
                            <td>Address</td>
                            <td>Email</td>
                            <td>Contact</td>
                            <td>Update</td>
                            {/* <td>Delete</td> */}
                        </tr>
                    </thead>
                    
                    <tbody>
                        {employee?.map((element,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{element?.employee_id}</td>
                                <td>{element?.employee_name}</td>
                                <td>{element?.role}</td>
                                <td>{element?.address}</td>
                                <td>{element?.email}</td>
                                <td>{element?.contact}</td>
                                <td><Link to={'/admin/updateemployee/'+`${element._id}`}><button className='btn btn-success'>Update</button></Link></td>
                                {/* <td><Link><button className='btn btn-danger'>Delete</button></Link></td> */}
                            </tr>
                        ))}
                    </tbody>
                    
                </table> 
            </div>
        </>
    )
}