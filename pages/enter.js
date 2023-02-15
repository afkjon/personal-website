import { auth, firestore, googleAuthProvider } from '../lib/firebase';
import { useContext, useState, useEffect, useCallback } from 'react';
import { UserContext } from '../lib/context';
import toast from 'react-hot-toast';
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Enter.module.scss';

import debounce from 'lodash.debounce';

export default function EnterPage({ }) {
  const { user, username } = useContext(UserContext);

  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />
  return (
    <main>
      <div className={"container " + styles.shift}>
      {user ? 
        !username ? 
          <>
          <UsernameForm />
          <SignOutButton />
          </> : 
          <>
            <SignOutButton />
            <Link href="/admin" className={styles.link}><button className={styles.button}>Admin Page</button></Link>
          </>
        : 
        <SignInButton />
      }
      </div>
    </main>
  );
}

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    try { await auth.signInWithPopup(googleAuthProvider);
    } catch(error)  {
      toast('Sign in failed!');
    }
  };

  return (
    <>
      <h2>Please login!</h2>
      <button className="btn-google" onClick={signInWithGoogle}>
        <Image
          src={'/google.png'}
          alt='Google logo'
          width={30}
          height={30}
        /> Sign in with Google
      </button>
    </>
  );
}

// Sign out button
function SignOutButton() {
  return <button className={styles.button} onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm() {
  const [formValue, setFormValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user, username } = useContext(UserContext);
  
  const onSubmit = async(e) => {
    e.preventDefault();

    // Create refs for both documents
    const userDoc = firestore.doc(`users/${user.uid}`);
    const usernameDoc = firestore.doc(`usernames/${formValue}`);

    // Commit both docs together as a batch write.
    const batch = firestore.batch();
    batch.set(userDoc, 
      { username: formValue, 
        photoURL : user.photoURL, 
        displayName: user.displayName
      }
    );

    batch.set(usernameDoc, {uid: user.uid});

    await batch.commit();
  };

  const onChange = (e) => {
    // Force form value typed in form to match correct format
    const val = e.target.value;
    const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

    // Only set form value if length is < 3 OR it passes regex
    if (val.length < 3) {
      setFormValue(val);
      setLoading(false);
      setIsValid(false);
    }

    if (re.test(val)) {
      setFormValue(val);
      setLoading(true);
      setIsValid(false);
    }
  }

  // Hit the database for username match after each debounced change
  // useCallback is required for debounce to work
  const checkUsername = useCallback(
    debounce(async (username) => {
      if (username.length >= 3) {
        const ref = firestore.doc(`usernames/${username}`);
        const { exists } = await ref.get();
        console.log('Firestore read executed!');
        setIsValid(!exists);
        setLoading(false);
      }
    }, 500),
    []
  );

  useEffect(() => {
    checkUsername(formValue);
  }, [formValue]);

  return (
    !username && (
    <section>
      <h3>Choose Username</h3>
      <form onSubmit={onSubmit}>
        <input className={styles.input} name="username" placeholder='myusername' value={formValue} onChange={onChange} />
        <UsernameMessage username={formValue} isValid={isValid} loading={loading} />
          <button type="submit" className={styles.button} disabled={!isValid}>
            Choose
          </button>
        </form>
      </section>
    )
  );
}

function UsernameMessage({ username, isValid, loading }) {
  if (loading) {
    return <p>Checking...</p>;
  } else if (isValid) {
    return <p className="text-success">{username} is available!</p>;
  } else if (username && !isValid) {  
    return <p className="text-danger">That username is taken or cannot be used!</p>;
  } else {
    return <p></p>;
  }
}
