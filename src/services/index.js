import httpClient from "../config/httpClient";
import courseService from "./courseService";
import courseTypeService from "./courseTypeService";

const services = {
    course: courseService(httpClient),
    courseType: courseTypeService(httpClient),
}

export default services;