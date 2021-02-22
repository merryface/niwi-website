import axios from "axios";

// Youtube
export default axios.create({
    baseURL: "url",
    headers: {
        Accept: "application/json",
        key: "AIzaSyDLxP9UYc5DTlHF2nxVEzasZg1W0D881p8"
    }
})