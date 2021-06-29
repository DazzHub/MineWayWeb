import Head from 'next/head'

import Navbar from '../modules/complements/navbar/Navbar'
import Footer from '../modules/complements/footer/Footer'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
  <>
  
    <Head>
      <title>MineWay | Server Network Minecraft </title>
      <link rel="icon" href="/favicon.ico" />      
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"/>
    </Head>

    <Navbar />

    <Component {...pageProps} />

    <Footer />

  </>
  )
}

export default MyApp
