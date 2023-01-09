import Metatags from '../components/Metatags'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <Metatags title="Home Page"/>
      
      <section className={styles.hero}>
        <div>
          <h1 className={styles.greeting}>Hello, I&apos;m Jonathon!</h1>
          <div className={styles.blockTitle}>Software Developer</div>
          <div className={styles.blockTitle}>J-E Translator</div>
          <p className={styles.description}></p>
        </div>

        <img className={styles.image} 
          src="https://via.placeholder.com/300px"
        />
        <div className={styles.break}></div>
      </section>

      {/* Skills Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.blockTitle}>Skills</h1>
          <div className={styles.deck}>
            <div className={styles.card}>
              <h2>Frontend Technologies</h2>
              <ul>
                <li>React.js and Next.js</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h2>Backend Technologies</h2>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Firestore</li>
                <li>MongoDB</li>
                <li>Relational Databases</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h2>Other Tools</h2>
              <ul>
                <li>Figma</li>
                <li>Adobe Photoshop</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Projects */}
      <section className={styles.section + ' ' + styles.projectSection} id="projects">
        <div className={styles.projectContainer}>
          <h1 className={styles.blockTitle}>Recent Projects</h1>
          {/* Project One 
          <div className={styles.projectCard}>
            <div className={styles.projectCardContainer}>
              <img className={styles.projectThumbnail} 
                  src="https://via.placeholder.com/300"
              />
              <div className={styles.projectDescription}>
                <h1 className={styles.projectTitle}>Portfolio Website</h1>
                <p>Built with Next.js and Firestore, this portfolio and blog, featuring an admin sign in panel is a vehicle to show off my recent work.</p>
                <div className={styles.projectLinkContainer}>
                  <Link href="/">View on GitHub</Link>
                </div>
              </div>
            </div>
          </div>
          */}

          {/* Project Two */}
          <div className={styles.projectCard}>
            <div className={styles.projectCardContainer}>
              <div className={styles.projectDescription}>
              <h1 className={styles.projectTitle}>Portfolio Website (This Website!)</h1>
              <p>Built with Next.js and Firestore, this portfolio and blog, featuring an admin sign in panel is a vehicle to show off my recent work.</p>
                <div className={styles.projectLinkContainer}>
                  <Link href="https://github.com/afkjon/personal-website">View on GitHub</Link>
                </div>
              </div>
              <img className={styles.projectThumbnail} 
                  src="https://via.placeholder.com/300"
              />
            </div>
          </div>
        </div>
      </section>
      
      { /* Post Feed */ }

    </main>
  )
}
