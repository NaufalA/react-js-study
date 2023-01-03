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
  getOneCourseType: (id) => async (dispatch) => {
    try {
      dispatch(courseTypeAction.setLoading(true));
      const courseType = await services.courseType.getOneCourseType(id);
      dispatch(courseTypeAction.getOneType(courseType));
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
  updateCourseType: (id, updatedType) => async (dispatch) => {
    try {
      dispatch(courseTypeAction.setLoading(true));
      const courseType = await services.courseType.updateCourseType(id, updatedType);
      dispatch(courseTypeAction.updateType(courseType));
    } catch (error) {
      dispatch(courseTypeAction.setError(error));
    }
  },
  removeCourseType: (id) => async (dispatch) => {
    try {
      dispatch(courseTypeAction.setLoading(true));
      const removedId = await services.courseType.removeCourseType(id);
      dispatch(courseTypeAction.removeType(removedId));
    } catch (error) {
      dispatch(courseTypeAction.setError(error));
    }
  },
};

export default courseTypeMiddleware;
