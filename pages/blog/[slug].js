import Link from 'next/link';
import { useContext } from 'react';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { firestore, getUserWithUsername, postToJSON } from "../../lib/firebase";

import styles from '../../styles/Admin.module.scss';
import PostContent from '../../components/PostContent';
import Metatags from  '../../components/Metatags';
import { UserContext } from '../../lib/context';


export async function getStaticProps({ params }) {
  const { slug } = params;
  const userDoc = await getUserWithUsername('Jonathon');

  let post;
  let path;

  if (userDoc) {
    const postRef = userDoc.ref.collection('posts').doc(slug);
    post = postToJSON(await postRef.get());
    path = postRef.path;
  }

  return {
    props: { post, path },
    revalidate: 5000,

  }
}


export async function getStaticPaths() {
  // Improve using Admin SDK to select empty docs
  const snapshot = await firestore.collectionGroup('posts').get();

  const paths = snapshot.docs.map((doc) => {
    const { slug, username } = doc.data();
    return {
      params: { username, slug },
    };
  });

  return {
    // must be in this format:
    // paths: [
    //   { params: { username, slug }}
    // ],
    paths,
    fallback: 'blocking',
  };
}


export default function Post(props) {
  const postRef = firestore.doc(props.path);
  const [realtimePost] = useDocumentData(postRef);

  const post = realtimePost || props.post;

  const { user: currentUser } = useContext(UserContext);
  
  return (
    <main>
      <Metatags title={post.title} description={post.title} />
      <div className="blog-background">
        <div className="container">
          <section>
            <PostContent post={post} />
          </section>

          <aside className="card">
            { currentUser?.uid === post.uid && (
              <Link href={`/admin/${post.slug}`}>
                <button className={styles.button}>Edit Post</button>
              </Link>
            )}
          </aside>
        </div>
      </div>
    </main>
  )
}
