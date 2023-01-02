export const CourseTypeActionType = {
  ADD_COURSE_TYPE: "course-type/add",
  GET_ONE_COURSE_TYPE: "course-type/get",
  GET_COURSE_TYPES: "course-type/list",
  REMOVE_COURSE_TYPE: "course-type/remove",
  UPDATE_COURSE_TYPE: "course-type/update",
  SET_LOADING: "course-type/set-loading",
  SET_ERROR: "course-type/set-error"
};

const courseTypeAction = {
  addType: (newType) => ({
    type: CourseTypeActionType.ADD_COURSE_TYPE,
    payload: { newType },
  }),
  getOneType: (courseType) => ({
    type: CourseTypeActionType.GET_ONE_COURSE_TYPE,
    payload: { courseType },
  }),
  getTypes: (courseTypes) => ({
    type: CourseTypeActionType.GET_COURSE_TYPES,
    payload: { courseTypes },
  }),
  updateType: (courseType) => ({
    type: CourseTypeActionType.UPDATE_COURSE_TYPE,
    payload: { courseType },
  }),
  removeType: (id) => ({
    type: CourseTypeActionType.REMOVE_COURSE_TYPE,
    payload: { id },
  }),
  setLoading: (loading) => ({
    type: CourseTypeActionType.SET_LOADING,
    payload: { loading }
  }),
  setError: (error) => ({
    type: CourseTypeActionType.SET_ERROR,
    payload: { error }
  })
};

export default courseTypeAction;
