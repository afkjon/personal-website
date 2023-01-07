import Link from 'next/link'
import styles from '../styles/Footer.module.scss'
import { SocialIcon } from 'react-social-icons'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles['footer-nav-list']}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <ul className={styles['footer-social-list']}>
          <li><SocialIcon url="https://twitter.com/translatorjon" bgColor="#FEFEFE" /></li>
          <li><SocialIcon url="https://github.com/afkjon" bgColor="#FEFEFE" /></li>
          <li><SocialIcon url="linkedin.com/in/jonathonho/" bgColor="#FEFEFE" /></li>
        </ul>
        <div className={styles['footer-copyright']}>Jonathon Ho © 2023</div>
      </div>
    </footer>
  )
}