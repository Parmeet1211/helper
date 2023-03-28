export default function ReportCard(props){
    return(
        <>
            <div className="col-sm-4 col-4">
                <h1 className="font-weight-bolder">{props.num}</h1>
                <h5>{props.report}</h5>
                <h6 className="text-success">{props.percentage} Analyzed</h6>
            </div>
        </>
    )
}