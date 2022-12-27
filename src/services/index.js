import courseService from "./courseService";
import courseTypeService from "./courseTypeService";

const services = {
    course: courseService(),
    courseType: courseTypeService(),
}

export default services;