import Head from 'next/head'
import Link from 'next/link'
import Button from '../../components/button.module'
import Input from '../../components/input.module'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      
      <Input type="email"/>
      <Input type="password"/>

      <Button mod="primary">New project</Button>
      <Button mod="info">New project</Button>

      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
