import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import authAction from "../../redux/actions/authAction";
import { COURSE_LIST_PATH } from "../../shared/constants/paths";

export default function AuthRoot(props) {
  const authError = useSelector((state) => state.auth.error);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      return navigate(COURSE_LIST_PATH);
    }
  }, [isLoggedIn, navigate]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (authError) {
      alert(
        `${authError.code}: ${authError.message}\n${authError.reason || ""}`
      );
      dispatch(authAction.setError(undefined));
    }
  }, [authError, dispatch]);

  return (
    <>
      <Outlet />
    </>
  );
}
