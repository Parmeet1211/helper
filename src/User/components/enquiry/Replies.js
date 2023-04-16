import { Link } from "react-router-dom"

export default function Replies(){
    const reply=[
        {
            enqNo : 'E2568',
            taskId : 't647',
            type : 'Function Test',
            description :'The function were tested successfully by you.You can further pass your project to beta-testing team .'
        },
        {
            enqNo : 'E9876',
            taskId : 't367',
            type : 'Function failure',
            description :'The function were tested successfully by you.You can further pass your project to beta-testing team .'
        },
        {
            enqNo : 'E6587',
            taskId : 't7456',
            type : 'Changes(effect)',
            description :'The function were tested successfully by you.You can further pass your project to beta-testing team .'
        },
        {
            enqNo : 'E9675',
            taskId : 't775',
            type : 'Controls',
            description :'The function were tested successfully by you.You can further pass your project to beta-testing team .'
        },
        {
            enqNo : 'E2568',
            taskId : 't647',
            type : 'Function Test',
            description :'The function were tested successfully by you.You can further pass your project to beta-testing team .'
        },
        {
            enqNo : 'E2568',
            taskId : 't647',
            type : 'Function Test',
            description :'The function were tested successfully by you.You can further pass your project to beta-testing team .'
        },
        {
            enqNo : 'E7575',
            taskId : 't0966',
            type : 'Function Test',
            description :'The function were tested successfully by you.You can further pass your project to beta-testing team .'
        },

    ]
    return(
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col">
                        <Link to='/user/enquiry'><button className="btn btn-warning">
                            Back
                        </button>
                        </Link>
                    </div>

                </div>
                <div className="row">
                    {reply.map((element,index)=>(
                        <div className="col-12 mt-4" key={index}>
                        <div className="card">
                            <div className="card-header">
                                <h5>Enquiry No : {element.enqNo}</h5>
                                {/* <h5>Task Id : {element.taskId}</h5> */}
                                {/* <h3>Type : {element.type}</h3> */}
                            </div>
                            <div className="card-body">
                                <p>
                                    {element.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}