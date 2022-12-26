import Button from '../components/Home_Button';
import NavBar from '../components/NavBar';
import BottomBar from '../components/BottomBar';
import styles from './Home.module.css';
import logo from '../components/hspace.png';

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
          <a href='./Recruitment'>
            <Button/>
          </a>
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

      <div>
        <div className={styles.historyBar}></div>
        <text className={styles.historyTitleText}>
          지금까지 E-COPS는?
        </text>
        <div className={styles.histColumnContainer}>
          <div className='start'>
          <text className={styles.historyYear}>History</text>
          </div>
          <text className={styles.historyYear}>2023 : YOU KNOW THE DRILL.</text>
          <text className={styles.historyYear}>2022</text>
          <text className={styles.histDescriptContainer}>버그바운티 활동</text>
          <text className={styles.historyYear}>2021</text>
          <text className={styles.historyYear}>2020</text>
          <text className={styles.historyYear}>2019</text>
          <text className={styles.historyYear}>2018</text>
          <text className={styles.historyYear}>2017</text>
          <text className={styles.historyYear}>2016</text>
          <text className={styles.historyYear}>2015</text>
          <text className={styles.historyYear}>2014 : THE BEGINNING OF E-COPS</text>
          <div className='fin'>
          <text className={styles.historyYear}>E-COPS'S FOOTSTEP</text>
          </div>
        </div>
      </div>

      <div className={`${styles.scroll_container} ${styles.rowContainer}`}>
        <text className={styles.scroll_text}>
          🔒암호학은 E-COPS에서.   
          🔒웹 해킹은 E-COPS에서.  
          🔒포렌식은 E-COPS에서.  
          🔒리버싱은 E-COPS에서.  
          🔒개발은 E-COPS에서. 
          🔒암호학은 E-COPS에서.   
          🔒포렌식은 E-COPS에서.
        </text>
      </div>

      <div>
        <div className={styles.divider}></div>
        <text className={styles.partnerTitleText}>E-COPS와 함께하는 파트너</text>
        <img className={styles.hSpace} src={logo} alt="HSpace"></img>
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