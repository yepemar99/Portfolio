// pages/_document.js

import { ColorModeScript } from "@chakra-ui/react";
import { Head, Html, Main, NextScript } from "next/document";
import { theme } from "../theme/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title key="titleTag">Portfolio</title>
      </Head>
      <body>
        {/* 👇 Here's the script */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
