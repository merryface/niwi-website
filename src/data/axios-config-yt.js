import axios from "axios";

// Youtube
export default axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=UUP9bAXaqUyHhS3MQkdlBArQ&key=AIzaSyDLxP9UYc5DTlHF2nxVEzasZg1W0D881p8",
    headers: {
        Accept: "application/json",
        key: "AIzaSyDLxP9UYc5DTlHF2nxVEzasZg1W0D881p8"
    }
})