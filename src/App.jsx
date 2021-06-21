import React from 'react';
import HeaderMenu from './components/HeaderMenu';
import styles from './App.module.css';

const App = () => {
  return <>
    <div className={styles.page}>
      <div className={styles.header}>
        <HeaderMenu />
      </div>
      <div className={styles.sidebar}>
      </div>
      <div className={styles.main}>
        lorem ipsum dolor sit amet and so on and so on
      </div>
      <div className={styles.info}>
      </div>
      <div className={styles.input}>
      </div>
      <div className={styles.footer}>
      </div>
    </div>
  </>;
}

export default App;
