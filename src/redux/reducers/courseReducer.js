import { CourseActionType } from "../actions/courseAction";

const initialState = {
  currentCourse: null,
  courseList: {
    data: [],
    page: 0,
    size: 2,
    count: 0,
    totalPages: 0,
    totalCount: 0,
  },
  loading: false,
  error: undefined,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case CourseActionType.ADD_COURSE:
      return {
        ...state,
        loading: false,
      };
    case CourseActionType.GET_ONE_COURSE:
      return {
        ...state,
        currentCourse: action.payload.course,
        loading: false,
      };
    case CourseActionType.GET_COURSES:
      return {
        ...state,
        courseList: action.payload.courses,
        loading: false,
      };
    case CourseActionType.UPDATE_COURSE:
      const updatedCourses = [...state.courseList];
      const updatedIndex = updatedCourses.findIndex(c => c.id === action.payload.course.id);
      updatedCourses[updatedIndex] = action.payload.course;

      return {
        ...state,
        currentCourse: action.payload.course,
        courseList: updatedCourses,
        loading: false,
      };
    case CourseActionType.REMOVE_COURSE:
      return {
        ...state,
        courseList:  {
          ...state.courseList,
          data: state.courseList.data.filter((c) => c.id !== action.payload.id)
        },
        loading: false,
      };
    case CourseActionType.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case CourseActionType.SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default courseReducer;
