import { Link } from "react-router-dom"

export default function EmployeeTask(){
    const task=[
        {
            taskId :'2345',
            projectId : '976',
            priority : 'Medium',
            description : 'this is the admin side task',
            lastDate : '16-July-2023'
        },
        {
            taskId :'366',
            projectId : '4787',
            priority : 'High',
            description : 'Connecting the backend of ecommerce with frontend',
            lastDate : '12-April-2023'
        },
        {
            taskId :'366',
            projectId : '4787',
            priority : 'High',
            description : 'Connecting the backend of ecommerce with frontend',
            lastDate : '12-April-2023'
        },
        {
            taskId :'366',
            projectId : '4787',
            priority : 'High',
            description : 'Connecting the backend of ecommerce with frontend',
            lastDate : '12-April-2023'
        },
        {
            taskId :'366',
            projectId : '4787',
            priority : 'High',
            description : 'Connecting the backend of ecommerce with frontend',
            lastDate : '12-April-2023'
        },
        {
            taskId :'366',
            projectId : '4787',
            priority : 'High',
            description : 'Connecting the backend of ecommerce with frontend',
            lastDate : '12-April-2023'
        }
    ]
    return(
        <>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-9">
                        <input className='border border-dark' type='search'></input>
                        <button className="btn btn-primary w-25 ms-2">Filter<i className="fa-solid fa-filter "></i></button>
                    </div>
                    <div className="col-3 text-end">
                        <Link to='/user/history'><button className="btn btn-warning">History</button></Link>
                    </div>
                </div>    

                <div className="row">
                    {task.map((element,index)=>(
                        <div className="col-12 col-lg-6 my-3" key={index}>
                        <Link to='/user/taskdetail'>
                        <div className="card text-dark" style={{overflow:'hidden'}}>
                            <div className="card-header">
                                <h5>Task id : {element.taskId}</h5>
                                <h6>Project id : {element.projectId}</h6>
                                <h6>Priority : {element.priority}</h6>
                            </div>
                            <div className="card-body">
                                <p>Description : {element.description}</p>
                                <h5>Last Date : {element.lastDate} </h5>
                            </div>
                        </div>
                        </Link>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}