import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from '../components/hero.module.js'

export default function Signup() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Hero />
    </Layout>
  )
}
