import { Link } from "react-router-dom";
export default function Team() {
    const teams = ['Designing', 'Development', 'Testing', 'Maintenance'];
    const projectId = ['ECommerce', 'System Detection', 'AI for image', 'Networks', 'Food Delivary', 'School Management'];
    const empId = ['Radha', 'Shaym', 'Manohar', 'Rameshwari', 'Nishan', 'Aryan'];
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
                    <Link to='/admin/teamview'><button className="btn btn-primary">View Teams</button></Link>
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
                                            <label htmlFor="inputEmail4">Project name</label>
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

                                    <button type="submit" className="btn btn-primary my-3">Create</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}