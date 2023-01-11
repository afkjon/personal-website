import styles from '../../styles/Admin.module.scss';
import AuthCheck from '../../components/AuthCheck';
import { firestore, auth, serverTimestamp } from '../../lib/firebase';

import { useState } from 'react';
import { useRouter } from 'next/router';

import { useDocumentData } from 'react-firebase-hooks/firestore';
import { useForm } from 'react-hook-form';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function AdminPostEdit(props) {
  return (
    <AuthCheck>
        <PostManager />
    </AuthCheck>
  );
}

function PostManager() {
  const [preview, setPreview] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  const postRef = firestore.collection('users').doc(auth.currentUser.uid).collection('posts').doc(slug);
  const [post] = useDocumentData(postRef);

  const handleDelete = () => {
    try {
      postRef.get()
        .then(function(querySnapshot) {
          querySnapshot.ref.delete();
        });
      toast("Post deleted!");
      router.push('/admin');
     } catch (error) {
      toast(error);
     }
  }

  return (
    <main className={styles.container}>
      {post && (
        <>
          <section className={styles.section}>
            <h1>{post.title}</h1>
            <p><strong>Slug:</strong> {post.slug}</p>

            <PostForm postRef={postRef} defaultValues={post} preview={preview} />
          </section>

          <aside>
            <h3 className={styles.toolsLabel}>Tools:</h3>
            <div className={styles.tools}>
              <button className={styles.button} onClick={() => setPreview(!preview)}>{preview ? 'Edit' : 'Preview'}</button>
              <Link href={`/blog/${post.slug}`}>
                <button className={styles.button}>Live view</button>
              </Link>
              <button className={styles.button} onClick={() => {
                if (window.confirm('Are you sure you want to delete this post?'))
                  handleDelete();
              }}>Delete Post</button>
            </div>
          </aside>
        </>
      )}
    </main>
  );
}

function PostForm({ defaultValues, postRef, preview }) {
  const { 
    register,
    handleSubmit, 
    formState: { errors, isValid, isDirty },
    reset, 
    watch,
  } = useForm({ defaultValues, mode: 'onChange' });

  const updatePost = async ({ content, published }) => {
    await postRef.update({
      content,
      published,
      updatedAt: serverTimestamp(),
    });

    reset({ content, published });

    toast.success('Post updated successfully!')
  };

  return (
    <form className={styles.postform} onSubmit={handleSubmit(updatePost)}>
      {preview && (
        <div className="card">
          <ReactMarkdown>{watch('content')}</ReactMarkdown>
        </div>
      )}

      <div className={preview ? styles.hidden : styles.controls}>
  
        <textarea className={styles.textarea} name="content" {...register('content', {
            required:  { value: true, message:  'Content is required' },
            maxLength: { value: 20000, message: 'Content is too long' },
            minLength: { value: 10, message: 'Content is too short' },
          })}>
        </textarea>
        {errors.content && <p className="text-danger">{errors.content.message}</p>}

        <fieldset className={styles.fieldset}>
          <label>Published</label>
          <input className={styles.checkbox} type="checkbox" {...register('published')} />
        </fieldset>

        <button type="submit" className={styles.button} disabled={!isDirty || !isValid}>
          Save Changes
        </button>
      </div>
    </form>
  );
}
