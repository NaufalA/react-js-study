import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { useTheme } from "./contexts/Theme";
import { authPages, coursePages, courseTypePages, errorPages } from "./pages";

function App() {
  const routes = [
    {
      path: "/",
      element: <h1 style={{ textAlign: "center" }}>Landing</h1>,
      index: true,
    },
    authPages,
    coursePages,
    courseTypePages,
    errorPages,
  ];

  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
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
