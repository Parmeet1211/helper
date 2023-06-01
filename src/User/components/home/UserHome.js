import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiServices from "../../../apiservice/ApiServices";



export default function UserHome() {

  const navigate = useNavigate()
  const [employee,setEmployee] = useState()
  const [project,setProject] = useState()

  useEffect(() => {
    if(sessionStorage.getItem("token") == null){
      navigate('/')
    }
    console.log(sessionStorage.getItem("_id"));
    ApiServices.getEmployee({ userId: sessionStorage.getItem("_id") }).then(
      (x) => {
        // console.log(x);
        console.log(x.data.data[0]._id);
        sessionStorage.setItem("empId",x.data.data[0]._id)
        // console.log(sessionStorage.getItem("empId"))
      }
    );

    ApiServices.userDashboard({employeeId : sessionStorage.getItem("empId")}).then(
      x=>{
        // console.log(x)
        setEmployee(x.data.employee)
        setProject(x.data.project)
      }
    )

  },[3]);
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row my-3 text-center">
          <h1>Dashboard</h1>
        </div>
        <div className="row my-3">
          <div className="col-lg-6 mt-5">
              <div className="card text-dark">
                <h2 className="text-center display-4 mt-3">
                  <i className="fa-solid fa-list-check"></i>
                </h2>
                <h1 className="text-center">Tasks Assigned</h1>
                <br />
                <h1 className="text-center text-info">{employee}</h1>
              </div>
          </div>
          <div className="col-lg-6 mt-5">
              <div className="card text-dark">
                <h2 className="text-center display-4 mt-3">
                  <i className="fa-solid fa-diagram-project"></i>
                </h2>
                <h1 className="text-center">Projects</h1>
                <br />
                <h1 className="text-center text-info">{project}</h1>
              </div>
          </div>
          {/* <div className="col-lg-6 mt-5">
              <div className="card text-dark">
                <h2 className="text-center display-4 mt-3">
                  <i className="fa-solid fa-user-plus"></i>
                </h2>
                <h1 className="text-center">Team </h1>
                <br />
                <h1 className="text-center text-info">Designer</h1>
              </div>
          </div>
          <div className="col-lg-6 mt-5">
              <div className="card text-dark">
                <h2 className="text-center display-4 mt-3">
                  <i className="fa-solid fa-check"></i>
                </h2>
                <h1 className="text-center">Completed Tasks </h1>
                <br />
                <h1 className="text-center text-info">06</h1>
              </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
