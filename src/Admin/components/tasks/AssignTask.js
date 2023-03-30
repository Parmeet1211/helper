export default function AssignTask(){
    const taskId=['t24612','t585760','t34345','t95778','t967673','t78959'];
    const empId=['emp4565','emp67893','emp7893','emp87580','emp90658','emp36924']
    return(
        <>
            <div className="container my-5 py-5">
                <div className="card text-bg-light my-5 mb-3">
                    <div className="card-body">
                    <form>
                        <div className="row my-2">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputState">Task Id</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose</option>
                                    {taskId.map((element)=>(
                                        <option>{element}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                            <label htmlFor="inputState">Emp Id</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose</option>
                                    {empId.map((element)=>(
                                        <option>{element}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        
                        <button type="submit" className="btn btn-primary mt-5">Create</button>
                    </form>  
                    </div>
                </div>
            </div>
        </>
    )
}