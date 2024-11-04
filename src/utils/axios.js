import axios from "axios";

const weatherInstance = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_APP,
});
export default weatherInstance;