import NavBar from '../components/NavBar';
import BottomBar from '../components/BottomBar';
import styles from './Recruitment.module.css';
import Button from '../components/Recruitment_Button';
/*import { Button } from 'bootstrap';*/
/*import toggleButton from '../components/Toggle_Button';*/

function Recruitment(){
  return (
    <body>
      <header>
        <NavBar/>
      </header>
      <main className={styles.mainContainer}>
      <div className = {styles.largeContainer}></div>
      <div className={styles.rowContainer}>
        <div className={styles.columnContainer}>
          <text className ={styles.titleText}>E-COPS 12기 모집</text>
          <text className={styles.contentText}>
            E-COPS 12기에서 1년간 활동할 신입 부원을 모집합니다.<br></br>
            보안에 관심이 많고 ~~~<br></br>
            열정이 있다면 누구나 지원 가능~*</text>
          </div>
          <div className={styles.midTextButton}>
               <Button/>
        </div>
      </div>
      <div className={styles.content3Container}>
         <text className={styles.midText}>RECURITING PROCESS</text>
       </div>
        <div className={styles.rowContainer}>
          <div className={styles.miniCircle}>
            <div classname={styles.columnTextContainer}>
              <text className={styles.contentTitleText}>서류접수</text>
              <text className={styles.contentWhiteText}>00.00(W)~00.00(W)</text>
              <text className={styles.contentWhiteText}>00시 마감</text>
            </div>
          </div>
          <div className={styles.miniCircle}>
            <div classname={styles.columnTextContainer}>
             <text className={styles.contentTitleText}>서류 결과 발표</text>
             <text className={styles.contentWhiteText}>00.00(W) 00시</text>
           </div>
          </div>
          <div className={styles.miniCircle}>
           <div classname={styles.columnTextContainer}>
             <text className={styles.contentTitleText}>오프라인 면접</text>
             <text className={styles.contentWhiteText}>00.00(W)~00.00(W)</text>
             <text className={styles.contentWhiteText}>개별 연락 예정</text>
            </div>
          </div>
          <div className={styles.miniCircle}>
            <div classname={styles.columnTextContainer}>
             <text className={styles.contentTitleText}>면접</text>
              <text className={styles.contentWhiteText}>00.00(W)~00.00(W) 00시</text>
           </div>
          </div> 
        </div>
        <div className={styles.content3Container}>
          <text className={styles.midText}>자주 묻는 질문</text>
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
        <div className ={styles.grayContainer}>
          <div className ={styles.greenBox}>
            <div className ={styles.midContainer}>
              <text className ={styles.midText}><br></br>&nbsp;&nbsp;더 궁금한 내용이나<br></br>문의사항이 있으신가요?</text>.
            </div>
            <div className = {styles.midContainer}>
              <text className ={styles.contentText2}>동아리--,궁금한점--,언제든지 문의주세요</text>
            </div>
            <div className ={styles.midContainer}>
              <button className ={styles.qButton}>문의하기</button>
            </div>
          </div>
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

export default Recruitment;