import styles from './EmailPage.module.css';

const EmailPage = () => {
  return (
    <section className={styles.emailPage}>
      <div className={styles.emailPage__container}>
        <h3 className={styles.emailPage__title}>Stay in the loop</h3>
        <p className={styles.emailPage__text}>
          Be the first to know when new products drop and get behind-the-scenes
          content straight from Ugmonk’s founder.
        </p>
        <div className={styles.emailPage__containerInput}>
          <input
            className={styles.emailPage__input}
            type="email"
            name="email"
            //   value={}
            placeholder="Enter your email"
          />
          <button className={styles.emailPage__button} type="submit">
            {' '}
            →{' '}
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailPage;
