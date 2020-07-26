import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>MahamBatool</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I’m a Civil Engineering Candidate, an aspiring interior designer who seems to love Architecture and designs. As a published author, my work and writings have been featured in the NoteWorthy Journal at Medium.</p>

      </section>
      <h1>Blog Posts <Link href="/posts/first-post"><a>Click Here!</a></Link></h1>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
