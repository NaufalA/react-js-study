import { useState } from "react";
import "./App.css";
import { Navbar } from "./components";
import {
  AddCourse,
  AddCourseType,
  CourseList,
  CourseTypeList,
  EditCourse,
  EditCourseType,
} from "./pages";
import {
  COURSE_LIST_PATH,
  ADD_COURSE_PATH,
  COURSE_TYPE_LIST_PATH,
  ADD_COURSE_TYPE_PATH,
  EDIT_COURSE_PATH,
  EDIT_COURSE_TYPE_PATH,
} from "./shared/constants/paths";

function App() {
  const [nav, setNav] = useState("/course-types");

  let Page;

  switch (nav) {
    case COURSE_LIST_PATH:
    default:
      Page = CourseList;
      break;
    case ADD_COURSE_PATH:
      Page = AddCourse;
      break;
    case EDIT_COURSE_PATH:
      Page = EditCourse;
      break;
    case COURSE_TYPE_LIST_PATH:
      Page = CourseTypeList;
      break;
    case ADD_COURSE_TYPE_PATH:
      Page = AddCourseType;
      break;
    case EDIT_COURSE_TYPE_PATH:
      Page = EditCourseType;
      break;
  }

  return (
    <div className="App">
      <Navbar onNavigate={setNav} />
      <Page onNavigate={setNav} />
    </div>
  );
}

export default App;
