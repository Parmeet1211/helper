import { Link } from "react-router-dom";
export default function Team() {
    const teams = ['Designing', 'Development', 'Testing', 'Maintenance'];
    const projectId = ['234', '232', '657', '343', '325', '098'];
    const empId = ['emp123', 'emp456', 'emp789', 'emp912', 'emp622', 'emp868'];
    const team=[
        {
            name : "ECommerce",
            id : "r54e55",
            designer : 10,
            developer : 12,
            tester : 6,
            maintenance : 11
        },
        {
            name : "ECommerce",
            id : "r54e55",
            designer : 10,
            developer : 12,
            tester : 6,
            maintenance : 11
        },
        {
            name : "ECommerce",
            id : "r54e55",
            designer : 10,
            developer : 12,
            tester : 6,
            maintenance : 11
        },
        {
            name : "ECommerce",
            id : "r54e55",
            designer : 10,
            developer : 12,
            tester : 6,
            maintenance : 11
        },
        {
            name : "ECommerce",
            id : "r54e55",
            designer : 10,
            developer : 12,
            tester : 6,
            maintenance : 11
        },
        {
            name : "ECommerce",
            id : "r54e55",
            designer : 10,
            developer : 12,
            tester : 6,
            maintenance : 11
        },
        {
            name : "ECommerce",
            id : "r54e55",
            designer : 10,
            developer : 12,
            tester : 6,
            maintenance : 11
        }
    ]
    return (
        <>
            <div className="container my-5 py-5">
                <div className="row my-3 text-end">
                    <Link><button className="btn btn-primary">View Teams</button></Link>
                </div>
                <div className="row my-3 py-5">
                    <div className="col">
                        <div className="card my-5 mb-3">
                            <div className="card-body">
                                <form>
                                    <div className="row mt-5">
                                        <div className="form-group col-md-6 ">
                                            <label htmlFor="inputEmail4">Team</label>

                                            <select className=" form-select">
                                                <option selected >Choose</option>
                                                {teams.map((element, index) => (
                                                    <option key={index}>{element}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Project Id</label>
                                            <select className="form-select">
                                                <option selected >Choose</option>
                                                {projectId.map((element, index) => (
                                                    <option key={index}>{element}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group col-md-12 mt-5">
                                            <label htmlFor="inputEmail4" >Employee Id</label>
                                            <select className=" form-select">
                                                <option selected >Choose</option>
                                                {empId.map((element, index) => (
                                                    <option key={index}>{element}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary my-3">Reply</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <h1 className="text-center fw-bolder" style={{ color: 'rgba(159,190,255)' }}>Teams</h1>
                    {team.map((element,index)=>(
                       <div className="col-md-6 col-lg-4  mt-5 pt-5" key={index}>
                        <Link to='details'>
                       <div className="card text-dark">
                           <div className="card-header">
                               <h5>Project Name : {element.name}</h5>
                               <h6>Project Id : {element.id}</h6>
                           </div>
                           <div className="card-body">
                               <div className="row">
                                   <div className="col-sm-6  card mt-2 " style={{backgroundColor: "bisque"}}>
                                       <div className="card-body">
                                           <h6>Designer</h6>
                                           <h5>{element.designer}</h5>
                                       </div>
                                   </div>

                                   <div className="col-sm-6  card  mt-2" style={{backgroundColor:"rgba(159,190,255)"}}>
                                       <div className="card-body">
                                           <h6>Developer</h6>
                                           <h5>{element.developer}</h5>
                                       </div>
                                   </div>
                                   <div className="col-sm-6  card mt-2 " style={{backgroundColor:'rgba(159,190,255)'}}>
                                       <div className="card-body">
                                           <h6>Tester</h6>
                                           <h5>{element.tester}</h5>
                                       </div>
                                   </div>
                                   <div className="col-sm-6  card mt-2 " style={{backgroundColor:'bisque'}}>
                                       <div className="card-body">
                                           <h6>Maintenance</h6>
                                           <h5>{element.maintenance}</h5>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       </Link>
                    </div> 
                    ))}
                </div>
            </div>
        </>
    )
}