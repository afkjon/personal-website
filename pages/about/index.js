import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/About.module.scss';

export default function AboutPage() {
  return (
    <main>
      <section>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.container}>
          <p className={styles.paragraph}>Hello, I'm <strong>Jonathon Ho</strong>. I'm a software developer based in Toronto and recent graduate of <strong>Computer Science</strong> at York University. My current interests are in <strong>web development</strong>.</p>

          <p className={styles.paragraph}>In my spare time I love reading books and language learning. I've been studying <strong>Japanese</strong> for years now and hold an N1 on the <Link href="https://www.jlpt.jp/e/about/index.html"><strong>Japanese Language Profiency Test</strong></Link>. I've also attended the Bristol Translates Literary Summer School in 2022 hosted by the University of Bristol and will be finishing a 16-month certificate program in Japanese to English Translation from the University of Toronto in the next few months.</p>

          <p className={styles.paragraph}>Thanks for visiting my homepage!</p>
        </div>
      </section>
    </main>
  )
}