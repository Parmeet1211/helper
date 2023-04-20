export default function Team(props){
    return(
        <>
            <div className="col-lg-4 col-md-6">
                <div className="card  mb-3"  >
                    <div className="card-header " style={{backgroundColor:'rgba(159,190,255)'}}><h5>{props.role}</h5></div>
                    <div className="card-body">
                        <h5> No :{props.num}</h5>
                        <h6></h6>
                    </div>
                </div>
            </div>
        </>
    )
}