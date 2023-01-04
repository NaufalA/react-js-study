import services from "../../services";
import courseTypeAction from "../actions/courseTypeAction";

const courseTypeMiddleware = {
  addType: (dto) => async (dispatch) => {
    try {
      dispatch(courseTypeAction.setLoading(true));
      const newType = await services.courseType.addCourseType(dto);
      dispatch(courseTypeAction.addType(newType));
      return newType;
    } catch (error) {
      dispatch(courseTypeAction.setError(error));
      throw error;
    }
  },
  getOneCourseType: (id) => async (dispatch) => {
    try {
      dispatch(courseTypeAction.setLoading(true));
      const courseType = await services.courseType.getOneCourseType(id);
      dispatch(courseTypeAction.getOneType(courseType));
      return courseType;
    } catch (error) {
      dispatch(courseTypeAction.setError(error));
      throw error;
    }
  },
  getCourseTypes: (page, size) => async (dispatch) => {
    try {
      dispatch(courseTypeAction.setLoading(true));
      const courseTypes = await services.courseType.getCourseTypes(page, size);
      dispatch(courseTypeAction.getTypes(courseTypes));
      return courseTypes;
    } catch (error) {
      dispatch(courseTypeAction.setError(error));
      throw error;
    }
  },
  updateCourseType: (id, updatedType) => async (dispatch) => {
    try {
      dispatch(courseTypeAction.setLoading(true));
      const courseType = await services.courseType.updateCourseType(id, updatedType);
      dispatch(courseTypeAction.updateType(courseType));
      return courseType;
    } catch (error) {
      dispatch(courseTypeAction.setError(error));
      throw error;
    }
  },
  removeCourseType: (id) => async (dispatch) => {
    try {
      dispatch(courseTypeAction.setLoading(true));
      const removedId = await services.courseType.removeCourseType(id);
      dispatch(courseTypeAction.removeType(removedId));
      return removedId;
    } catch (error) {
      dispatch(courseTypeAction.setError(error));
      throw error;
    }
  },
};

export default courseTypeMiddleware;
