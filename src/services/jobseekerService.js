import axios from "axios"

export default class JobseekerService{
    getJobseekers(){
        return axios.get("http://localhost:8080/api/jobseekers/getall")
    }
    registerJobseeker(values){
        return axios.post("http://localhost:8080/api/jobseekers/add",values)
    }
}