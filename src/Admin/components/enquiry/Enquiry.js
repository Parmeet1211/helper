import { Link } from "react-router-dom"
export default function Enquiry(){
    const enquiries=[
        {
            no : '3466',
            enqy : 'Need of frontend',
            empName : 'emp56342',
            email : 'abc@gmail.com',
            description : 'Need the frontend of the project so that we can check campatibility with backend',
            type : 'Need',
        },
        {
            no : '7566',
            enqy : 'Need of backend',
            empName : 'emp85742',
            email : 'abc@gmail.com',
            description : 'Need the frontend of the project so that we can check campatibility with backend',
            type : 'Need',
        },
        {
            no : '5466',
            enqy : 'Need of frontend',
            empName : 'emp097852',
            email : 'abc@gmail.com',
            description : 'Need the frontend of the project so that we can check campatibility with backend',
            type : 'confirm',
        },
        {
            no : '356378',
            enqy : 'Need of frontend',
            empName : 'emp553548',
            email : 'abc@gmail.com',
            description : 'Need the frontend of the project so that we can check campatibility with backend',
            type : 'confirm',
        }
    ]
    return(
        <>
            <div className="container my-5 py-5 text-end h2">
                <input className='border border-light' type='search'></input>
                <Link >Filter<i className="fa-solid fa-filter "></i></Link>
                
            </div>
            
            <div className="container table-responsive">
               <table className="table table-hover ">
                    <thead className='text-primary'>
                        <tr>
                            <th>Sr No</th>
                            <th>Enq No</th>
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
                                <td>{element.no}</td>
                                <td>{element.enqy}</td>
                                <td>{element.empName}</td>
                                <td>{element.email}</td>
                                <td>{element.description}</td>
                               
                                <td><Link to='/admin/reply'><i class="fa-solid fa-reply"></i></Link></td>
                            </tr>
                            </tbody>
                        ))}
                    
                </table> 
            </div>
        </>
    )
}