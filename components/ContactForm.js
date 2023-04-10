import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import styles from '../styles/ContactForm.module.scss';
import aboutStyles from '../styles/About.module.scss';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
    watch,
    getValues,
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    const values = getValues();

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      if (res.status === 200) {
        toast('Your message was sent successfully!', {
          style: {
            border: '2px solid blue',
          }
        });
        reset();
      }
    })
  }

  const onError = (data, e) => {
    e.preventDefault();
    let msg = '';

    if (data.name) {
      msg = data.name.message;
    } else if (data.email) {
      msg = data.email.message;
    } else {
      msg = data.message.message;
    }

    toast('Error: ' + msg, {
      style: {
        border: '2px solid rgba(250, 77, 77, 0.8)',
      }
    });
  }

  return (
    <>
      <h1 className={aboutStyles.title}>Contact</h1>
      <div className="container">

        <div className={styles.card}>
          <p className={styles.motivation}>Shoot me a message and I&apos;ll respond promptly!</p>

          <form onSubmit={handleSubmit(onSubmit, onError)} className={styles.form}>
            <div className={styles.details}>
              <label className={styles.label}>
                Name
                <input
                  className={styles.input}
                  {...register('name', {
                    required: { value: true, message: 'Your name is required.' },
                    maxLength: { value: 100, message: 'Your name is too long (Use a nickname)' },
                    minLength: { value: 3, message: 'Your name is too short' },
                  })} />
              </label>

              <label className={styles.label}>
                Email Address
                <input
                  className={styles.input}
                  {...register('email', {
                    required: { value: true, message: 'Please enter your email.' },
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format"
                    }
                  })} />
              </label>

              <label className={styles.label}>
                Message
                <textarea
                  className={styles.textarea}
                  {...register('message', {
                    required: { value: true, message: 'Please type a message' },
                    minLength: { value: 10, message: 'Your message is too short.' }
                  })} />
              </label>

              <button type="submit" className={styles.button}>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}