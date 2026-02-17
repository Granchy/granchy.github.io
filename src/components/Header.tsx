import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>justin granchelli</h1>
      <h2 className={styles.subtitle}>blog</h2>
      <nav className={styles.navContainer}>
        <Link to="/" className={styles.navLink}>home</Link>
        <Link to="/about" className={styles.navLink}>about</Link>
      </nav>
    </header>
  )
}
