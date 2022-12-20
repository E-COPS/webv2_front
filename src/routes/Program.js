import NavBar from '../components/NavBar';
import styles from './Program.module.css';

function Program(){
  return (
    <body style={{backgroundColor: 'black'}}>
    <header>
        <NavBar/>
    </header>
    <main className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <text className={styles.titleText}>Curriculum</text>
        <div className={styles.divider}></div>
        <div className={styles.rowContainer}>
          <div className={styles.bigBox}>
          <text className={styles.contentText}>학기 중 세션</text>
          </div>
          <div className={styles.bigBox}>
          <text className={styles.contentText}>방학 세션</text>
          </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <text className={styles.titleText}>외부 활동</text>
        <div className={styles.divider}></div>
        <div className={styles.rowContainer}>
          <div className={styles.smallBox}>
          <text className={styles.contentText}>외부 활동</text>
          </div>
          <div className={styles.smallBox}>
          <text className={styles.contentText}>외부 활동</text>
          </div>
          <div className={styles.smallBox}>
          <text className={styles.contentText}>외부 활동</text>
          </div>
        </div>
      </div>
    </main>
    </body>
  );
}

export default Program;