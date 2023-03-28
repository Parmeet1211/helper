export default function ReportTeam(props){
    return(
        <>
            <div className="col-md-3 my-5">
                <div className="card  mb-3" style={{backgroundColor:'#f6f7ff'}} >
                    <div className="card-header">{props.role}</div>
                    <div className="card-body">
                        <h5>{props.num} projects</h5>
                        <h6>In Hand</h6>
                    </div>
                </div>
            </div>
        </>
    )
}