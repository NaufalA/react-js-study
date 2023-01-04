import { Outlet } from "react-router-dom";
import { ERROR_FORBIDDEN_PATH } from "../../shared/constants/paths";
import Forbidden from "./Forbidden";

const errorPages = {
  path: "",
  element: <Outlet />,
  children: [
    {
      path: ERROR_FORBIDDEN_PATH,
      element: <Forbidden />,
    },
  ],
};

export default errorPages;