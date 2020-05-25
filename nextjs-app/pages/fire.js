import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import SampleData from '../components/sampleData'
import { loadFirebase } from '../lib/db';
const firebase = loadFirebase()

export default function Fire({ firebase }) {
  return (
    <Layout fire>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section>
        <SampleData />
      </section>
    </Layout>
  )
}