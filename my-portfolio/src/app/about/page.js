import styles from '../styles/Page.module.css'

export const metadata = {
  title: 'About Me - Your Name',
  description: 'Learn more about my background and skills.',
}

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.description}>Hi, I'm [Your Name]. Here's a bit about my background and skills.</p>
      {/* Add more information about yourself here */}
    </div>
  )
}