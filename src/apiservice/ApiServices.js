import axios from "axios";
import * as qs from "qs";

const BASE_URL = "http://localhost:5000/";
class ApiServices {
  getCategory(data) {
    const header1 = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/allcategory", qs.stringify(data), {
      headers: header1,
    });
  }
  signIn(data) {
    console.log("Sign in api");
    return axios.post(BASE_URL + "admin/login", qs.stringify(data));
  }
  addCategory(data) {
    const header1 = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/addcategory", qs.stringify(data), {
      headers: header1,
    });
  }
  addProject(data) {
    const header1 = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/addproject", qs.stringify(data), {
      headers: header1,
    });
  }
  getEmployee(data) {
    const header1 = {
      Authorization: sessionStorage.getItem("token"),
    };

    return axios.post(BASE_URL + "admin/allemployee", qs.stringify(data), {
      headers: header1,
    });
  }
  getProject(data) {
    const header1 = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/allproject", qs.stringify(data), {
      headers: header1,
    });
  }
  dashboard(data) {
    const header1 = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/dashboard", qs.stringify(data), {
      headers: header1,
    });
  }
  addEmployee(data) {
    const header1 = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/addemployee", data, {
      headers: header1,
    });
  }
  singleEmployee(data) {
    const header1 = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/singleemployee", qs.stringify(data), {
      headers: header1,
    });
  }
  updateEmployee(data) {
    const header1 = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/updateemployee", data, {
      headers: header1,
    });
  }
  addtask(data) {
    const header1 = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL+'admin/addtask',qs.stringify(data),{headers : header1})
  }
  gettask(data){
    const header1 = {
        Authorization: sessionStorage.getItem("token"),
    };

    return axios.post(BASE_URL+'admin/alltask',qs.stringify(data),{headers : header1})
  }
  singletask(data){
    const header1 = {
        Authorization: sessionStorage.getItem("token"),
    };

    return axios.post(BASE_URL+'admin/singletask',qs.stringify(data),{headers : header1})
  }
  updatetask(data){
    const header1 = {
        Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL+'admin/updatetask',qs.stringify(data),{headers : header1})
  }
  updateCategory(data){
    const header1 = {
        Authorization: sessionStorage.getItem("token"),
    };

    return axios.post(BASE_URL+'admin/updatecategory',qs.stringify(data),{headers : header1})
  }
  singleCategory(data){
    const header1 = {
        Authorization: sessionStorage.getItem("token"),
    };

    return axios.post(BASE_URL+'admin/singlecategory',qs.stringify(data),{headers : header1})
  }
  addTeam(data){
    const header1 = {
        Authorization: sessionStorage.getItem("token"),
    };

    return axios.post(BASE_URL+'admin/addteam',qs.stringify(data),{headers : header1})
  }
  singleProject(data){
    const header1 = {
      Authorization: sessionStorage.getItem("token"),
     };
     return axios.post(BASE_URL+'admin/singleproject',qs.stringify(data),{headers : header1})
  }
  updateProject(data){
    const header1 = {
      Authorization: sessionStorage.getItem("token"),
     };
     return axios.post(BASE_URL+'admin/updateproject',qs.stringify(data),{headers : header1})
  }
  getnewtasks(data){
    const header1 = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL+'admin/getnewTasks',qs.stringify(data),{headers : header1})

  }
  getrunningtasks(data){
    const header1 = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL+'admin/getrunningTasks',qs.stringify(data),{headers : header1})

  }
  getcompletetasks(data){
    const header1 = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL+'admin/getcompleteTasks',qs.stringify(data),{headers : header1})

  }
  getcontactus(data){
    const header1 = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL+'admin/allcontact',qs.stringify(data),{headers : header1})

  }
  getenquiry(data){
    const header1 = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL+'admin/allenquiry',qs.stringify(data),{headers : header1})

  }
  replyenquiry(data){
    const header1 = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL+'admin/reply',qs.stringify(data),{headers : header1})

  }
  getteams(data){
    const header1 = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL+'admin/allteam',qs.stringify(data),{headers : header1})
  }
  updateTeams(data){
    const header1 = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL+'admin/updateteam',qs.stringify(data),{headers : header1})

  }
}

export default new ApiServices();
