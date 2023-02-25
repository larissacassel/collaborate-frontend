import axios from "axios";

const api = axios.create({
  baseURL: "https://gb-collaborate-api.herokuapp.com",
});

export default api;