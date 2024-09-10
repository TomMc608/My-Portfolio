import styles from '../styles/Page.module.css'

export const metadata = {
  title: 'Projects - Your Name',
  description: 'Explore my latest projects and applications.',
}

export default function Projects() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>My Projects</h1>
        <p className={styles.description}>
          Here you can find information about my latest projects and applications.
        </p>
        {/* Add your projects content here */}
      </main>
    </div>
  )
}