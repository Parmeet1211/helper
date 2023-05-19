import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import ApiServices from '../../../apiservice/ApiServices'
import axios from 'axios'
export default function ViewCategory(){
    const [categoryName,setCategoryName] = useState("")
    const [category,setCategory] = useState([{}])
    
    useEffect(
        ()=>{
            let catdata = {
             category_name : categoryName
            }
            // console.log(catdata)
            ApiServices.getCategory().then(
                (x)=>{
                    console.log(x)
                    // console.log(x.data.data[0])
                    setCategory(x.data.data)
                }
            )
        },[category]
    )
    return(
        <>
            <div className="container my-5 py-5  h2">
                <div className='row'>
                    <div className='col text-center'>
                        <h1>View Category</h1>
                    </div>
                </div>
            </div>
            
            <div className="container table-responsive">
               <table className="table table-hover ">
                    <thead className='text-primary'>
                        <tr>
                            <td>Sr No</td>
                            <td>Category</td>
                            <td>Description</td>
                            <td>Update</td>
                            {/* <td>Delete</td> */}
                        </tr>
                    </thead>
                    
                        {category?.map((element,index)=>(
                            <tbody key={index}>
                            <tr>
                                <td>{index+1}</td>
                                <td>{element?.category_name}</td>
                                <td>{element?.description}</td>
                                <td><Link to={'/admin/updatecategory/'+`${element?._id}`}><button className='btn btn-success'>Update</button></Link></td>
                                {/* <td><button className='btn btn-danger'>Delete</button></td> */}
                            </tr>
                            </tbody>
                        ))} 
                    
                </table> 
            </div>
        </>
    )
}