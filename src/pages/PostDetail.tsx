import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getPostBySlug } from '../utils/api'
import { formatDate } from '../utils/formatDate'
import styles from './PostDetail.module.css'
import headerStyles from '../components/Header.module.css'

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : null

  if (!post) {
    return (
      <div>
        <div className={styles.container}>
          <h1>Post not found</h1>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className={styles.container}>
        <article className={styles.article}>
          <header className={styles.header}>
            <h1>{post.title}</h1>
            <time className={styles.date}>{formatDate(post.date)}</time>
            <nav className={headerStyles.navContainer}>
              <Link to="/" className={headerStyles.navLink}>home</Link>
              <Link to="/about" className={headerStyles.navLink}>about</Link>
            </nav>
          </header>
          <div className={styles.content}>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  )
}
