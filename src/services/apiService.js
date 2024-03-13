import axios from "axios";

const HttpService = axios.create({
  baseURL: "http://localhost:4000",
});

export { HttpService };
