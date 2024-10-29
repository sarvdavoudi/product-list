import { store } from "@/redux/store";
import { Provider } from "react-redux";
import "@/styles/globals.css";
import theme from "@/styles/theme/theme";
import { ThemeProvider } from "@mui/material";
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
