import { useEffect, useState } from "react";
import ApiServices from "../../../apiservice/ApiServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function ReportUser() {
  const [tasks, setTasks] = useState([{}]);
  const [taskId, setTaskId] = useState("");
  const [percentage, setPercentage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token") == null) {
      navigate("/");
    }
    ApiServices.gettask({ employeeId: sessionStorage.getItem("empId") }).then(
      (x) => {
        console.log(x);
        setTasks(x.data.data);
      }
    );
  }, [1]);

  const formHandle = (e) => {
    e.preventDefault();
    let data = {
      _id: taskId,
      progress: percentage,
    };
    // console.log(data)
    ApiServices.addProgress(data).then((x) => {
      // console.log(x)
      if (x.data.success) {
        toast.success(x.data.msg);
      } else {
        toast.error(x.data.msg);
      }
    });
  };
  return (
    <>
      <div className="container my-5 py-5 text-center">
        <div className="row my-3 text-center">
          <h1>Add Report</h1>
        </div>
        <div className="col-lg-12 mt-5">
          <form onSubmit={formHandle}>
            <div className="row">
              <div className="col form-group mt-3 mt-md-0">
                <select
                  className="form-select"
                  onChange={(e) => {
                    setTaskId(e.target.value);
                  }}
                >
                  <option>Select</option>
                  {tasks.map((element, index) => (
                    <option key={index} value={element._id}>
                      {element.taskname}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group mt-3">
              <label>Percentage of completed work</label>
              <input
                type="number"
                min={0}
                max={100}
                className="form-control"
                name="subject"
                id="subject"
                placeholder="eg 40"
                value={percentage}
                onChange={(e) => {
                  setPercentage(e.target.value);
                }}
                required
              />
            </div>

            {/* <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div> */}
            <div className="text-center mt-4 ">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
