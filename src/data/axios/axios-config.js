import axios from "axios";

export default axios.create({
    baseURL: "https://rvzixiajwwheeelkrfpr.supabase.co/rest/v1",
    headers: {
      "Content-Type": "application/json",
      "apikey": process.env.REACT_APP_API_KEY,
  },
})