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
        }
    ]
    return(
        <>
            <div className="container mt-5 pt-5">
                <div className="row">
                    
                </div>
                <div className="row">
                    {task.map((element,index)=>(
                        <div className="col-12 col-lg-6 my-3" key={index}>
                        <div className="card">
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
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}