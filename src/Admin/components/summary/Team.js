export default function Team(props){
    return(
        <>
            <div className="col-lg-4 col-md-6">
                <div className="card  mb-3" style={{backgroundColor:'#f6f7ff'}} >
                    <div className="card-header">{props.role}</div>
                    <div className="card-body">
                        <h5> No :{props.num}</h5>
                        <h6></h6>
                    </div>
                </div>
            </div>
        </>
    )
}