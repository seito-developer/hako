import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import stylesLayout from '../components/layout.module.scss'
import Card from '../components/card.module.js'

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <dic className={stylesLayout.container}>
        <Card />
      </dic>
    </Layout>
  )
}
