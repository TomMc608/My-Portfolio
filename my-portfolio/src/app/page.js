import styles from './styles/Home.module.css'
import Card from '../components/Layout/Card/Card'

export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your portfolio description',
}

export default function Home() {
  const sections = [
    { 
      title: 'Projects', 
      description: 'Explore my latest projects and applications.',
      linkText: 'See All Projects',
      link: '/projects'
    },
    { 
      title: 'Research', 
      description: 'Read about my research interests and publications.',
      linkText: 'View Research',
      link: '/research'
    },
    { 
      title: 'About Me', 
      description: 'Learn more about my background and skills.',
      linkText: 'More About Me',
      link: '/about'
    },
    { 
      title: 'Contact', 
      description: 'Get in touch with me for collaborations or inquiries.',
      linkText: 'Contact Me',
      link: '/contact'
    },
  ]

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <div className={styles.grid}>
          {sections.map((section, index) => (
            <Card 
              key={index} 
              title={section.title} 
              description={section.description}
              linkText={section.linkText}
              link={section.link}
            />
          ))}
        </div>
      </main>
    </div>
  )
}