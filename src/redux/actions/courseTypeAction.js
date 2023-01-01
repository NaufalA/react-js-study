export const CourseTypeActionType = {
  ADD_COURSE_TYPE: "course-type/add",
  GET_COURSE_TYPES: "course-type/list",
  REMOVE_COURSE_TYPE: "course-type/remove",
  SET_LOADING: "course-type/set-loading",
  SET_ERROR: "course-type/set-error"
};

const courseTypeAction = {
  addType: (newType) => ({
    type: CourseTypeActionType.ADD_COURSE_TYPE,
    payload: { newType },
  }),
  getTypes: (courseTypes) => ({
    type: CourseTypeActionType.GET_COURSE_TYPES,
    payload: { courseTypes },
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
