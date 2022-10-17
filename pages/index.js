import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ColoniasDev - Home</title>
        <meta name="description" content="ColoniasDev - Un grupo de inigualables desarrolladores" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
