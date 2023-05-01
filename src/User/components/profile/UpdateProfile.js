import { useState } from "react"

export default function UpdateProfile(){ 
    
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")
    return(
        <>
            <div className="container my-5 py-5">
                <div className="row my-5 py-5">
                    <div className="col">
                        <div className="card">
                            <form className="m-3">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Name</label>
                                        <input type="text" className="form-control" value={name} onChange={
                                            (e)=>{
                                                setName(e.target.value)
                                            }
                                        } />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Phone No</label>
                                        <input type="text" className="form-control" id="inputPassword4" value='9876543210'/>
                                    </div>
                                </div>
                        
                        <div className="row">
                            
                            <div className="form-group col-md-12">
                                <label htmlFor="inputCity">Address</label>
                                <input type="text" className="form-control" id="inputCity" value='H No 234 Bandra west,Mumbai,Maharastra,25478'/>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="form-group col-md-12">
                                <label htmlFor="inputCity">Image</label>
                                <input type='file' className="form-control"/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mt-4 ">Update</button>
                    </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}