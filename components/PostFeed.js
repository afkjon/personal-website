import Link from 'next/link';
import styles from '../styles/Blog.module.scss'

export default function PostFeed({ posts, admin }) {
  return (
    <div className={styles.postDeck}>
      {posts ?
        posts.map((post) => <PostItem post={post} key={post.slug} admin={admin} />)
        : null
      }
    </div>
  );
}

function PostItem({ post, admin = false }){
  // Naive method to calc word count and read time
  const wordCount = post?.content.trim().split(/\s+/g).length;
  const minutesToRead = (wordCount / 100 + 1).toFixed(0);

  return (
    <div className={styles.postCard }>
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
          <div className={styles.status}>Status: {post.published ? <span className={styles.success}>Published</span> : <span className={styles.danger}>Unpublished</span>}</div>
        </>
      )}
    </div>
  );
}
