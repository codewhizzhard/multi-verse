import axios from "./axios";

export default axios.create({
    baseURL: "https://api.slingacademy.com/v1/sample-data"
})