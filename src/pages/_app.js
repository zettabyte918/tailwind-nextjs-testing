import { SessionProvider } from "next-auth/react";
import { ToastContextProvider } from "../components/Notification/context/notification/notifContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ToastContextProvider>
        <Component {...pageProps} />
      </ToastContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
