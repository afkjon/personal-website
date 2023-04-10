import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Metatags from '../components/Metatags'
import ContactForm from '../components/ContactForm'
import photo from '../public/photo.png'
import projectPic1 from '../public/projectMockOne.png'
import projectPic2 from '../public/projectMockTwo.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <Metatags title="Home Page" />

      <section className={styles.hero}>
        <div>
          <h1 className={styles.greeting}>Hello, I&apos;m Jonathon! I&apos;m a...</h1>
          <div className={styles.blockTitle}>Software Developer</div>
          <div className={styles.blockTitle}>Japanese to English Translator</div>
          <p className={styles.description}>I am currently looking for work!</p>
        </div>
        <Image className={styles.image}
          alt="placeholder image"
          src={photo}
          width={300}
          height={300}
        />
        <div className={styles.break}></div>
      </section>

      {/* Skills Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.blockTitle}>Technical Skills</h1>
          <div className={styles.deck}>
            <div className={styles.card}>
              <h2>Programming Languages</h2>
              <ul>
                <li>Typescript</li>
                <li>Java</li>
                <li>C#</li>
                <li>Python</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h2>Technologies</h2>
              <ul>
                <li>React and Next.js</li>
                <li>Vanilla CSS, Tailwind CSS, Sass, jQuery</li>
                <li>tRPC, GraphQL, REST APIs</li>
                <li>SQL/NoSQL Databases</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h2>Other Tooling</h2>
              <ul>
                <li>Git and GitHub</li>
                <li>VS Code & Extensions</li>
                <li>Docker</li>
                <li>Figma & Adobe Photoshop</li>
                <li>Excel VBA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className={styles.section + ' ' + styles.projectSection} id="projects">
        <div className={styles.projectContainer}>
          <h1 className={styles.blockTitle}>Recent Projects</h1>
          {/* Project One */}
          <div className={styles.projectCard}>
            <div className={styles.projectCardContainer}>
              <Image
                src={projectPic2}
                alt="A mockup of define!"
                width='auto'
                height={400}
                className={styles.projectThumbnail}
              />
              <div className={styles.projectDescription}>
                <h1 className={styles.projectTitle}>Define!</h1>
                <p>A Japanese to English definition database which operates as a forum. Users can post their own definitions, comment on other definitions, and upvote or downvote definitions. </p>
                <div className={styles.projectTags}>
                  <ul>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>tRPC</li>
                    <li>Prisma</li>
                    <li>Clerk</li>
                  </ul>
                </div>
                <div className={styles.projectLinkContainer}>
                  <Link href="https://define.jonathonho.ca">Live demo</Link>{` `}
                  <Link href="https://github.com/afkjon/tl-forum">View on Github</Link>
                </div>
              </div>
            </div>
          </div>

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
                alt="A mockup of my blog"
                width='auto'
                height={400}
                className={styles.projectThumbnail}
              />
            </div>
          </div>
        </div>
      </section>

      { /* Contact Form */}
      <ContactForm />

    </main>
  )
}
