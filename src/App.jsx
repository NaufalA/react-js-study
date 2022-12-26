import { useState } from "react";
import "./App.css";
import AddCourse from "./pages/AddCourse/AddCourse";
import CourseList from "./pages/CourseList/CourseList";

function App() {
  const [nav, setNav] = useState("");

  let Page;

  switch (nav) {
    case "":
    default:
      Page = CourseList;
      break;
    case "add-course":
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
