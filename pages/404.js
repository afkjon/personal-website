import Link from 'next/link';
import styles from '../styles/404.module.scss'

export default function Custom404() {
  return (
    <main>
      <div className={styles.container}>
        <h1>404 - That page does not seem to exist...</h1>
        <Link href="/" className={styles.link}>
          <div className={styles.title}>
            Home
          </div>
        </Link>
      </div>
    </main>
  );
}
