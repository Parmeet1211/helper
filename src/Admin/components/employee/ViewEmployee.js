import {Link} from 'react-router-dom';
export default function ViewEmployee(){
    const projects=[
        {
            id:'12345',
            name:'Shaym',
            role:'ProjectLeader'
        },
        {
            id:'12342',
            name:'Radha',
            role:'Developer'
        },
        {
            id:'62345',
            name:'Sukhpreet',
            role:'Designer'
        },
        {
            id:'346721',
            name:'Raman Kumar ',
            role:'ProjectLeader'
        },
        {
            id:'457783',
            name:'Dhruv Sharma',
            role:'Developer'
        },
        {
            id:'72345',
            name:'Ramesh',
            role:'ProjectLeader'
        },
        {
            id:'187345',
            name:'Shardha Thakur',
            role:'Technical Lead'
        }
    ]
    return(
        <>
            <div className="container my-5 py-5 text-end h2">
                <input className='border border-light' type='search'></input>
                <Link >Filter<i className="fa-solid fa-filter "></i></Link>
                
            </div>
            
            <div className="container table-responsive">
               <table className="table table-striped table-hover table-primary">
                    <thead>
                        <tr>
                            <td>Sr No</td>
                            <td>Employee Id</td>
                            <td>Employee Name</td>
                            <td>Role</td>
                            
                        </tr>
                    </thead>
                    
                        {projects.map((element,index)=>(
                            <tbody key={index}>
                            <tr>
                                <td>{index+1}</td>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>{element.role}</td>
                                

                            </tr>
                            </tbody>
                        ))}
                    
                </table> 
            </div>
        </>
    )
}