import { AuthActionType } from "../actions/authAction";

const initialState = {
  user: undefined,
  isLoggedIn: false,
  loading: false,
  error: undefined,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionType.AUTH_LOGIN:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        loading: false,
      };
    case AuthActionType.AUTH_LOGOUT:
      return {
        ...state,
        user: undefined,
        isLoggedIn: false,
        loading: false,
      };
    case AuthActionType.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case AuthActionType.SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
