import {Link} from 'react-router-dom';
export default function TaskView(){
    const tasks=[
        {
            id:'12345',
            empId:'EmpCog324',
            description:'Task is to implement the Floydd Warshall Algorithm on the network given',
            category:'Web Development',
            deadline:'22-10-22',
            priority:'medium',
            progress: '40'
            
        },
        {
            id:'62345',
            empId:'EmpCog5624',
            description:'Task is to implement the Dijkastras algorithm  on the network given',
            category:'Networking',
            deadline:'13-07-23',
            priority:'high',
            progress: '60'
        },
        {
            id:'467845',
            empId:'EmpCog8364',
            description:'Implementing  Regression technique',
            category:'Machine Learning',
            deadline:'17-01-23',
            priority:'high',
            progress: '50'
        },
        {
            id:'326889',
            empId:'EmpCog364',
            description:'Implementing statistics on the records',
            category:'Data Analyst',
            deadline:'07-11-22',
            priority:'medium',
            progress: '70'
        },
        {
            id:'548384',
            empId:'EmpCog475',
            description:'Implementing  Regression technique',
            category:'Machine Learning',
            deadline:'17-01-23',
            priority:'high',
            progress: '60'
        },
        {
            id:'467845',
            empId:'EmpCog3456',
            description:'Implement routes in backend',
            category:'Web Development',
            deadline:'27-04-23',
            priority:'high',
            progress: '40'
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
                            <td>Task Id</td>
                            <td>Assigned to</td>
                            <td>Description</td>
                            <td>Category</td>
                            <td>Deadline</td>
                            <td>Priority</td>
                            <td>progress</td>
                            <td>View</td>
                            <td>Update</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    
                        {tasks.map((element,index)=>(
                            <tbody key={index}>
                            <tr>
                                <td>{index+1}</td>
                                <td>{element.id}</td>
                                <td>{element.empId}</td>
                                <td>{element.description}</td>
                                <td>{element.category}</td>
                                <td>{element.deadline}</td>
                                <td>{element.priority}</td>
                                <td>{element.progress} %</td>
                                <td><Link to='/admin/singletask'><i className="fa-solid fa-eye"></i></Link></td>
                                <td><Link to='/admin/updatetask'><i className="fa-solid fa-pen"></i></Link></td>
                                <td><button className='btn btn-danger'>Delete</button></td>
                            </tr>
                            </tbody>
                        ))}
                    
                </table> 
            </div>
            
        </>
    )
}