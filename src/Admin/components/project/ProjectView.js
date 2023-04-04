import { useState } from 'react'
import {Link} from 'react-router-dom'
export default function ProjectView(){
    
    const projects=[
        {
            id:'12345',
            name:'ECommerce',
            manager:'Manish',
            deadline:'22-10-22',
            status:'running'
        },
        {
            id:'12342',
            name:'Image Detection',
            manager:'Shardha Kumari',
            deadline:'05-04-23',
            status:'completed'
        },
        {
            id:'62345',
            name:'Noise Detection',
            manager:'Ram',
            deadline:'18-07-24',
            status:'Upcoming'
        },
        {
            id:'346721',
            name:'News Application',
            manager:'Jyotica Sharma',
            deadline:'24-05-23',
            status:'running'
        },
        {
            id:'457783',
            name:'Feeling Detection system',
            manager:'Anushree Das',
            deadline:'08-09-23',
            status:'Upcoming'
        },
        {
            id:'72345',
            name:'ECommerce',
            manager:'Ramesh Singh',
            deadline:'27-10-22',
            status:'completed'
        },
        {
            id:'187345',
            name:'School Management Application',
            manager:'Vishwa',
            deadline:'03-06-23',
            status:'running'
        }
    ]
    return(
        <>
            <div className="container my-5 py-5 text-end h2">
                <div className='row'>
                    <div className='col-6'>
                        <input className='border border-light' type='search'></input>
                        <Link >Filter<i className="fa-solid fa-filter "></i></Link>
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
                            <td>Project Id</td>
                            <td>Project Name</td>
                            <td>Project Manager</td>
                            <td>Project Deadline</td>
                            <td>Status</td>
                            <td>View</td>
                            <td>Update</td>
                        </tr>
                    </thead>
                    
                        {projects.map((element,index)=>(
                            <tbody key={index}>
                            <tr>
                                <td>{index+1}</td>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>{element.manager}</td>
                                <td>{element.deadline}</td>
                                <td>{element.status}</td>
                                <td><Link to='/admin/viewsingle'><i className="fa-solid fa-eye"></i></Link></td>
                                <td><Link to='/admin/updateproject'><i class="fa-solid fa-pen"></i></Link></td>
                            </tr>
                            </tbody>
                        ))}
                    
                </table> 
            </div>
        </>
    )
}