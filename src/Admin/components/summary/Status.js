export default function Status(props){
    return(
        <>
            <div className="col-lg-3 col-6 py-5  text-center">
                <div className="text-center py-5" style={{height:'160px',width:'160px',boxShadow:'0 4px 8px 0 rgba(159, 190, 255, 0.2), 0 6px 20px 0 rgba(159, 190, 255, 0.19)',borderRadius:'50%',backgroundColor:'rgba(159,190,255)'}}>
                    <h4>{props.workload}</h4>
                    <h4>{props.team}</h4>
                </div>
            </div>
        </>
    )
}