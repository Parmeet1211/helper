import { useState } from "react"

export default function UpdateEmployee(){
    const [empid,setEmpId]=useState("emp123")
    const [empName,setEmpName]=useState("Ram")
    const [empRole,setEmpRole]=useState("Developer")
    const [empEmail,setEmpEmail]=useState("ram123@gmail.com")
    const [empPassword,setEmpPassword]=useState("emp123")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")
    const [image,setImage]=useState("")
    return(
        <>
        <div className="container my-5 py-5">
            <div className="card text-bg-light my-5 py-5 mb-3">
                    <div className="card-body">
                    <form>
                        
                        <div className="form-group">
                            <label htmlFor="inputAddress">Employee Id</label>
                            <input type='text'  className="form-control" id="inputAddress" value={empid} onChange={
                                (e)=>{
                                    setEmpId(e.target.value)
                                }
                            }/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Employee Name</label>
                            <input type='text'  className="form-control" id="inputAddress" value={empName} onChange={
                                (e)=>{
                                    setEmpName(e.target.value)
                                }
                            }/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Employee Role</label>
                            <input type='text'  className="form-control" id="inputAddress" value={empRole} onChange={
                                (e)=>{
                                    setEmpRole(e.target.value)
                                }
                            }/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Employee Email</label>
                            <input type='email'  className="form-control" id="inputAddress" placeholder="" value={empEmail} onChange={
                                (e)=>{
                                    setEmpEmail(e.target.value)
                                }
                            }/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Employee Password</label>
                            <input type='text'  className="form-control" id="inputAddress" placeholder="" value={empPassword} onChange={
                                (e)=>{
                                    setEmpPassword(e.target.value)
                                }
                            }/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Contact No</label>
                            <input type='file'  className="form-control" id="inputAddress" placeholder="" value={phone} onChange={
                                (e)=>{
                                    setPhone(e.target.value)
                                }
                            }/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input type='text'  className="form-control" id="inputAddress" placeholder="" value={address} onChange={
                                (e)=>{
                                    setAddress(e.target.value)
                                }
                            }/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Image</label>
                            <input type='file'  className="form-control" id="inputAddress" placeholder="" value={image} onChange={
                                (e)=>{
                                    setImage(e.target.value)
                                }
                            }/>
                        </div>
                        
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Update
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>  
                    </div>
                </div>
                </div>
        </>
    )
}