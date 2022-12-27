import { useState } from "react";
import "./App.css";
import { AddCourse, CourseList, CourseTypeList } from "./pages";
import {
  COURSE_LIST_PATH,
  ADD_COURSE_PATH,
  COURSE_TYPE_LIST_PATH,
  ADD_COURSE_TYPE_PATH,
} from "./shared/constants/paths";

function App() {
  const [nav, setNav] = useState("/course-types");

  let Page;

  console.log(nav);
  switch (nav) {
    case COURSE_LIST_PATH:
    default:
      Page = CourseList;
      break;
    case ADD_COURSE_PATH:
      Page = AddCourse;
      break;
    case COURSE_TYPE_LIST_PATH:
      Page = CourseTypeList;
      break;
    case ADD_COURSE_TYPE_PATH:
      Page = AddCourse;
      break;
  }

  return (
    <div className="App">
      <Page onNavigate={setNav} />
    </div>
  );
}

export default App;
