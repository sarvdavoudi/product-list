import { store } from "@/redux/store";
import "@/styles/globals.css";
import {ThemeProvider} from "@/styles/theme/index";
import { Provider } from "react-redux";
const App = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App; 
