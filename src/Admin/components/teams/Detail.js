import { Link } from "react-router-dom"
export default function Detail(){
    const designer=[
        {
            empId : 'empId785',
            name :'Raveena Kaushik' 
        },
        {
            empId : 'empId785',
            name :'Raveena Kaushik' 
        },
        {
            empId : 'empId785',
            name :'Raveena Kaushik' 
        },
        {
            empId : 'empId785',
            name :'Raveena Kaushik' 
        },
        {
            empId : 'empId785',
            name :'Raveena Kaushik' 
        }
    ]
    const developer=[
        {
            empId : 'empId785',
            name :'Samriti Mandana' 
        },
        {
            empId : 'empId785',
            name :'Raveena Kaushik' 
        },
        {
            empId : 'empId785',
            name :'Raveena Kaushik' 
        },
        {
            empId : 'empId785',
            name :'Raveena Kaushik' 
        },
        {
            empId : 'empId785',
            name :'Raveena Kaushik' 
        }
    ]
    const tester=[
        {
            empId : 'empId785',
            name :'Rashmika Mandana' 
        },
        {
            empId : 'empId785',
            name :'Raveena Kaushik' 
        },
        {
            empId : 'empId785',
            name :'Raveena Kaushik' 
        },
        {
            empId : 'empId785',
            name :'Raveena Kaushik' 
        },
        {
            empId : 'empId785',
            name :'Raveena Kaushik' 
        }
    ]
    const maintenance=[
        {
            empId : 'empId785',
            name :'Ravi Bishnoi' 
        },
        {
            empId : 'empId785',
            name :'Raveena Kaushik' 
        },
        {
            empId : 'empId785',
            name :'Raveena Kaushik' 
        },
        {
            empId : 'empId785',
            name :'Raveena Kaushik' 
        },
        {
            empId : 'empId785',
            name :'Raveena Kaushik' 
        }
    ]

    return(
        <>
            <div className=" container my-5 py-5">
                <div className="row">
                        <div  className="col text-end">
                        <Link to='/admin/teams'><button className="btn btn-warning">Add</button></Link>
                        </div>
                </div>
                <div className="row">
                    <h1>Project : ECommerce</h1>
                    <h2>Project ID : 76243</h2>
                    <div className="col-md-6 mt-5">
                    <div className="card">
                        <div className="card-header">
                            Designer
                        </div>
                        <div className="card-body">
                            <table className="table table-responsive table-striped table-bordered table-hover ">
                                <thead>
                                    <tr>
                                    <td>Employee ID</td>
                                    <td>Employee Name</td>
                                    <td>Delete</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {designer.map((element,index)=>(
                                        <tr key={index}>
                                        <td>{element.empId}</td>
                                        <td> {element.name}</td>
                                        <td><button className="btn btn-danger">Delete</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-5">
                    <div className="card">
                        <div className="card-header">
                            Developer
                        </div>
                        <div className="card-body">
                            <table className="table table-responsive table-striped table-bordered table-hover ">
                                <thead>
                                    <tr>
                                    <td>Employee ID</td>
                                    <td>Employee Name</td>
                                    <td>Delete</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {developer.map((element,index)=>(
                                        <tr key={index}>
                                        <td>{element.empId}</td>
                                        <td> {element.name}</td>
                                        <td><button className="btn btn-danger">Delete</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-5">
                    <div className="card">
                        <div className="card-header">
                            Tester
                        </div>
                        <div className="card-body">
                            <table className="table table-responsive table-striped table-bordered table-hover ">
                                <thead>
                                    <tr>
                                    <td>Employee ID</td>
                                    <td>Employee Name</td>
                                    <td>Delete</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tester.map((element,index)=>(
                                        <tr key={index}>
                                        <td>{element.empId}</td>
                                        <td> {element.name}</td>
                                        <td><button className="btn btn-danger">Delete</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-5">
                    <div className="card">
                        <div className="card-header">
                            Maintenance
                        </div>
                        <div className="card-body">
                            <table className="table table-responsive table-striped table-bordered table-hover ">
                                <thead>
                                    <tr>
                                    <td>Employee ID</td>
                                    <td>Employee Name</td>
                                    <td>Delete</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {maintenance.map((element,index)=>(
                                        <tr key={index}>
                                        <td>{element.empId}</td>
                                        <td> {element.name}</td>
                                        <td><button className="btn btn-danger">Delete</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}