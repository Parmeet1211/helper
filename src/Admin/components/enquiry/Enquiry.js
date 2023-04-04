import { Link } from "react-router-dom"
export default function Enquiry(){
    const enquiries=[
        {
            no : '3466',
            enqy : 'Need of frontend',
            empId : 'emp56342',
            taskId : 't4245',
            description : 'Need the frontend of the project so that we can check campatibility with backend',
            type : 'Need',
        },
        {
            no : '7566',
            enqy : 'Need of backend',
            empId : 'emp85742',
            taskId : 't7545',
            description : 'Need the frontend of the project so that we can check campatibility with backend',
            type : 'Need',
        },
        {
            no : '5466',
            enqy : 'Need of frontend',
            empId : 'emp097852',
            taskId : 't653',
            description : 'Need the frontend of the project so that we can check campatibility with backend',
            type : 'confirm',
        },
        {
            no : '356378',
            enqy : 'Need of frontend',
            empId : 'emp553548',
            taskId : 't42453',
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
                            <th>Emp ID</th>
                            <th>Task ID</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Reply</th>
                        </tr>
                    </thead>
                    
                        {enquiries.map((element,index)=>(
                            <tbody key={index}>
                            <tr>
                                <td>{index+1}</td>
                                <td>{element.no}</td>
                                <td>{element.enqy}</td>
                                <td>{element.empId}</td>
                                <td>{element.taskId}</td>
                                <td>{element.description}</td>
                                <td>{element.type}</td>
                                <td><Link to='/admin/reply'><i class="fa-solid fa-reply"></i></Link></td>
                            </tr>
                            </tbody>
                        ))}
                    
                </table> 
            </div>
        </>
    )
}