import ReportCard from "./ReportCard";
import ReportTeam from "./ReportTeam";

export default function Report(){
    return(
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <div className="row">
                            <ReportCard num="4" report="Function" percentage="100%"/>
                            <ReportCard num="11" report="Failures" percentage="100%"/>
                            <ReportCard num="11" report="Effects" percentage="100%"/>
                            <ReportCard num="27" report="Causes" percentage="100%"/>
                            <ReportCard num="34" report="Controls" percentage="100%"/>
                            <ReportCard num="12" report="Actions" percentage="33.33%"/>
                            <ReportCard num="7" report="Bugs" percentage="42.9%"/>

                            
                        </div>
                    </div>
                    <div className="col col-lg-6 mt-3">
                        <div className="card text-bg-light mb-3">
                            <div className="card-header">Progress</div>
                            <div className="card-body">
                                <h5>Completed</h5>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '75%'}} ariaValuenow="25" ariaValuemin="0" ariaValuemax="100">
                                    </div>
                                </div>
                                <hr/>  
                                <h5>In Progress</h5>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '54%'}} ariaValuenow="25" ariaValuemin="0" ariaValuemax="100">
                                    </div>
                                </div>
                                <hr/>
                                <h5>Pending</h5>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '29%'}} ariaValuenow="25" ariaValuemin="0" ariaValuemax="100">
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <ReportTeam role='Designer' num='10'/>
                    <ReportTeam role='Development' num='14'/>
                    <ReportTeam role='Testing' num='12'/>
                    <ReportTeam role='Maintenance' num='19'/>

                </div>
            </div>
        </>
    )
}