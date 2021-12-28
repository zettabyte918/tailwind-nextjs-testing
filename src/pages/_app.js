import "../styles/globals.css";
import { ToastContextProvider } from "../context/notification/notifContext";

function MyApp({ Component, pageProps }) {
  return (
    <ToastContextProvider>
      <Component {...pageProps} />;
    </ToastContextProvider>
  );
}

export default MyApp;
