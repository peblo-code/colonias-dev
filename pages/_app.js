import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>ColoniasDev</title>
      <meta name="description" content="ColoniasDev - Un grupo de inigualables desarrolladores" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <Component {...pageProps} />
  </>
}

export default MyApp
