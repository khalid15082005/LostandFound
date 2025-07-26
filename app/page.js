import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to the Lost &amp; Found Log System
      </h1>
      <p className={styles.description}>
        A centralized place to report, search, and recover lost or found items.
      </p>
      <div className={styles.buttonGroup}>
        <a href="/lost" className={`${styles.button} ${styles.buttonLost}`}>
          Report Lost Item
        </a>
        <a href="/found" className={`${styles.button} ${styles.buttonFound}`}>
          Report Found Item
        </a>
        <a href="/dashboard" className={`${styles.button} ${styles.buttonDashboard}`}>
          View All Posts
        </a>
      </div>
    </div>
  );
}
