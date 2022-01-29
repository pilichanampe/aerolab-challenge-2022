import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
// import styles from '../styles/Home.module.css'

export default function Home() {
  const Pruebita = styled.p`
    color: ${props => props.theme.disabled};
  `

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Pruebita>Holitas</Pruebita>



      </main>

    </div>
  )
}
