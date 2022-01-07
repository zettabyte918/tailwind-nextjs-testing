import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { Router, useRouter } from "next/router";
import NProgress from "nprogress";
import { Sidebar, Notification, ToastContextProvider } from "../components";
import Head from "next/head";

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  const router = useRouter();

  useEffect(() => {
    Router.events.on("routeChangeStart", () => NProgress.start());
    Router.events.on("routeChangeComplete", () => NProgress.done());
    Router.events.on("routeChangeError", () => NProgress.done());

    return () => {
      Router.events.off("routeChangeStart", () => NProgress.start());
      Router.events.off("routeChangeComplete", () => NProgress.done());
      Router.events.off("routeChangeError", () => NProgress.done());
    };
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <SessionProvider session={session}>
        <ToastContextProvider>
          <Notification />
          {router.pathname !== "/auth/signin" ? (
            <Sidebar>
              <Component {...pageProps} />
            </Sidebar>
          ) : (
            <Component {...pageProps} />
          )}
        </ToastContextProvider>
      </SessionProvider>
    </>
  );
};

export default MyApp;
