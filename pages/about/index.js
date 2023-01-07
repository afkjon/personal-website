import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/About.module.scss';

export default function AboutPage() {
  return (
    <main>
      <section>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.container}>
          <p className={styles.paragraph}>Hello, I'm <strong>Jonathon Ho</strong>. I'm a recent graduate of <strong>Computer Science</strong> at York University.
            My interests are in <strong>web development</strong> and cross-platform application development.</p>

          <p>In my spare time I love reading books and language learning. I've been studying <strong>Japanese</strong> for years now and hold an N1 on the <Link href="https://www.jlpt.jp/e/about/index.html"><strong>Japanese Language Profiency Test</strong></Link>. I've also attended the Bristol Translates Literary Summer School in 2022 hosted by the University of Bristol. I will also be finishing a 16-month certificate program in Japanese to English Translation from the University of Toronto in the next few months.</p>
        </div>
      </section>
    </main>
  )
}