export default function TaskDetail(){
    const task=[
        
        {
            taskId :'2345',
            projectId : '976',
            priority : 'Medium',
            description : 'this is the admin side task',
            lastDate : '16-July-2023',
            category : 'Machine Learning',
            status : 'Not Completed',
            team : 'Development'
        }
        
    ]
    return(
        <>
            <div className="container my-5 py-5">
                <div className="row my-5 py-5">
                    <div className="col">
                        {task.map((element,index)=>(
                            <div className= "card">
                                <div className="card-header">
                                    <h5>Project Id :{element.projectId}</h5>
                                    <h5>Task Id : {element.taskId} </h5>
                                </div>
                                <div className="card-body">
                                    <h6>Priority : {element.priority}</h6>
                                    <h6>Category : {element.category}</h6>
                                    <h6>Team : {element.team}</h6>
                                    <h6>Status : {element.status}</h6>
                                    <h6>Description : {element.description}</h6>
                                    <h5>Last Date : {element.lastDate}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}