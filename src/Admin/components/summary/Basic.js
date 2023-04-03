import { Link } from "react-router-dom";

export default function Basic(props){
    return(
        <>
        
            <div className="col col-lg-3 col-md-6 mt-3">
                <div className="card mb-3" style={{backgroundColor:'rgba(159,190,255)'}}>
                    <div className="card-body text-center text-dark">
                        <h4 className="text-dark">{props.part}</h4>
                        <h5>{props.count}</h5>
                    </div>
                </div>
            </div>
            
        </>
    )
}