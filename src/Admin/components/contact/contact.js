import { Link } from "react-router-dom"
export default function ContactView(){
    const enquiries=[
        {
            no : '3466',
            enqy : 'Need of frontend',
            empName : 'emp56342',
            email : 'abc@gmail.com',
            description : 'Need the frontend of the project so that we can check campatibility with backend',
            type : 'Need',
        },
        {
            no : '7566',
            enqy : 'Need of backend',
            empName : 'emp85742',
            email : 'abc@gmail.com',
            description : 'Need the frontend of the project so that we can check campatibility with backend',
            type : 'Need',
        },
        {
            no : '5466',
            enqy : 'Need of frontend',
            empName : 'emp097852',
            email : 'abc@gmail.com',
            description : 'Need the frontend of the project so that we can check campatibility with backend',
            type : 'confirm',
        },
        {
            no : '356378',
            enqy : 'Need of frontend',
            empName : 'emp553548',
            email : 'abc@gmail.com',
            description : 'Need the frontend of the project so that we can check campatibility with backend',
            type : 'confirm',
        }
    ]
    return(
        <>
            <div className="container my-5 py-5 text-center ">
                <h1>Enquiries from visitors</h1>
            </div>
            
            <div className="container table-responsive">
               <table className="table table-hover ">
                    <thead className='text-primary'>
                        <tr>
                            <th>Sr No</th>
                            <th>Enquiry </th>
                            <th> Name</th>
                            <th>Email</th>
                            <th>Description</th>    
                        </tr>
                    </thead>
                    
                        {enquiries.map((element,index)=>(
                            <tbody key={index}>
                            <tr>
                                <td>{index+1}</td>
                                <td>{element.enqy}</td>
                                <td>{element.empName}</td>
                                <td>{element.email}</td>
                                <td>{element.description}</td>   
                            </tr>
                            </tbody>
                        ))}
                    
                </table> 
            </div>
        </>
    )
}