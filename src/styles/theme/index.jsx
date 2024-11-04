// theme/index.js
import breakpoints from "@/styles/theme/breakpoints"; // Import breakpoints
import { darkModePalette, lightModePalette } from "@/styles/theme/palette";
import typography from "@/styles/theme/typography"; // Import typography
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { useSelector } from "react-redux";

export const ThemeProvider = ({ children }) => {
  const themeMode = useSelector((state) => state.theme.mode); // Get the current theme mode from Redux

  // Define the theme options based on the current theme mode
  const themeOptions = {
    palette: themeMode === "light" ? lightModePalette : darkModePalette,
    typography, // Use the imported typography
    breakpoints, // Use the imported breakpoints
  };

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};
