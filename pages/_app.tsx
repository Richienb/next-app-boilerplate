import type { AppProps } from "next/app"
import "../styles/globals.sass"

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
