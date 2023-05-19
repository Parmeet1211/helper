import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import ApiServices from "../../../apiservice/ApiServices";

export default function AddEmployee() {
  const [empid, setEmpId] = useState("");
  const [empName, setEmpName] = useState("");
  const [empRole, setEmpRole] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empPassword, setEmpPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState();
  const navigate = useNavigate()

  const formHandler = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("employee_id", empid);
    data.append("employee_name",empName)
    data.append("role",empRole)
    data.append("password",empPassword)
    data.append("contact",phone)
    data.append("address",address)
    data.append("image",image)
    data.append("email",empEmail)

    ApiServices.addEmployee(data).then((x) => {
      // console.log(x);
      if(x.data.success){
        toast.success(x.data.msg)
        setTimeout(
          ()=>{
            navigate('/admin/viewemployee')
          },3000
        )
      }
      else{
        toast.error(x.data.msg)
      }
    });
  };
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className='col-md-6 text-center'>
            <h1>Add Employee</h1>
          </div>
        
          <div className="col-md-6 text-end">
            <Link to="/admin/viewemployee">
              <button className="btn btn-warning">View</button>
            </Link>
          </div>
        </div>
        <div className="card text-bg-light my-5 mb-3">
          <div className="card-body">
            <form onSubmit={formHandler}>
              <div className="form-group">
                <label htmlFor="inputAddress">Employee Id</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder=""
                  value={empid}
                  onChange={(e) => {
                    setEmpId(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress">Employee Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder=""
                  value={empName}
                  onChange={(e) => {
                    setEmpName(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress">Employee Role</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder=""
                  value={empRole}
                  onChange={(e) => {
                    setEmpRole(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress">Employee Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputAddress"
                  placeholder=""
                  value={empEmail}
                  onChange={(e) => {
                    setEmpEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress">Employee Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder=""
                  value={empPassword}
                  onChange={(e) => {
                    setEmpPassword(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress">Contact No</label>
                <input
                  type="number"
                  className="form-control"
                  id="inputAddress"
                  placeholder=""
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder=""
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress">Image</label>
                <input
                  type="file"
                  className="form-control"
                  id="inputAddress"
                  placeholder=""
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Add new Employee
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}
