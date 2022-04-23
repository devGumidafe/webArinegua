import React from 'react';
import styles from '../styles/Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navbar_container} ${styles.container}`}>
        <input type='checkbox' name='' id='' />
        <div className={styles.hamburger_lines}>
          <span className={`${styles.line} ${styles.line1}`}></span>
          <span className={`${styles.line} ${styles.line2}`}></span>
          <span className={`${styles.line} ${styles.line3}`}></span>
        </div>
        <ul className={styles.menu_items}>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#'>Otros</a>
          </li>
          <li>
            <a href='#'>Otros</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <h1 className={styles.logo}></h1>
      </div>
    </nav>
  );
};
