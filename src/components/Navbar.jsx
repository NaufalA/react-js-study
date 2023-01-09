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
import { useTheme } from "../contexts/Theme";
import authMiddleware from "../redux/middlewares/authMiddleware";
import {
  AUTH_LOGIN_PATH,
  AUTH_REGISTER_PATH,
  COURSE_LIST_PATH,
  COURSE_TYPE_LIST_PATH,
} from "../shared/constants/paths";

const menu = [
  {
    label: "Login",
    path: AUTH_LOGIN_PATH,
    index: true
  },
  {
    label: "Register",
    path: AUTH_REGISTER_PATH,
  },
];

const loggedInMenu = [
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

  const { theme } = useTheme();

  return (
    <BootstrapNavbar style={{ backgroundColor: theme.accent, marginBottom: "2rem" }}>
      <Container>
        <NavbarBrand style={{ color: theme.foreground }}>Course</NavbarBrand>
        {isLoggedIn ? (
          <>
        <Nav>
          {loggedInMenu.map((m, i) => (
            <NavLink key={`nav-menu-${i}`} onClick={() => navigate(m.path)}>
              {m.label}
            </NavLink>
          ))}
        </Nav>
          <Button variant="outline-danger" size="sm" onClick={handleLogout}>
            LOGOUT
          </Button>
          </>
        ) : (
        <Nav>
          {menu.map((m, i) => (
            <NavLink key={`nav-menu-${i}`} onClick={() => navigate(m.path)} style={{ color: theme.highlight }}>
              {m.label}
            </NavLink>
          ))}
        </Nav>
        )}
      </Container>
    </BootstrapNavbar>
  );
}
