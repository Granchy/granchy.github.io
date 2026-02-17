import type { Post } from '../utils/posts'
import { formatDate } from '../utils/formatDate'
import styles from './PostPreview.module.css'

export default function PostPreview({ post }: { post: Post }) {
    // Fix image path: remove /public prefix if present (Vite serves public from root)
    const imagePath = post.previewImage
    console.log("imagePath", imagePath)
    return (
        <div className={styles.preview}>
            <div className={styles.content}>
                <h2>{post.title}</h2>
                <time className={styles.date}>{formatDate(post.date)}</time>
                {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
            </div>
            {imagePath && (
                <img 
                    src={imagePath} 
                    alt={post.title}
                    className={styles.previewImage}
                />
            )}
        </div>
    )
}