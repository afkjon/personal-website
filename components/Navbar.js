import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import Image from "next/image";
import { useState } from 'react';

// Top Navbar Component
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = (e) => {
    setNavbarOpen(!navbarOpen);
  }

  // Close the Navbar after clicking a link
  const handleLinkClick = (e) => {
    setNavbarOpen(false);
  }

  //todo: refactor for cleaner logic
  return (
    <nav className={navbarOpen ? styles.navbar + ' ' + styles.navOpen : styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image 
              src="/logo.png" 
              width={60}
              height={60}
              alt="logo"
            />
          </Link>
        </div>

        { /* Hamburger Menu */ }
        <button onClick={handleToggle} className={navbarOpen ? styles.navToggle + ' ' + styles.navOpen : styles.navToggle} aria-label="toggle navigation">
          <span className={styles.hamburger}></span>
        </button>

        <ul className={navbarOpen ? styles.navList + ' ' + styles.navOpen : styles.navList}>
          <li className={styles.navItem} onClick={handleLinkClick}>
            <Link href="/#projects">
              Projects
            </Link> 
          </li>
          <li className={styles.navItem} onClick={handleLinkClick}>
            <Link href="/about">
              About
            </Link>
          </li>
          <li className={styles.navItem} onClick={handleLinkClick}>
            <Link href="/blog">
              Blog
            </Link>
          </li>
          <li className={styles.navItem} onClick={handleLinkClick}>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}