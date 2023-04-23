import Head from 'next/head'
import Image from 'next/image'
import { Inter, Roboto } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className={`${styles.main} ${inter.className}`}>
      <div>
      <div>
        <p className={`${styles.h1} ${roboto.className}`}>Alexander Diaz</p>
      </div>
      <div style={{textAlign: "center"}}>
        <p className={inter.className}>Fullstack developer.</p>
      </div>
      </div>
    </div>
  )
}