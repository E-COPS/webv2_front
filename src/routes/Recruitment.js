import NavBar from '../components/NavBar';
import styles from './Recruitment.module.css';

function Recruitment(){
  return (
    <>
    <body style={{ backgroundColor: 'black' }}>

      <header>
        <NavBar/>
      </header>
      <main className={styles.mainContainer}>
        <div className ={styles.grayContainer}>
          <div className ={styles.grayBox}></div>
        </div>
        <div className={styles.content2Container}>
          <text className={styles.titleText}>지원 방법</text>
        </div>
        <div className={styles.rowContainer}>
          <div className={styles.smallBox}>
          <text className={styles.contentTitle2Text}>모집기간</text>
          </div>
          <div className={styles.smallBox}>
          <text className={styles.contentTitle2Text}>지원자격</text>
          </div>
          <div className={styles.smallBox}>
          <text className={styles.contentTitle2Text}>지원방법</text>
          </div>
        </div> 
        <div className={styles.content3Container}>
          <text className={styles.titleText}>모집 일정</text>
        </div>
        <div className={styles.rowContainer}>
          <div className={styles.miniBox}>
          <text className={styles.contentTitleText}>서류접수</text>
          </div>
          <div className={styles.miniBox}>
          <text className={styles.contentTitleText}>서류 결과 발표</text>
          </div>
          <div className={styles.miniBox}>
          <text className={styles.contentTitleText}>면접</text>
          </div>
          <div className={styles.miniBox}>
          <text className={styles.contentTitleText}>면접</text>
          </div>
        </div> 
        <div className={styles.content3Container}>
          <text className={styles.titleText}>자주 묻는 질문</text>
        </div>
        <div className={styles.columnContainer}>
          <div className={styles.toggle}>
            <text className={styles.contentBigText}>E-COPS는 어떤 동아리인가요?</text>
          </div>
          <div className={styles.toggle}>
            <text className={styles.contentBigText}>E-COPS는 어떤 동아리인가요?</text>
          </div>
          <div className={styles.toggle}>
            <text className={styles.contentBigText}>E-COPS는 어떤 동아리인가요?</text>
          </div>
        </div> 
      </main>
    </body></>
  );
}

export default Recruitment;