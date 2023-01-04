import services from "../../services";
import authAction from "../actions/authAction";

const authMiddleware = {
  login: (username, password) => async (dispatch) => {
    try {
      dispatch(authAction.setLoading(true));
      const res = await services.auth.login(username, password);
      dispatch(authAction.login(res));
      return res;
    } catch (error) {
      dispatch(authAction.setError(error));
      throw error;
    }
  },
  logout: () => async (dispatch) => {
    try {
      dispatch(authAction.setLoading(true));
      const res = await services.auth.logout();
      dispatch(authAction.logout());
      return res;
    } catch (error) {
      dispatch(authAction.setError(error));
      throw error;
    }
  },
};

export default authMiddleware;
