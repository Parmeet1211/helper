import { useLocation } from "react-router-dom"

export default function View(){
    
    const projects=[
        {
            id:'12345',
            name:'Shaym',
            role:'ProjectLeader'
        },
        {
            id:'12342',
            name:'Radha',
            role:'Developer'
        },
        {
            id:'62345',
            name:'Sukhpreet',
            role:'Designer'
        },
        {
            id:'346721',
            name:'Raman Kumar ',
            role:'ProjectLeader'
        },
        {
            id:'457783',
            name:'Dhruv Sharma',
            role:'Developer'
        },
        {
            id:'72345',
            name:'Ramesh',
            role:'ProjectLeader'
        },
        {
            id:'187345',
            name:'Shardha Thakur',
            role:'Technical Lead'
        }
    ]
    return(
        <>
        <div className="container">
            <div className="my-5 py-5 row">
                <div className="col text-center my-5 py-5">
                    <h5 className="fw-bolder">Employee Name : {projects[0].name}</h5>
                    <h5></h5>
                    <h6 className="text-dark">ID : {projects[0].id}</h6>
                    <h6 className="text-dark">Role : {projects[0].role}</h6>

                </div>
            </div>
        </div>
        </>
    )
}