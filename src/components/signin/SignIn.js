import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Apiservices from "../../apiservice/ApiServices"

export default function SignIn(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const formHandler = (e) =>{
        e.preventDefault()

        let data = { 
            email : email,
            password : password
        }
        console.log(data)
        Apiservices.signIn(data).then(
            x =>{
                console.log(x)
                if(x.data.success){
                    toast.success(x.data.msg)
                    // console.log(x.data.msg)
                    sessionStorage.setItem("token",x.data.token)
                    sessionStorage.setItem("_id",x.data._id)
                    if(x.data.userType == 1)
                    {
                        setTimeout(
                        ()=>{
                            navigate('/admin')
                        },3000
                        )
                    }
                    else if(x.data.userType == 2){
                        setTimeout(
                            ()=>{
                                navigate('/user')
                            },3000
                        )
                    }
                    else{
                        toast.error('Not valid user')
                    }
                }
                else{
                    toast.error(x.data.msg)
                }
            }
        )
    }
    return(
        <>
            <section className="mt-5">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{borderRadius: "25px"}}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>

                                            <form className="mx-1 mx-md-4" onSubmit={formHandler}>

                                                {/* <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                    </div>
                                                </div> */}

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control" value={email} onChange={
                                                            (e)=>{
                                                                setEmail(e.target.value)
                                                            }
                                                        }/>
                                                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4c" className="form-control" value={password} onChange={
                                                        (e)=>{
                                                            setPassword(e.target.value)
                                                        }
                                                    } />
                                                    <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg">Sign In</button>
                                                    {/* <Link to='/user'>
                                                    <button type="button" className="btn ms-2 btn-primary btn-lg">Sign In User</button>
                                                    </Link> */}
                                                </div>

                                            </form>
                                            
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="assets/img/hero.png"
                                            className="img-fluid" alt="Sample image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer/>
        </>
    )
}