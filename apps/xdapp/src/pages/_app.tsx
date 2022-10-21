import "../styles/global.css"

import type { AppProps } from "next/app"

import { t } from "../modules/trpc/web"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default t.withTRPC(MyApp)
