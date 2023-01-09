import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import ProtectedRoute from "../../components/ProtectedRoute";
import courseAction from "../../redux/actions/courseAction";

export default function CourseRoot() {
  const courseError = useSelector((state) => state.course.error);

  const dispatch = useDispatch();
  useEffect(() => {
    if (courseError) {
      alert(
        `${courseError.code}: ${courseError.message}\n${
          courseError.reason || ""
        }`
      );
      dispatch(courseAction.setError(undefined));
    }
  }, [courseError, dispatch]);

  return (
    <>
      <ProtectedRoute>
        <h1 style={{ textAlign: "center" }}>Course</h1>
        <Outlet />
      </ProtectedRoute>
    </>
  );
}
