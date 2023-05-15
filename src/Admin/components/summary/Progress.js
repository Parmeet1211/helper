export default function Progress(props){
    
    return(
        
        <>
            <div className="col-md-6">
                <div className="card my-5" style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',backgroundColor:'rgba(159,190,255)'}}>
                    <div className="card-body text-center">
                        <h3>{props.status} Tasks</h3>
                        <h2>{props.num}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}