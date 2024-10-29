import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: " hsl(14, 94%, 54%)",
      main: "hsl(14, 86%, 42%)",
      dark: "hsl(14, 88%, 30%)",
      contrastText: "#fff",
    },
    secondary: {
      main: "hsl(20, 50%, 98%)",
      dark: "hsl(13, 31%, 94%)",
      contrastText: "#000",
    },
    third: {
      light: " hsl(14, 25%, 72%)",
      main: "hsl(7, 20%, 60%)",
      dark: " hsl(12, 20%, 44%)",
    },
  },
  typography: {
    fontFamily: "RedHatText",
    fontSize: 15,
  },
});
export default theme;
