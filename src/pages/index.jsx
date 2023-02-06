import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { FAQ } from '@/components/FAQ'

export default function Home() {
  return (
    <>
      <Head>
        <title>KlosingTime - Louis Guitton</title>
        <meta
          name="description"
          content="KlosingTime is the leaving party organised after 4.5 years of work at OneFootball."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Speakers />
        <Schedule />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
