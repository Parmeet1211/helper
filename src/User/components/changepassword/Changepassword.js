import React from "react";
import { useState } from "react";

export default  function Changepassword(){ 
    const [oldpassword , setOldpassword] = useState("")
    const [newpassword , setNewpassword] = useState("")
    const [confirmpassword , setConfirmpassword] = useState("")

    return(
        <>
            <div className="container mt-5 pt-5">
            <div className="row my-5 py-5">
                    <div className="col">
                        <div className="card">
                            <form className="m-3">
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputEmail4">Old Password</label>
                                        <input type="text" className="form-control" value={oldpassword} onChange={
                                            (e)=>{
                                                setOldpassword(e.target.value)
                                            }
                                        } />
                                    </div>
                                    
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">New Password</label>
                                        <input type="text" className="form-control" value={newpassword} onChange={
                                            (e)=>{
                                                setNewpassword(e.target.value)
                                            }
                                        } />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Confirm Password</label>
                                        <input type="text" className="form-control" value={confirmpassword} onChange={
                                            (e)=>{
                                                setConfirmpassword(e.target.value)
                                            }
                                        } />
                                    </div>
                                </div>
                        
                                <button type="submit" className="btn btn-primary mt-4 ">Change</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 