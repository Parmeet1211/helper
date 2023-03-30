export default function Progress(props){
    const val=props.amount;
    const color=props.bgcolor;
    return(
        
        <>
            <h5>{props.work}</h5>
            <div className="progress">
                <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width:`${val}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
        </>
    )
}