import styles from '../styles/Post.module.scss';
import ReactMarkdown from 'react-markdown';

// UI component for main post content
export default function PostContent({ post }) {
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const createdAt = typeof post?.createdAt === 'number' ? new Date(post.createdAt) : post.createdAt.toDate();

  return (
    <div className={styles.post}>
      <h1 className={styles.postTitle}>{post?.title}</h1>
      <div>
        <span className={styles.date}>
          { createdAt.toLocaleDateString("en-US", dateOptions) }
        </span>
      </div>

      <div className={styles.content}>
        <ReactMarkdown>{post?.content}</ReactMarkdown>
      </div>
    </div>
  );
}