export default function UserProject(){
    const projects=[
        {
            id:'12345',
            name:'ECommerce',
            manager:'Manish',
            deadline:'22-10-22',
            status:'running',
            description : 'It is a web application'
        },
        {
            id:'12342',
            name:'Image Detection',
            manager:'Shardha Kumari',
            deadline:'05-04-23',
            status:'completed',
            description : 'It is an AI application for automatically detect images'

        },
        {
            id:'62345',
            name:'Noise Detection',
            manager:'Ram',
            deadline:'18-07-24',
            status:'Upcoming',
            description : 'It is an AI application'

        },
        {
            id:'346721',
            name:'News Application',
            manager:'Jyotica Sharma',
            deadline:'24-05-23',
            status:'running',
            description : 'It is a web application'

        },
        {
            id:'457783',
            name:'Feeling Detection system',
            manager:'Anushree Das',
            deadline:'08-09-23',
            status:'Upcoming',
            description : 'It is an AI application'

        },
        {
            id:'72345',
            name:'ECommerce',
            manager:'Ramesh Singh',
            deadline:'27-10-22',
            status:'completed',
            description : 'It is a web application'

        },
        {
            id:'187345',
            name:'School Management Application',
            manager:'Vishwa',
            deadline:'03-06-23',
            status:'running',
            description : 'It is a web application'

        }
    ]
    return(
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    {projects.map((element,index)=>(
                        <div className="col-12" key={index}>
                        <div className="card bg-white my-3">
                            <div className="card-header" style={{backgroundColor:'bisque'}}>
                                <h5>Project Name : {element.name} </h5>
                                <h5>Project Id : {element.id} </h5>
                            </div>
                            <div className="card-body">
                                <h5>Manager: {element.manager}</h5>
                                <h5>Description : {element.description}</h5>
                                <h5>Deadline : {element.deadline}</h5>
                                <h5>Status : {element.status}</h5>
                            </div>
                            
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}