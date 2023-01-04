import {
  Button,
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  NavbarBrand,
  NavLink,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authMiddleware from "../redux/middlewares/authMiddleware";
import {
  AUTH_LOGIN_PATH,
  COURSE_LIST_PATH,
  COURSE_TYPE_LIST_PATH,
} from "../shared/constants/paths";

const menu = [
  {
    label: "Course",
    path: COURSE_LIST_PATH,
  },
  {
    label: "Course Type",
    path: COURSE_TYPE_LIST_PATH,
  },
];

export default function Navbar(props) {
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authMiddleware.logout()).then(() => {
      navigate(AUTH_LOGIN_PATH);
    });
  }

  return (
    <BootstrapNavbar>
      <Container>
        <NavbarBrand>Course</NavbarBrand>
        <Nav>
          {menu.map((m, i) => (
            <NavLink key={`nav-menu-${i}`} onClick={() => navigate(m.path)}>
              {m.label}
            </NavLink>
          ))}
        </Nav>
        {isLoggedIn && (
          <Button variant="outline-danger" size="sm" onClick={handleLogout}>
            LOGOUT
          </Button>
        )}
      </Container>
    </BootstrapNavbar>
  );
}
