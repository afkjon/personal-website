import aboutStyles from "../../styles/About.module.scss";
import styles from "../../styles/Projects.module.scss";

export default function ProjectsPage() {
  return (
    <main>
      <section className={styles.container}>
        <h1 className={aboutStyles.title}>Projects</h1>
        <div className={styles.grid} >
          <div className={styles['card-container']}>
            <h2 className={styles['card-title']}>Placeholder title</h2>
            <img src="https://via.placeholder.com/1080x600" className={styles.thumbnail} />
            <div className={styles.description}>Placeholder description</div>
          </div>
        </div>
      </section>
    </main>    
  );
}