import "../styles/globals.css";
import { ToastContextProvider } from "../components/Notification/context/notification/notifContext";

function MyApp({ Component, pageProps }) {
  return (
    <ToastContextProvider>
      <Component {...pageProps} />;
    </ToastContextProvider>
  );
}

export default MyApp;
