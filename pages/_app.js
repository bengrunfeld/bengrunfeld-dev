import Head from "next/head";
import App from "next/app";
import { ThemeProvider } from "styled-components";

import { theme } from "../theme";
import "../theme/globals.css";
import "../theme/formik.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Alata&family=Roboto&display=swap"
            rel="stylesheet"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
