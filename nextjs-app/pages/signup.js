import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
// import styles from '../components/icon.module.scss'
import Button from '../components/button.module.js'
import Input from '../components/input.module.js'
// import classNames from 'classnames'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGoogle } from '@fortawesome/free-brands-svg-icons'


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Input type="name" />
      <Button color="google" size="large">
        {/* <FontAwesomeIcon icon={faGoogle} className={classNames(styles.icon, styles.large, styles.google)} /> */}
        Login with Google
      </Button>
    </Layout>
  )
}
