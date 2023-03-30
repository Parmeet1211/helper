import Basic from "./Basic"
import Progress from "./Progress"
import Team from "./Team"
export default function Summary(){
    return(
        <>
            <div className="container my-5 p-5">
                <div className="row">
                    <Team role="Manager" num="10"/>
                    <Team role="Developer" num="12"/>
                    <Team role="Quality Assurance Engg" num="08"/>   
                </div>
                <div className="row">
                   <div className="col col-lg-6 mt-3">
                   <div className="card text-bg-white mb-3">
                            <div className="card-header">Progress</div>
                            <div className="card-body">
                                <h5>Completed</h5>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                                <hr/>  
                                <h5>In Progress</h5>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '54%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                                <hr/>
                                <h5>Pending</h5>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '29%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                   </div> 
                   <div className="col col-lg-6 mt-3">
                   <div className="card text-bg-white mb-3">
                            <div className="card-header">Priority</div>
                            <div className="card-body">
                                <h5>High</h5>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '35%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                                <hr/>  
                                <h5>Medium</h5>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped bg-secondary" role="progressbar" style={{width: '64%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                                   
                            </div>
                        </div>
                   </div>
                </div>    
                <div className="row">
                    <Basic part='Total Employees' count='142'/>
                    <Basic part='Total Projects' count='50'/>
                    <Basic part='Total Tasks' count='265'/>
                    <Basic part='Monthly Progress' count='64%'/>


                </div>
            </div>
        </>
    )
}