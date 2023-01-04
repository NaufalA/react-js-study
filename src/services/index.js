import httpClient from "../config/httpClient";
import authService from "./authService";
import courseService from "./courseService";
import courseTypeService from "./courseTypeService";


const services = {
    auth: authService(httpClient, localStorage),
    course: courseService(httpClient),
    courseType: courseTypeService(httpClient),
}

export default services;