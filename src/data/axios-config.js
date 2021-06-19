import axios from "axios";

export default axios.create({
    baseURL: "https://api.airtable.com/v0/appVuALKwYQLTlZ31/table",
    headers: {
        Accept: "application/json",
        apiKey:""
    }
})

