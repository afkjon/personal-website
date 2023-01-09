import Metatags from '../../components/Metatags';
import { useState } from 'react'
import styles from '../../styles/Blog.module.scss'

export default function BlogPage() {
  // Fetch firebase db for posts
  const [posts, setPosts] = useState(null);

  return(
    <main>
      <Metatags title="Blog" />
      <div className={styles.container}>
        <h1 className={styles.title}>Recent Posts</h1>
        <div className={styles.postCard}>
          {/* Paginate posts limit 9/page */}
          {posts ?
            (post) => 
            <div className={styles.thumbTitle}>
              <h1>{post.title}</h1>
            </div>
            :
            <div className={styles.error}>Sorry, there are no posts yet!</div>
          }
        </div>
      </div>
    </main>
  );
}