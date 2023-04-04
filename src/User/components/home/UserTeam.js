export default function UserTeam(){
    const team=[
        {
            name: 'Shreya Verma',
            id: 'emp564',
            projectName : 'IDS System',
            projectId : '963'
        },
        {
            name: 'Priya Kukreja',
            id: 'emp964',
            projectName : 'School Mangement System',
            projectId : '963'
        },
        {
            name: 'Vishal Bhardwaj',
            id: 'emp345',
            projectName : 'IDS System',
            projectId : '754'
        },
        {
            name: 'Mohit Goyat',
            id: 'emp347',
            projectName : 'Ecommerce',
            projectId : '653'
        },
    ]
    return(
        <>

            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-9">
                            <input className='border border-dark' type='search'></input>
                            <button className="btn btn-primary w-25 ms-2">Filter<i className="fa-solid fa-filter "></i></button>
                    </div>
                </div>
                <div className="row">
                    {team.map((element,index)=>(
                        <div className="col-12" key={index}>
                        <div className="card bg-white my-3">
                            <div className="card-header" style={{backgroundColor:'bisque'}}>
                                <h5>Employee Name : {element.name} </h5>
                                <h5>Employee Id : {element.id} </h5>
                            </div>
                            <div className="card-body">
                                <h5>Project Name: {element.projectName}</h5>
                                <h5>Project Id : {element.projectId}</h5>
                            </div>
                            
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}