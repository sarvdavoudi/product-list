import breakpoints from "@/styles/theme/breakpoints";
import { darkModePalette, lightModePalette } from "@/styles/theme/palette";
import typography from "@/styles/theme/typography";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { useSelector } from "react-redux";

//ThemeProvider is responsible for applying the current theme state (stored in Redux) across the entire application.
//SwitchTheme is solely responsible for toggling the theme mode by dispatching an action to Redux.
export const ThemeProvider = ({ children }) => {
  const themeMode = useSelector((state) => state.theme.mode);
  const themeOptions = {
    palette: themeMode === "light" ? lightModePalette : darkModePalette,
    typography,
    breakpoints,
  };
  const theme = createTheme(themeOptions);
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};
