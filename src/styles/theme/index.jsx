// theme/index.js
import breakpoints from "@/styles/theme/breakpoints";
import { darkModePalette, lightModePalette } from "@/styles/theme/palette";
import typography from "@/styles/theme/typography";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { createContext, useContext, useMemo, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  const isLight = themeMode === "light";

  // Memoize the theme options based on the current theme mode
  const themeOptions = useMemo(
    () => ({
      palette: isLight ? lightModePalette : darkModePalette,
      typography,
      breakpoints,
    }),
    [isLight]
  );

  // Create theme using the memoized options
  const theme = useMemo(() => createTheme(themeOptions), [themeOptions]);

  // Function to toggle theme
  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
