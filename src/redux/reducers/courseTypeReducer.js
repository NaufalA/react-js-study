import { CourseTypeActionType } from "../actions/courseTypeAction";

const initialState = {
  currentCourseType: null,
  courseTypeList: {
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

const courseTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CourseTypeActionType.ADD_COURSE_TYPE:
      return {
        ...state,
        loading: false,
        error: undefined
      };
    case CourseTypeActionType.GET_COURSE_TYPES:
      return {
        ...state,
        courseTypeList: action.payload.courseTypes,
        loading: false,
        error: undefined
      };
    case CourseTypeActionType.REMOVE_COURSE_TYPE:
      return {
        ...state,
        courseTypeList:  {
          ...state.courseTypeList,
          data: state.courseTypeList.data.filter((c) => c.courseTypeId !== action.payload.id)
        },
        loading: false,
        error: undefined
      };
    case CourseTypeActionType.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case CourseTypeActionType.SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default courseTypeReducer;
