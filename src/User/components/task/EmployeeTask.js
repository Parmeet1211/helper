import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiServices from "../../../apiservice/ApiServices";

export default function EmployeeTask() {
  const [empTask, setEmpTask] = useState([{}]);
  const navigate = useNavigate()


  useEffect(() => {
    if(sessionStorage.getItem("token") == null){
      navigate('/')
    }
    ApiServices.gettask({ employeeId: sessionStorage.getItem("empId") }).then(
      (x) => {
        console.log(x.data.data);
        setEmpTask(x.data.data);
      }
    );
  }, [1]);
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row my-3 text-center">
          <h1>Task assigned</h1>
        </div>
        <div className="row">
          {empTask?.map((element, index) => (
            <div className="col-12 col-lg-6 my-3" key={index}>
              <Link to="/user/taskdetail">
                <div className="card text-dark" style={{ overflow: "hidden" }}>
                  <div className="card-header">
                    <h5>Task  : {element.taskname}</h5>
                    <h6>Project  : {element?.projectId?.project_name}</h6>
                    <h6>Priority : {element.priority}</h6>
                  </div>
                  <div className="card-body">
                    <p>Description : {element.description}</p>
                    <h5>Last Date : {element.lastDate} </h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
