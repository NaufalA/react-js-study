import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:9999",
});

export default httpClient;
