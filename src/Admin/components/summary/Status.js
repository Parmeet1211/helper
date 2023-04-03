export default function Status(props){
    return(
        <>
            <div className="col-lg-3 col-6 py-5  text-center">
                <div className="text-center py-5" style={{height:'160px',width:'160px',backgroundColor:'rgba(255,198,201)',borderRadius:'50%'}}>
                    <h4>{props.workload}</h4>
                    <h4>{props.team}</h4>
                </div>
            </div>
        </>
    )
}