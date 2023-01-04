import { ErrorResponse } from "../shared/dtos";

const ACCESS_TOKEN_KEY = "accessToken";

export default function authService(http, webStorage) {
  const baseURI = "auth";

  const login = async (username, password) => {
    try {
      const data = {
        username,
        password,
      };

      const res = await http.post(`${baseURI}/login`, data);

      const token = res.data.accessToken;

      webStorage.setItem(ACCESS_TOKEN_KEY, token);

      return JSON.parse(window.atob(token.split(".")[1]));
    } catch (error) {
      throw new ErrorResponse(
        error.response.data?.code || error.response.status,
        error.response.data?.message || error.message,
        error.response.data?.reason || error.message
      );
    }
  };

  const logout = async () => {
    try {
      webStorage.removeItem(ACCESS_TOKEN_KEY);

      return true;
    } catch (error) {
      throw error;
    }
  };

  return { login, logout };
}
