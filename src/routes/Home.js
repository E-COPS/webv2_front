//import Button from '../components/Button';
import NavBar from '../components/NavBar';
import styles from './Home.module.css';
//import logo from '../components/meerkat.jpg'

function Home (){
  return (
    <body style={{backgroundColor: 'black'}}>
    <header>
      <NavBar/>
      <div className={styles.divider}></div>
    </header>
    <main className={styles.mainContainer}>
      <div>
      <div className={styles.rowContainer}>
        <div className={styles.columnContainer}>
          <text className={styles.titleText}>WE STAN</text>
          <text className={styles.titleText}>CYBER SECURITY</text>
        </div>

        <div className={styles.columnContainer}>
          <text className={styles.descriptionText}>
            E-COPS는 보안을 공부하고 싶은 학생이라면 누구나 참여할 수 있는 이화여자대학교 교내 동아리입니다.
          </text>
          <text className={styles.descriptionText}>
            E-COPS is a cybersecurity club at Ewha Womans University, and anyone who has a passion for security can participate.
          </text>
        </div>
      </div>
      <text className={styles.midText}>
        EWHA - CONTROL OF PROGRAM SECURITY
      </text>
      
      </div>


    </main>

    </body>
  );
}

export default Home;