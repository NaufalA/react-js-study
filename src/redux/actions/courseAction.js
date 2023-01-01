export const CourseActionType = {
  ADD_COURSE: "course/add",
  GET_COURSES: "course/list",
  REMOVE_COURSE: "course/remove",
  SET_LOADING: "course/set-loading",
  SET_ERROR: "course/set-error"
};

const courseAction = {
  addCourse: (newCourse) => ({
    type: CourseActionType.ADD_COURSE,
    payload: { newCourse },
  }),
  getCourses: (courses) => ({
    type: CourseActionType.GET_COURSES,
    payload: { courses },
  }),
  removeCourse: (id) => ({
    type: CourseActionType.REMOVE_COURSE,
    payload: { id },
  }),
  setLoading: (loading) => ({
    type: CourseActionType.SET_LOADING,
    payload: { loading }
  }),
  setError: (error) => ({
    type: CourseActionType.SET_ERROR,
    payload: { error }
  })
};

export default courseAction;