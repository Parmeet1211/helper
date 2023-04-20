import {Link} from 'react-router-dom'
export default function ViewCategory(){
    const Category=[
        {
            name : 'Web Development',
            description : 'It is fullstack development'
        },
        {
            name : 'Java',
            description : 'It is fullstack development'
        },
        {
            name : 'Networking',
            description : 'It is fullstack development'
        },
        {
            name : 'Machine Learning',
            description : 'It is fullstack development'
        },
        {
            name : 'Python',
            description : 'It is fullstack development'
        },
        {
            name : 'Android Development',
            description : 'It is fullstack development'
        }

    ]
    return(
        <>
            <div className="container my-5 py-5 text-end h2">
                <div className='row'>
                    <div className='col-6'>
                        <input className='border border-light' type='search'></input>
                        <Link >Filter<i className="fa-solid fa-filter "></i></Link>
                    </div>
                </div>
            </div>
            
            <div className="container table-responsive">
               <table className="table table-hover ">
                    <thead className='text-primary'>
                        <tr>
                            <td>Sr No</td>
                            <td>Category</td>
                            <td>Description</td>
                            <td>Update</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    
                        {Category.map((element,index)=>(
                            <tbody key={index}>
                            <tr>
                                <td>{index+1}</td>
                                <td>{element.name}</td>
                                <td>{element.description}</td>
                                <td><Link to='/admin/updatecategory'><i class="fa-solid fa-pen"></i></Link></td>
                                <td><button className='btn btn-danger'>Delete</button></td>
                            </tr>
                            </tbody>
                        ))}
                    
                </table> 
            </div>
        </>
    )
}