import type { AppProps } from "next/app"
import "../styles/globals.sass"

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
