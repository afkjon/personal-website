import Metatags from '../../components/Metatags';
import styles from '../../styles/Blog.module.scss'
import { getUserWithUsername, postToJSON } from '../../lib/firebase';

import PostFeed from '../../components/PostFeed';

export async function getServerSideProps({ query }) {
  const username = 'Jonathon';

  const userDoc = await getUserWithUsername(username);

  // If no user, short circuit to 404 page
  if (!userDoc) {
    return {
      notFound: true,
    };
  }
  
  // JSON serializable data
  let user = null;
  let posts = null;

  if (userDoc) {
    user = userDoc.data();
    const postsQuery = userDoc.ref
      .collection('posts')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .limit(5);
    posts = (await postsQuery.get()).docs.map(postToJSON);
  }

  return {
    props: { user, posts }, // will be passed to the page component as props
  };
}

export default function BlogPage(props) {
  return(
    <main>
      <Metatags title="Blog" />
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.container}>
        <div className={styles.postDeck}>
          {/* Paginate posts limit 9/page */}
          {props.posts ?
            <PostFeed posts={props.posts} />
            :
            <div className={styles.error}>Sorry, there are no posts yet!</div>
          }
        </div>
      </div>
    </main>
  );
}