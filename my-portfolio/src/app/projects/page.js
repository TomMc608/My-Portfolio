import Link from 'next/link';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    id: 'cloud-ai-model',
    title: 'Cloud AI Model',
    description: 'An AI model for image classification',
    link: '/projects/cloud-ai-model'
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My AI Projects</h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <Link href={project.link} key={project.id} className={styles.card}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}