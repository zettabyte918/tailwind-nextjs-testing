import { SessionProvider } from "next-auth/react";
import { ToastContextProvider } from "../components/Notification/context/notification/notifContext";
import "../styles/globals.css";
import { Notification } from "../components";
import Router from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
