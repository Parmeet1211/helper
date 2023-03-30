export default function Board(){
    const num=4;
    const todo=[
        {
            task: 'Designing admin dashboard',
            id: 't2566',
            description : 'Designing admin panel of the ecommerce website in css,html,bootstrap and js',
            priority : 'High',
            deadline : '20-march-2023'
        },
        {
            task: 'Converting the html,css and js into react',
            id: 't2566',
            description : 'Designing admin panel of the ecommerce website in css,html,bootstrap and js',
            priority : 'Medium',
            deadline : '10-april-2023'
        },
        {
            task: 'Product APIs',
            id: 't7537',
            description : 'creating the apis for the product',
            priority : 'Medium',
            deadline : '27-april-2023'
        },
        {
            task: 'Designing the backend',
            id: 't6593',
            description : 'Designing the backend of food delivary website',
            priority : 'Medium',
            deadline : '18-may-2023'
        }
    ]
    const doing=[
        {
            task: 'Creating the detection system',
            id: 't7803',
            description : 'Using ML algorithm and python',
            priority : 'High',
            deadline : '30-march-2023'
        },
        {
            task: 'Stats of the data',
            id: 't2623',
            description : 'Applying the stats on the given data',
            priority : 'Medium',
            deadline : '18-june-2023'
        },
        {
            task: 'Category APIs',
            id: 't1327',
            description : 'creating the apis for the categories',
            priority : 'High',
            deadline : '03-april-2023'
        },
        {
            task: 'Designing the frontend',
            id: 't7583',
            description : 'Designing the frontend of food delivary website using Angular',
            priority : 'High',
            deadline : '12-may-2023'
        }
    ]
    const done=[
        {
            task: 'User Reccomendation',
            id: 't4782',
            description : 'Developing user reccomendation for ecommerce website',
            priority : 'Medium'
        },
        {
            task: 'Flow of the project',
            id: 't9674',
            description : 'deciding the flow of e-mechanic website',
            priority : 'Medium',
            
        },
        {
            task: 'Restaurant  APIs',
            id: 't8649',
            description : 'creating the apis for the restaurant part of food delivary website',
            priority : 'High'
        },
        {
            task: 'Developing the compiler ',
            id: 't7633',
            description : 'Designing the rules for the compiler',
            priority : 'Medium'
        }
    ]
    return(
        <>
            <div className='container my-5 py-5'>
                <div className="row my-5">
                    <div className="col-md-4">
                        <div className="card  mb-3" style={{backgroundColor:'rgba(159,190,255)'}} >
                            <div className="card-header h1">To Do</div>
                            <div className="card-body">
                                <h5>{num} projects</h5>
                            </div>
                        </div>
                        <div className="row">
                            {todo.map((element,index)=>(
                                <div className="col-md-11 ">
                                <div className="card  mb-3 bg-light" key={index}>
                                    <div className="card-header  bg-light">
                                        <h5>{element.task}</h5>
                                        <h5>ID : {element.id}</h5>
                                        <h6>Priority : {element.priority}</h6>
                                    </div>
                                    <div className="card-body">
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
                                <div className="card-body">
                                    <h5>{num} projects</h5>
                                </div>
                        </div>
                        <div className="row">
                            {doing.map((element,index)=>(
                                <div className="col-md-11 ">
                                <div className="card  mb-3 bg-light" key={index}>
                                    <div className="card-header  bg-light">
                                        <h5>{element.task}</h5>
                                        <h5>ID : {element.id}</h5>
                                        <h6>Priority : {element.priority}</h6>
                                    </div>
                                    <div className="card-body">
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
                            <div className="card-body">
                                <h5>{num} projects</h5>
                            </div>
                        </div>
                        <div className="row">
                            {done.map((element,index)=>(
                                <div className="col-md-11 ">
                                <div className="card  mb-3 bg-light" key={index}>
                                    <div className="card-header  bg-light">
                                        <h5>{element.task}</h5>
                                        <h5>ID : {element.id}</h5>
                                        <h6>Priority : {element.priority}</h6>
                                    </div>
                                    <div className="card-body">
                                      <p>{element.description}</p> 
                                       
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