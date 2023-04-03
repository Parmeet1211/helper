import { useLocation } from "react-router-dom"

export default function ViewSingle(){
    
    const tasks=[
        {
            id:'12345',
            empId:'EmpCog324',
            description:'Task is to implement the Floydd Warshall Algorithm on the network given',
            category:'Web Development',
            deadline:'22-10-22',
            priority:'medium',
            status:'completed'
            
        },
        {
            id:'62345',
            empId:'EmpCog5624',
            description:'Task is to implement the Dijkastras algorithm  on the network given',
            category:'Networking',
            deadline:'13-07-23',
            priority:'high',
            status:'not completed'
        },
        {
            id:'467845',
            empId:'EmpCog8364',
            description:'Implementing  Regression technique',
            category:'Machine Learning',
            deadline:'17-01-23',
            priority:'high',
            status:'completed'
        },
        {
            id:'326889',
            empId:'EmpCog364',
            description:'Implementing statistics on the records',
            category:'Data Analyst',
            deadline:'07-11-22',
            priority:'medium',
            status:'completed'
        },
        {
            id:'548384',
            empId:'EmpCog475',
            description:'Implementing  Regression technique',
            category:'Machine Learning',
            deadline:'17-01-23',
            priority:'high',
            status:'completed'
        },
        {
            id:'467845',
            empId:'EmpCog3456',
            description:'Implement routes in backend',
            category:'Web Development',
            deadline:'27-04-23',
            priority:'high',
            status:'not completed'
        }
    ]
    return(
        <>
            <div className="container text-center my-5 py-5">
                <div className="row">
                    <div className="col-10 text-center my-5 py-5  mx-5 px-5">
                        <div className="card ">
                            <div className="card-header" style={{backgroundColor:'rgba(159,190,255)'}}>
                                <h4 className="font-weight-bolder">Task Id : {tasks[0].id}</h4>
                                <h5>Employee Id : {tasks[0].empId}</h5>
                            </div>
                            <div className="card-body">
                                <h6 className="text-dark"><span className="fw-bold">Description : </span>{tasks[0].description}</h6>
                                
                                <h6 className="text-dark"><span className="fw-bold">Category :</span> {tasks[0].category}</h6>
                                <h6 className="text-dark"><span className="fw-bold">Deadline :</span> {tasks[0].deadline}</h6>
                                <h6 className="text-dark"><span className="fw-bold">Priority :</span> {tasks[0].priority}</h6>
                                <h6 className="text-dark"><span className="fw-bold">Status :</span> {tasks[0].status}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}