import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import ProtectedRoute from "../../components/ProtectedRoute";
import courseTypeAction from "../../redux/actions/courseTypeAction";

export default function CourseTypeRoot(props) {
  const courseTypeError = useSelector((state) => state.courseType.error);

  const dispatch = useDispatch();
  useEffect(() => {
    if (courseTypeError) {
      alert(
        `${courseTypeError.code}: ${courseTypeError.message}\n${
          courseTypeError.reason || ""
        }`
      );
      dispatch(courseTypeAction.setError(undefined));
    }
  }, [courseTypeError, dispatch]);

  return (
    <>
      <ProtectedRoute>
        <h1 style={{ textAlign: "center" }}>Course Type</h1>
        <Outlet />
      </ProtectedRoute>
    </>
  );
}
