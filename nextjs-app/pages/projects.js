import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Card from '../components/card.module.js'

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Card />
    </Layout>
  )
}
