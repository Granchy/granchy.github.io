import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { getAllPosts } from '../utils/api'
import styles from './Home.module.css'
import PostPreview from '../components/PostPreview'

export default function Home() {
  const posts = getAllPosts()
  console.log('posts', posts)
  return (
    <div>
      <Header />
      <div className={styles.container}>
        {posts.length === 0 ? (
          <p>No posts yet. Create a markdown file in the <code>src/posts</code> directory!</p>
        ) : (
          <ul className={styles.postList}>
            {posts.map((post) => (
              <li key={post.slug} className={styles.postItem}>
                <Link to={`/posts/${post.slug}`} className={styles.postLink}>
                  <PostPreview post={post} />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}