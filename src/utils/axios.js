import axios from "axios";

const dataInstance = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT,
});
export default dataInstance;
