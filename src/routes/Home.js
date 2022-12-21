import Button from '../components/Home_Button';
import NavBar from '../components/NavBar';
import BottomBar from '../components/BottomBar';
import styles from './Home.module.css';

function Home (){
  return (
    <body>
    <header>
      <NavBar/>
    </header>
    <main className={styles.mainContainer}>
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

      <div className={styles.midRowContainer}>
        <text className={styles.midText}>
          EWHA - CONTROL OF PROGRAM SECURITY
        </text>
        <div className={styles.midTextButton}>
          <Button/>
        </div>
      </div>

      <div className={`${styles.midColumnContainer} ${styles.background}`}>
        <text className={styles.introTitleContainer}>
          E-COPS는 이런 동아리야
        </text>          
        <text className={styles.introContainer}>
          E-COPS는 사이버 보안을 주도하는 이화여대의 동아리입니다.
        </text>
        <text className={styles.introContainer}>
          사이버 보안을 이끄는 인재로 발전하는 것을 목표로 합니다.
        </text>
        <text className={styles.introContainer}>
          E-COPS는 사이버 보안을 주도하는 이화여대의 동아리입니다.
        </text>
        <text className={styles.introContainer}>
          사이버 보안을 이끄는 인재로 발전하는 것을 목표로 합니다.
        </text>
        <text className={styles.introContainer}>
          E-COPS는 사이버 보안을 주도하는 이화여대의 동아리입니다.
        </text>
        <text className={styles.introContainer}>
          사이버 보안을 이끄는 인재로 발전하는 것을 목표로 합니다.
        </text>
        <text className={styles.introContainer}>
          E-COPS는 사이버 보안을 주도하는 이화여대의 동아리입니다.
        </text>
        <text className={styles.introContainer}>
          사이버 보안을 이끄는 인재로 발전하는 것을 목표로 합니다.
        </text>
        <text className={styles.introContainer}>
          E-COPS는 사이버 보안을 주도하는 이화여대의 동아리입니다.
        </text>
        <text className={styles.introContainer}>
          사이버 보안을 이끄는 인재로 발전하는 것을 목표로 합니다.
        </text>
      </div>


    </main>

    {/* bottom bars */}
    <footer>
      <NavBar/>
      <BottomBar/>
    </footer>

    </body>
  );
}

export default Home;