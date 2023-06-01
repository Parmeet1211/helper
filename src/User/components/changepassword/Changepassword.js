import React, { useEffect } from "react";
import { useState } from "react";
import ApiServices from "../../../apiservice/ApiServices";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router-dom";

export default  function Changepassword(){ 
    const [oldpassword , setOldpassword] = useState("")
    const [newpassword , setNewpassword] = useState("")
    const [confirmpassword , setConfirmpassword] = useState("")
    const navigate = useNavigate()

    useEffect(
        ()=>{
            if(sessionStorage.getItem("token") == null){
                navigate('/')
            }
        },[1]
    )

    const changePassword = (e) =>{
        e.preventDefault()
        let data={
            userId : sessionStorage.getItem("_id"),
            oldpassword : oldpassword,
            newpassword : newpassword,
            confirmpassword : confirmpassword
        }
        // console.log(data)
        ApiServices.changePassword(data).then(
            x=>{
                // console.log(x)
                if(x.data.success){
                    toast.success(x.data.msg)
                }
                else{
                    toast.error(x.data.msg)
                }
            }
        )
    }

    return(
        <>
            <div className="container mt-5 pt-5">
            <div className="row my-3 text-center">
                    <h1>Change Password</h1>
            </div>
            <div className="row my-5 py-5">
                    <div className="col">
                        <div className="card">
                            <form className="m-3" onSubmit={changePassword}>
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
            <ToastContainer/>
        </>
    )
} 