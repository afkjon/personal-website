import Metatags from '../components/Metatags'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Metatags title="Home Page"/>
      
      <section className={styles.hero}>
        <div>
          <h1 className={styles.greeting}>Hello, I'm Jonathon.</h1>
          <div className={styles.profession}>A Software Developer</div>
          <p className={styles.description}>Passionate about web design and UI</p>
        </div>

        <img className={styles.image} 
          src="https://via.placeholder.com/300"
        />
        <div className={styles.break}></div>
        <div>asdf</div>
      </section>

      {/* Skills Section */}

      {/* Recent Projects */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.profession}>Recent Projects</h1>
          <p>Recnt projects</p>
        </div>
      </section>
      { /* Post Feed */ }
      
    </main>
  )
}
