import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Metatags from '../components/Metatags'
import ContactForm from '../components/ContactForm'
import photo from '../public/photo.jpg'
import projectPic1 from '../public/projectMockOne.png'

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
        <Image className={styles.image}
          alt="placeholder image"
          src={photo}
        />
        <div className={styles.break}></div>
      </section>

      {/* Skills Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.blockTitle}>Technical Skills</h1>
          <div className={styles.deck}>
            <div className={styles.card}>
              <h2>Frontend Technologies</h2>
              <ul>
                <li>React.js and Next.js</li>
                <li></li>
              </ul>
            </div>
            <div className={styles.card}>
              <h2>Backend Technologies</h2>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Firestore</li>
                <li>MongoDB</li>
                <li>RESTful APIs</li>
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
          {/* Project One }

          {/* Project Two */}
          <div className={styles.projectCard}>
            <div className={styles.projectCardContainer}>
              <div className={styles.projectDescription}>
              <h1 className={styles.projectTitle}>Portfolio Website</h1>
              <p>Built with Next.js and Firestore, this portfolio and blog with a responsive UI, featuring an admin sign in panel and post management system, is a vehicle to show off my recent work.</p>
                <div className={styles.projectTags}>
                  <ul>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Firebase</li>
                    <li>Cypress</li>
                  </ul>
                </div>
                <div className={styles.projectLinkContainer}>
                  <Link href="https://github.com/afkjon/personal-website">View on GitHub</Link>
                </div>
              </div>
              <Image 
                src={projectPic1}
                alt="A mockup of my project"
                width='auto'
                height={400}
                className={styles.projectThumbnail}
              />
            </div>
          </div>
        </div>
      </section>
      
      { /* Contact Form */ }
      <ContactForm />

    </main>
  )
}
