import axios from "axios";

const dataInstance = axios.create({
  baseURL: process.env.REACT_APP_,
});
export default dataInstance;