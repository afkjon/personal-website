import Link from 'next/link';
import styles from '../styles/Blog.module.scss'

export default function PostFeed({ posts, admin }) {
  return posts ? posts.map((post) => <PostItem post={post} key={post.slug} admin={admin} />) : null;
}

function PostItem({ post, admin = false }){
  // Naive method to calc word count and read time
  const wordCount = post?.content.trim().split(/\s+/g).length;
  const minutesToRead = (wordCount / 100 + 1).toFixed(0);

  return (
    <div className={styles.postCard}>
      <strong>By {post.username}</strong>
      <Link href={`/blog/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
    
      <div>
        <span>
          {minutesToRead} min read
        </span>
      </div>

       {/* If admin view, show extra controls for user */}
       {admin && (
        <>
          <Link href={`/admin/${post.slug}`}>
            <button className={styles.button}>Edit</button>
          </Link>
          {post.published ? <p className={styles.success}>Live</p> : <p className={styles.danger}>Unpublished</p>}
        </>
      )}
    </div>
  );
}
