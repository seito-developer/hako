import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import stylesLayout from '../components/layout.module.scss'
import Card from '../components/card.module.js'
import CardList from '../components/cardList.module.js'

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={stylesLayout.container}>
        <CardList>
          <Card state="isClose" />
          <Card state="isClose" />
          <Card state="isClose" />
        </CardList>
      </div>
    </Layout>
  )
}
