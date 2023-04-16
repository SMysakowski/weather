import axios from "axios";

const instance = axios.create({
  // TODO - Change this to your API URL
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default instance;
