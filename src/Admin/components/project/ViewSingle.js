import { useLocation } from "react-router-dom"

export default function ViewSingle(){
    
    const projects=[
        {
            id:'12345',
            name:'ECommerce',
            manager:'Manish',
            deadline:'22-10-22',
            status:'running'
        },
        {
            id:'12342',
            name:'Image Detection',
            manager:'Shardha Kumari',
            deadline:'05-04-23',
            status:'completed'
        },
        {
            id:'62345',
            name:'Noise Detection',
            manager:'Ram',
            deadline:'18-07-24',
            status:'Upcoming'
        },
        {
            id:'346721',
            name:'News Application',
            manager:'Jyotica Sharma',
            deadline:'24-05-23',
            status:'running'
        },
        {
            id:'457783',
            name:'Feeling Detection system',
            manager:'Anushree Das',
            deadline:'08-09-23',
            status:'Upcoming'
        },
        {
            id:'72345',
            name:'ECommerce',
            manager:'Ramesh Singh',
            deadline:'27-10-22',
            status:'completed'
        },
        {
            id:'187345',
            name:'School Management Application',
            manager:'Vishwa',
            deadline:'03-06-23',
            status:'running'
        }
    ]
    return(
        <>
            <div className="my-5 py-5">
                <div className="col text-center my-5 py-5 ">
                    <h1 className="font-weight-bolder">Project Name : {projects[0].name}</h1>
                    <h5></h5>
                    <h6 className="text-dark">ID : {projects[0].id}</h6>
                    <h6 className="text-dark">Manager : {projects[0].manager}</h6>
                    <h6 className="text-dark">Deadline : {projects[0].deadline}</h6>
                    <h6 className="text-dark">Status : {projects[0].status}</h6>


                </div>
            </div>
        </>
    )
}