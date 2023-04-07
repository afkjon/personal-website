import { useState } from 'react';
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

  // Get recent Posts
  if (userDoc) {
    user = userDoc.data();
    const postsQuery = userDoc.ref
      .collection('posts')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc');
    posts = (await postsQuery.get()).docs.map(postToJSON);
  }

  return {
    // Passed to the page component as props
    props: { user, posts },
  };
}

export default function BlogPage(props) {
  const [posts, setPosts] = useState(props.posts.slice(0, 6))
  const [index, setIndex] = useState(0);

  const getNextPage = () => {
    try {
      console.log(...posts);
      setPosts([...posts, ...props.posts.slice(6 + 6 * index)]);
      setIndex(index + 1);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <Metatags title="Blog" />
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.container}>
        <ConditionalFeed />
      </div>
    </main>
  );
}

const ConditionalFeed = () => {
  if (posts.length < props.posts.length)
    return (
      <>
        <PostFeed posts={posts} />
        <button className={styles.button} onClick={getNextPage}>
          More Posts
        </button>
      </>);
  else if (posts.length > 0)
    return <PostFeed posts={posts} />;
  else
    return <div className={styles.error}>Sorry, there are no posts yet!</div>;
}
