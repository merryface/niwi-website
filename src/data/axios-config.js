import axios from "axios";

export default axios.create({
    baseURL: "url",
    headers: {
        Accept: "application/json",
        token: ""
    }
})