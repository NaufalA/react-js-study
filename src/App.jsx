import { useState } from "react";
import "./App.css";
import AddCourse from "./pages/AddCourse/AddCourse";
import CourseList from "./pages/CourseList/CourseList";
import courses from "./shared/staticData/courses";

function App() {
  const [nav, setNav] = useState("");

  return (
    <div className="App">
      {nav === "" && <CourseList courses={courses} onNavigate={setNav} />}
      {nav === "add-course" && <AddCourse onNavigate={setNav} />}
    </div>
  );
}

export default App;
