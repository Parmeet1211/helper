import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ApiServices from "../../../apiservice/ApiServices"
export default function Enquiry(){
    const [enquiries,setEnquiries] = useState([{}])
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
            ApiServices.getenquiry({}).then(
                x=>{
                    console.log(x)
                    setEnquiries(x.data.data)
                }
            )
        },[1]
    )
    return(
        <>
            <div className="container my-5 py-5 text-center ">
                <h1>Enquiries from Employees</h1>
            </div>
            {/* <div className="container  text-end h2">
                <input className='border border-light' type='search'></input>
                <Link >Filter<i className="fa-solid fa-filter "></i></Link>
                
            </div> */}
            
            <div className="container table-responsive">
               <table className="table table-hover ">
                    <thead className='text-primary'>
                        <tr>
                            <th>Sr No</th>
                            {/* <th>Enq No</th> */}
                            <th>Enquiry </th>
                            <th>Emp Name</th>
                            <th>Email</th>
                            <th>Description</th>    
                            <th>Reply</th>
                        </tr>
                    </thead>
                    
                        {enquiries.map((element,index)=>(
                            <tbody key={index}>
                            <tr>
                                <td>{index+1}</td>
                                <td>{element?.subject}</td>
                                <td>{element?.empId?.employee_name}</td>
                                <td>{element?.empId?.email}</td>
                                <td>{element.description}</td>
                               
                                <td><Link to={'/admin/reply/'+`${element._id}`}><i className="fa-solid fa-reply"></i></Link></td>
                            </tr>
                            </tbody>
                        ))}
                    
                </table> 
            </div>
        </>
    )
}