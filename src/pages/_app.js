import { SessionProvider } from "next-auth/react";
import { ToastContextProvider } from "../components/Notification/context/notification/notifContext";
import "../styles/globals.css";
import { Notification } from "../components";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ToastContextProvider>
        <Notification />
        <Component {...pageProps} />
      </ToastContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
