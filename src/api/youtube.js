import axios from 'axios';

const KEY = "AIzaSyDffB0-7PC4ivHXxnCvo38YjQViExH59Ec";

export default axios.create({
  baseURL: " https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});