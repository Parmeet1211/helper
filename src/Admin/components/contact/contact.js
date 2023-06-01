import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ApiServices from "../../../apiservice/ApiServices"
export default function ContactView(){
    const [enquiries,setEnquiries] = useState([{}])
    const navigate = useNavigate()
    
    useEffect(
        ()=>{
            if(sessionStorage.getItem("token") == null){
                navigate('/')
            }
            ApiServices.getcontactus({}).then(
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
                <h1>Enquiries from visitors</h1>
            </div>
            
            <div className="container table-responsive">
               <table className="table table-hover ">
                    <thead className='text-primary'>
                        <tr>
                            <th>Sr No</th>
                            <th>Enquiry </th>
                            <th> Name</th>
                            <th>Email</th>
                            <th>Description</th>    
                        </tr>
                    </thead>
                    
                        {enquiries.map((element,index)=>(
                            <tbody key={index}>
                            <tr>
                                <td>{index+1}</td>
                                <td>{element?.subject}</td>
                                <td>{element?.name}</td>
                                <td>{element?.email}</td>
                                <td>{element?.description}</td>   
                            </tr>
                            </tbody>
                        ))}
                    
                </table> 
            </div>
        </>
    )
}