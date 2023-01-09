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
          <li><SocialIcon url={process.env.TWITTER_URL} bgColor="#FEFEFE" /></li>
          <li><SocialIcon url={process.env.GITHUB_URL} bgColor="#FEFEFE" /></li>
          <li><SocialIcon url={process.env.LINKEDIN_URL} bgColor="#FEFEFE" /></li>
        </ul>
        <div className={styles['footer-copyright']}>Jonathon Ho © 2023</div>
      </div>
    </footer>
  )
}