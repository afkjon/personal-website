import Metatags from '../../components/Metatags';
import Link from 'next/link';
import styles from '../../styles/About.module.scss';

export default function AboutPage() {
  return (
    <main>
      <Metatags title="About Me" />

      <section>
        <h1 className={styles.title}>About Me</h1>
        <div className="container">
          <p className={styles.paragraph}>Hello! I&apos;m <strong>Jonathon Ho</strong>. 
          I&apos;m a software engineer, freelance interpreter, and translator currently based in Tokyo. 
          My interests are in <strong>web development</strong> and cloud infrastructure. 
          I currently work as a <em>bridge software engineer</em>, which is a position where I juggle 
          multiple hats.
          </p>
          <p className={styles.paragraph}>I love reading books, writing, and watching movies in my spare time.</p>

          <p className={styles.paragraph}><strong>Prevous Work:</strong></p>
          <ul className={styles.list}>
            <li>Interpreter for <Link href="https://bitsummit.org/en/">BitSummit 2023</Link></li>
          </ul>
        </div>
      </section>
    </main>
  )
}