import axios from "axios";
import { ACCESS_TOKEN_KEY } from "../shared/constants/storageKey";


const httpClient = axios.create({
  baseURL: "http://localhost:8800",
  headers: {
    "Authorization": `Bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}`
  }
});

export default httpClient;
