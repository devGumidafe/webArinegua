import Head from 'next/head';
import { Navbar } from '../components/navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arinegua Garcia</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>Arinegua Garcia</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
