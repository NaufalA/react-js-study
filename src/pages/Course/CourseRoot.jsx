import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import courseAction from "../../redux/actions/courseAction";

export default function CourseRoot(props) {
    const courseError = useSelector(state => state.course.error);

    const dispatch = useDispatch();
    useEffect(() => {
        if (courseError) {
            alert(`${courseError.code}: ${courseError.message}\n${courseError.reason || ""}`);
            dispatch(courseAction.setError(undefined));
        }
    }, [courseError, dispatch]);

    return (
        <>
          <h1>Course</h1>
          <Outlet />
        </>
    );
}