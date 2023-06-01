import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiServices from "../../../apiservice/ApiServices";

export default function Board(){
    const [doing,setDoing] = useState([{}])
    const [todo,setTodo] = useState([{}])
    const [done,setDone] = useState([{}])
    const navigate = useNavigate()

    useEffect(
        ()=>{
            if(sessionStorage.getItem("token") == null){
                navigate('/')
            }
            ApiServices.getnewtasks({}).then(
                (x) => {
                // console.log(x)
                setTodo(x.data.data)
            })
            ApiServices.getrunningtasks({}).then(
                x=>{
                    // console.log(x)
                    setDoing(x.data.data)
                }
            )
            ApiServices.getcompletetasks({}).then(
                x=>{
                    // console.log(x)
                    setDone(x.data.data)
                }
            )
        },[1]
    )
    
    
    return(
        <>
            <div className='container my-5 py-5'>
                <div className="row my-3 text-center">
                    <h1>Kanban Board</h1>
                </div>
                <div className="row my-5">
                    <div className="col-md-4">
                        <div className="card  mb-3" style={{backgroundColor:'rgba(159,190,255)'}} >
                            <div className="card-header h1">To Do</div>
                            <div className="card-body h5">Progress = 0%</div>
                        </div>
                        <div className="row">
                            {todo.map((element,index)=>(
                                
                                <div className="col-md-11 " key={index}>
                                <div className="card  mb-3 bg-light text-dark" >
                                    <div className="card-header  bg-light">
                                        <h5>{element.taskname}</h5>
                                        <hr/>
                                        <h5>Assigned to : {element.employeeId?.employee_name}</h5>
                                        <h6>Priority : {element?.priority == 1 ? 'High': element?.priority == 2 ? 'Medium' : 'Low'}</h6>
                                    </div>
                                    <div className="card-body">
                                        <h4>{element.projectId?.project_name}</h4>
                                      <p>{element.description}</p> 
                                      <h5>{element.deadline}</h5> 
                                    </div>
                                </div>
                                </div>
                                
                            ))}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-3 " style={{backgroundColor : 'rgba(159,190,255)'}} >
                                <div className="card-header h1">Doing</div>
                                <div className="card-body h5">Progress = 1% to 99%</div>
                        </div>
                        <div className="row">
                        {doing.map((element,index)=>(
                                
                                <div className="col-md-11 " key={index}>
                                <div className="card  mb-3 bg-light text-dark" >
                                    <div className="card-header  bg-light">
                                        <h5>{element.taskname}</h5>
                                        <hr/>
                                        <h5>Assigned to : {element.employeeId?.employee_name}</h5>
                                        <h6>Priority : {element?.priority == 1 ? 'High': element?.priority == 2 ? 'Medium' : 'Low'}</h6>
                                    </div>
                                    <div className="card-body">
                                        <h4>{element.projectId?.project_name}</h4>
                                      <p>{element.description}</p> 
                                      <h5>{element.deadline}</h5> 
                                    </div>
                                </div>
                                </div>
                                
                            ))}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card  mb-3 " style={{backgroundColor:'rgba(159,190,255)'}}>
                            <div className="card-header h1">Done</div>
                            <div className="card-body h5">Progress = 100%</div>
                        </div>
                        <div className="row">
                        {done?.map((element,index)=>(
                                
                                <div className="col-md-11 " key={index}>
                                <div className="card  mb-3 bg-light text-dark" >
                                    <div className="card-header  bg-light">
                                        <h5>{element.taskname}</h5>
                                        <hr/>
                                        <h5>Assigned to : {element.employeeId?.employee_name}</h5>
                                        <h6>Priority : {element?.priority == 1 ? 'High': element?.priority == 2 ? 'Medium' : 'Low'}</h6>
                                    </div>
                                    <div className="card-body">
                                        <h4>{element.projectId?.project_name}</h4>
                                      <p>{element.description}</p> 
                                      <h5>{element.deadline}</h5> 
                                    </div>
                                </div>
                                </div>
                                
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}