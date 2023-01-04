import { AUTH_LOGIN_PATH, AUTH_PATH } from "../../shared/constants/paths";
import { AuthRoot, Login } from "..";

const authPages = {
    path: AUTH_PATH,
    element: <AuthRoot />,
    children: [
    {
      path: AUTH_LOGIN_PATH,
      element: <Login />,
      index: true,
    },
  ]
}

export default authPages;