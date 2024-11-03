import { store } from "@/redux/store";
import { Provider } from "react-redux";
import "@/styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme, { darkTheme, lightTheme } from "@/styles/theme/index";
import { useState } from "react";
export default function App({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
