import { Route, Routes } from "react-router-dom";
import "./App.css";
import { authPages, coursePages, courseTypePages, errorPages } from "./pages";

function App() {
  const routes = [
    {
      path: "/",
      element: <h1>Landing</h1>,
      index: true,
    },
    authPages,
    coursePages,
    courseTypePages,
    errorPages
  ];

  return (
    <div className="App">
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
