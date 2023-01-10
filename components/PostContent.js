import styles from '../styles/Post.module.scss';
import ReactMarkdown from 'react-markdown';

// UI component for main post content
export default function PostContent({ post }) {
  const createdAt = typeof post?.createdAt === 'number' ? new Date(post.createdAt) : post.createdAt.toDate();

  return (
    <div className={styles.post}>
      <h1 className={styles.postTitle}>{post?.title}</h1>
      <div className={styles.date}>
        { createdAt.toISOString().split('T')[0] }
      </div>
      <span className="text-sm">
        Written by{' '}{post.username}{' '}
      </span>
      <div className={styles.content}>
        <ReactMarkdown>{post?.content}</ReactMarkdown>
      </div>
    </div>
  );
}