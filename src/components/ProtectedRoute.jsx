import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AUTH_LOGIN_PATH, ERROR_FORBIDDEN_PATH } from "../shared/constants/paths";

export default function ProtectedRoute(props) {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const user = useSelector(state => state.auth.user);

    const { role, children } = props;

    if (!isLoggedIn) {
        return <Navigate to={AUTH_LOGIN_PATH} replace />
    } else if (role && role !== user?.role) {
        return <Navigate to={ERROR_FORBIDDEN_PATH} replace />
    } else {
        return children
    }
}