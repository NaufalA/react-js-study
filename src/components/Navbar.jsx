import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  NavbarBrand,
  NavLink,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
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
  const onNavigate = useNavigate();

  return (
    <BootstrapNavbar>
      <Container>
        <NavbarBrand>Course</NavbarBrand>
        <Nav>
          {menu.map((m, i) => (
            <NavLink key={`nav-menu-${i}`} onClick={() => onNavigate(m.path)}>
              {m.label}
            </NavLink>
          ))}
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
}
