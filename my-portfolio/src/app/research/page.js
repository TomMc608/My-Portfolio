import styles from '../styles/Page.module.css'

export const metadata = {
  title: 'About Me - Your Name',
  description: 'Learn more about my background, skills, and how to contact me.',
}

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>
          Learn more about my background and skills.
        </p>
        {/* Add your about me content here */}
        
        <h2 id="contact" className={styles.sectionTitle}>Contact Me</h2>
        <p className={styles.description}>
          Get in touch with me for collaborations or inquiries.
        </p>
        {/* Add your contact information or form here */}
      </main>
    </div>
  )
}