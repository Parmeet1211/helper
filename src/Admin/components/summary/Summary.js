import { useEffect, useState } from "react"

import { Link } from "react-router-dom"
import Basic from "./Basic"
import Progress from "./Progress"
import Status from "./Status"
import Team from "./Team"
import Priority from "./Priority"
import ApiServices from "../../../apiservice/ApiServices"
export default function Summary(){
    const [category , setCategory] = useState()
    const [employee,setEmployee] = useState()
    const [ project,setProject] = useState()
    const [task , setTask] = useState()
    const [developer , setDeveloper] = useState()
    const [highpriority , setHighpriority] = useState()
    const [mediumpriority , setMediumpriority] = useState()
    const [designer , setDesigner] = useState()
    const [tester , setTester] = useState()
    const [maintenance , setMaintenance] = useState()
    const [completedTasks,setCompletedTasks] = useState()
    const [pendingTasks,setPendingTasks] = useState()
    useEffect(
        ()=>{
            let data = {}
            ApiServices.dashboard(data).then(
                x=>{
                    console.log(x)
                    setCategory(x.data.total_category)
                    setEmployee(x.data.total_employee)
                    setProject(x.data.total_projects)
                    setTask(x.data.total_task)
                    setDeveloper(x.data.total_developer)
                    setHighpriority(x.data.highpriority)
                    setMediumpriority(x.data.mediumpriority)
                    setDesigner(x.data.totaldesigner)
                    setTester(x.data.totaltester)
                    setMaintenance(x.data.totalmaintenance)
                    setCompletedTasks(x.data.completedtasks)
                    setPendingTasks(x.data.pendingtasks)
                }
            )
        },[1]
    )
    return(
        <>
            <div className="container my-5 p-5">
                <div className='row'>
                    <Status workload={designer} team="Designer"/>
                    <Status workload={developer} team="Developer"/>
                    <Status workload={tester} team="Testing"/>
                    <Status workload={maintenance} team="Maintenance"/>

                </div>
                {/* <div className="row mt-2">
                    <Team role="Manager" num="10"/>
                    <Team role="Developer" num="12"/>
                    <Team role="Quality Assurance Engg" num="08"/>   
                </div> */}
                <div className="row">
                        <Progress status='Completed' num={completedTasks}/>
                        <Progress status='Pending' num={pendingTasks}/>    
                </div>  
                <div className="row">
                    <Priority priorities='High' num={highpriority}/>
                    <Priority priorities='Medium' num={mediumpriority}/>
                </div>  
                <div className="row">
                    <Basic part='Total Employees' count={employee}/>
                    <Basic part='Total Projects' count={project}/>
                    <Basic part='Total Tasks' count={task}/>
                    <Basic part='Total Category' count={category}/>


                </div>
                
            </div>
        </>
    )
}