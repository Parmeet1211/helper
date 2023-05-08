import axios from "axios";
import * as qs from "qs";

const BASE_URL = "http://localhost:5000/"
class ApiServices{
    getCategory(data){
        const header1 ={
            Authorization : sessionStorage.getItem("token") 
        }
        return axios.post(BASE_URL+'admin/allcategory',qs.stringify(data),{headers : header1})
    }
    signIn(data){
        console.log('Sign in api')
        return axios.post(BASE_URL+'admin/login',qs.stringify(data))
    }
    addCategory(data){
        const header1 ={
            Authorization : sessionStorage.getItem("token") 
        }
        return axios.post(BASE_URL+'admin/addcategory',qs.stringify(data),{headers : header1})
    }
    addProject(data){
        const header1 ={
            Authorization : sessionStorage.getItem("token") 
        }
         return axios.post(BASE_URL+'admin/addproject')
    }
    getEmployee(data){
        const header1 ={
            Authorization : sessionStorage.getItem("token") 
        }

        return axios.post(BASE_URL+'admin/allemployee',qs.stringify(data),{headers : header1})
    }

}

export default new ApiServices

