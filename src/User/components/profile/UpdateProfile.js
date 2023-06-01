import { useEffect } from "react"
import { useState } from "react"
import ApiServices from "../../../apiservice/ApiServices"
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router-dom";

export default function UpdateProfile(){ 
    
    const [image,setImage]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")
    const [employee,setEmployee] = useState([{}])
    const navigate = useNavigate()


    useEffect(
        ()=>{
            if(sessionStorage.getItem("token") == null){
                navigate('/')
            }
            ApiServices.singleEmployee({_id : sessionStorage.getItem("empId")}).then(
                x=>{
                    // console.log(x)
                    setPhone(x.data.data.contact)
                    setAddress(x.data.data.address)
                    // setImage(x.data.data.image)
                }
            )
        },[1]
    )

    const formHandle = (e) =>{
        e.preventDefault()
        let data = new FormData()
        data.append("_id",sessionStorage.getItem("empId"))
        data.append("contact",phone)
        data.append("address",address)
        data.append("image",image)
        ApiServices.updateProfile(data).then(
            x=>{
                console.log(x)
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
            <div className="container my-5 py-5">
                <div className="row my-3 text-center">
                    <h1>Update Profile</h1>
                </div>
                <div className="row my-5 py-5">
                    <div className="col">
                        <div className="card">
                            <form className="m-3" onSubmit={formHandle}>
                                <div className="row">
                                    
                                    <div className="form-group col">
                                        <label htmlFor="inputPassword4">Phone No</label>
                                        <input type="text" className="form-control" id="inputPassword4" value={phone}
                                        onChange={(e)=>{setPhone(e.target.value)}}/>
                                    </div>
                                </div>
                        
                        <div className="row">
                            
                            <div className="form-group col-md-12">
                                <label htmlFor="inputCity">Address</label>
                                <input type="text" className="form-control" id="inputCity" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="form-group col-md-12">
                                <label htmlFor="inputCity">Image</label>
                                <input type='file' className="form-control"  onChange={(e)=>{setImage(e.target.files[0])}}/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mt-4 ">Update</button>
                    </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}