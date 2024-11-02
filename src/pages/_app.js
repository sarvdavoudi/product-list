import { store } from "@/redux/store";
import { Provider } from "react-redux";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "@/styles/theme/index";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
