import { Link } from "react-router-dom"
import Basic from "./Basic"
import Progress from "./Progress"
import Status from "./Status"
import Team from "./Team"
import Priority from "./Priority"
export default function Summary(){
    return(
        <>
            <div className="container my-5 p-5">
                <div className='row'>
                    <Status workload="30%" team="Designer"/>
                    <Status workload="35%" team="Developer"/>
                    <Status workload="15%" team="Testing"/>
                    <Status workload="20%" team="Maintenance"/>

                </div>
                <div className="row mt-2">
                    <Team role="Manager" num="10"/>
                    <Team role="Developer" num="12"/>
                    <Team role="Quality Assurance Engg" num="08"/>   
                </div>
                <div className="row">
                        <Progress status='Completed' num='37'/>
                        <Progress status='Running' num='52'/>
                        <Progress status='Pending' num='23'/>    
                </div>  
                <div className="row">
                    <Priority priorities='High' num='20'/>
                    <Priority priorities='Medium' num='10'/>
                </div>  
                <div className="row">
                    <Basic part='Total Employees' count='142'/>
                    <Basic part='Total Projects' count='50'/>
                    <Basic part='Total Tasks' count='265'/>
                    <Basic part='Monthly Progress' count='64%'/>


                </div>
                
            </div>
        </>
    )
}