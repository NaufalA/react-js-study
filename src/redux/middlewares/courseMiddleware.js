import services from "../../services";
import courseAction from "../actions/courseAction";

const courseMiddleware = {
  addCourse: (dto) => async (dispatch) => {
    try {
      dispatch(courseAction.setLoading(true));
      const newCourse = await services.course.addCourse(dto);
      dispatch(courseAction.addCourse(newCourse));
    } catch (error) {
      dispatch(courseAction.setError(error));
    }
  },
  getOneCourse: (id) => async (dispatch) => {
    try {
      dispatch(courseAction.setLoading(true));
      const course = await services.course.getOneCourse(id);
      dispatch(courseAction.getOneCourse(course));
    } catch (error) {
      dispatch(courseAction.setError(error));
    }
  },
  getCourses: (page, size) => async (dispatch) => {
    try {
      dispatch(courseAction.setLoading(true));
      const courses = await services.course.getCourses(page, size);
      dispatch(courseAction.getCourses(courses));
    } catch (error) {
      dispatch(courseAction.setError(error));
    }
  },
  updateCourse: (id, updatedCourse) => async (dispatch) => {
    try {
      dispatch(courseAction.setLoading(true));
      const course = await services.course.updateCourse(id, updatedCourse);
      dispatch(courseAction.updateCourse(course));
    } catch (error) {
      dispatch(courseAction.setError(error));
    }
  },
  removeCourse: (id) => async (dispatch) => {
    try {
      dispatch(courseAction.setLoading(true));
      const removedId = await services.course.removeCourse(id);
      dispatch(courseAction.removeCourse(removedId));
    } catch (error) {
      dispatch(courseAction.setError(error));
    }
  },
};

export default courseMiddleware;
