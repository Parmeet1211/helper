import { useState } from "react"
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import ApiServices from "../../../apiservice/ApiServices";


export default function AddCategory(){
    const [categoryName,setCategoryName]=useState("")
    const [description,setDescription]=useState("")

    const formHandler = (e)=>{
        e.preventDefault()
        let data = {
            category_name : categoryName,
            description :description
        }
        ApiServices.addCategory(data).then(
            x=>{
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
            <div className="container   h2">
                <div className='row'>
                    <div className='col text-center'>
                        <h1>Add Category</h1>
                    </div>
                </div>
            </div>
            <div className="card text-bg-light my-5 mb-3">
                    <div className="card-body">
                    <form onSubmit={formHandler}>
                        
                        <div className="form-group">
                            <label htmlFor="inputAddress">Category</label>
                            <input type='text'  className="form-control" id="inputAddress" placeholder="" value={categoryName} onChange={
                                (e)=>{
                                    setCategoryName(e.target.value)
                                }
                            }/>
                        </div>
                        <div className="form-group mt-3">
                            <label>Description</label>
                            <textarea className="form-control" value={description} onChange={
                                (e)=>{
                                    setDescription(e.target.value)
                                }
                            }></textarea>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Add new Category
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form>  
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}