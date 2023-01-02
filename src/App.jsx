import { Outlet, Route, Routes } from "react-router-dom";
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
  COURSE_PATH,
  COURSE_TYPE_PATH,
} from "./shared/constants/paths";

function App() {
  const routes = [
    {
      path: "/",
      element: <h1>Landing</h1>,
      index: true,
    },
    {
      path: COURSE_PATH,
      element: (
        <>
          <h1>Course</h1>
          <Outlet />
        </>
      ),
      children: [
        {
          path: COURSE_LIST_PATH,
          element: <CourseList />,
        },
        {
          path: ADD_COURSE_PATH,
          element: <AddCourse />,
        },
        {
          path: `${EDIT_COURSE_PATH}/:id`,
          element: <EditCourse />,
        },
      ],
    },
    {
      path: COURSE_TYPE_PATH,
      element: (
        <>
          <h1>Course Type</h1>
          <Outlet />
        </>
      ),
      children: [
        {
          path: COURSE_TYPE_LIST_PATH,
          element: <CourseTypeList />,
        },
        {
          path: ADD_COURSE_TYPE_PATH,
          element: <AddCourseType />,
        },
        {
          path: `${EDIT_COURSE_TYPE_PATH}/:id`,
          element: <EditCourseType />,
        },
      ],
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {routes.map((r, i) => (
          <Route
            key={`route-${i}`}
            path={r.path}
            element={r.element}
            index={r.index}
          >
            {r.children?.map((rc, j) => (
              <Route
                key={`route-${i}-${j}`}
                path={rc.path}
                element={rc.element}
                index={rc.index}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
