import Link from 'next/link'
import styles from './Card.module.css'

export default function Card({ title, description, linkText, link }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={link}>
        <span className={styles.button}>{linkText}</span>
      </Link>
    </div>
  )
}