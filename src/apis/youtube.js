import axios from "axios";

const KEY = "AIzaSyAsJiDFnr_eSG5CGe_efBV8AJVc4GGcWGI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
