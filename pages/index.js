import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout, { SiteTitle } from "../components/Layout";

import Link from "next/link";
import utilStyle from "../styles/utils.module.css";
import { getPostsData } from "../lib/post";

export async function getStaticProps() {
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{SiteTitle}</title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p>私はNextjsエンジニアです/好きなフレームワークはNext.jsです</p>
      </section>

      <section>
        <h2 className={`${utilStyle.headingMd} center-text`}>
          📝エンジニアのブログ
        </h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage} />
              </Link>
              <Link legacyBehavior href={`/posts/${id}`}>
                <a className={utilStyle.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyle.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
