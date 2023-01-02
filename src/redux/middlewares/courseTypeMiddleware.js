import services from "../../services";
import courseTypeAction from "../actions/courseTypeAction";

const courseTypeMiddleware = {
  addType: (dto) => async (dispatch) => {
    try {
      dispatch(courseTypeAction.setLoading(true));
      const newType = await services.courseType.addCourseType(dto);
      dispatch(courseTypeAction.addType(newType));
    } catch (error) {
      dispatch(courseTypeAction.setError(error));
    }
  },
  getCourseTypes: (page, size) => async (dispatch) => {
    try {
      dispatch(courseTypeAction.setLoading(true));
      const courseTypes = await services.courseType.getCourseTypes(page, size);
      dispatch(courseTypeAction.getTypes(courseTypes));
    } catch (error) {
      dispatch(courseTypeAction.setError(error));
    }
  },
  removeCourse: (id) => async (dispatch) => {
    try {
      dispatch(courseTypeAction.setLoading(true));
      const removedType = await services.courseType.removeCourseType(id);
      console.log(removedType);
      dispatch(courseTypeAction.removeType(removedType.courseTypeId));
    } catch (error) {
      dispatch(courseTypeAction.setError(error));
    }
  },
};

export default courseTypeMiddleware;