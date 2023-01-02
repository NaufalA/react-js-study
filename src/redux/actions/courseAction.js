export const CourseActionType = {
  ADD_COURSE: "course/add",
  GET_ONE_COURSE: "course/get",
  GET_COURSES: "course/list",
  UPDATE_COURSE: "course/update",
  REMOVE_COURSE: "course/remove",
  SET_LOADING: "course/set-loading",
  SET_ERROR: "course/set-error"
};

const courseAction = {
  addCourse: (newCourse) => ({
    type: CourseActionType.ADD_COURSE,
    payload: { newCourse },
  }),
  getOneCourse: (course) => ({
    type: CourseActionType.GET_ONE_COURSE,
    payload: { course },
  }),
  getCourses: (courses) => ({
    type: CourseActionType.GET_COURSES,
    payload: { courses },
  }),
  updateCourse: (course) => ({
    type: CourseActionType.UPDATE_COURSE,
    payload: { course },
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