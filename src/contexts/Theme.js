import { createContext, useContext, useMemo, useState } from "react";

export const ThemeContext = createContext(undefined);

export const ThemeProvider = (props) => {
  const { defaultTheme, themes } = props;

  const [themeName, setThemeName] = useState(defaultTheme || "light");

  const value = useMemo(
    () => ({
      themeName,
      theme: themes[themeName],
      setThemeName,
    }),
    [themeName, themes]
  );

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
