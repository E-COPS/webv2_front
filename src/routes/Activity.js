import NavBar from '../components/NavBar';
import BottomBar from '../components/BottomBar';
import styles from './Activity.module.css';
import ActivityButton from '../components/ActivityButton';
import ProfileBox from '../components/ProfileBox';
import { useMediaQuery } from 'react-responsive';

function Activity() {
  const isNormal = useMediaQuery({ minWidth: 319 });
  return (
    <body>
      {isNormal ? (
        <>
          <header>
            <NavBar isCurrent={'activity'} />
          </header>
          <main className={styles.mainContainer}>
            <div className={styles.contentContainer}>
              <div className={styles.columnContainer}>
                <text className={styles.titleText}>Sessions</text>
                <text className={styles.contentText}>
                  E-COPS의 정규 세션은 Beginner Track과 Challenger Track으로 나뉘어서 이루어집니다.<br></br>
                  자신의 실력에 맞게 맞춤형 보안 경험을 쌓아보세요.
                </text>
                <div className={styles.rowContainer1}>
                  <div className={styles.mintWhiteContainer}>
                    <div className={styles.whiteBox}></div>
                    <div className={styles.mintBox1}>
                      <text className={styles.boxText}>Beginner Track</text>
                      <div className={styles.clickButton}>
                        <ActivityButton url="/activity/Beginner" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.mintBox1c}>
                    <text className={styles.boxText}>Challenger Track</text>
                    <div className={styles.clickButton}>
                      <ActivityButton url="/activity/Challenger" />
                    </div>
                  </div>
                </div>
                <text className={styles.titleText}>방캅스</text>
                <text className={styles.contentText}>
                  방캅스는 E-COPS가 매 방학마다 진행하는 프로젝트 발표회입니다. <br />
                  학기중에 열심히 공부한 내용을 토대로 프로젝트를 통해 실전 경험을 키워보세요!
                </text>
                <div className={styles.rowContainer2}>
                  <text className={styles.rowContainer2Top}>E-COPS는 현재 2022 겨울 방학 프로젝트 진행중!</text>

                  <div className={styles.rowMintBox2}>
                    <div className={styles.mintBox2}>
                      <text className={styles.boxText}>Web Hacking</text>
                      <text className={styles.boxContentText}>
                        OWASP 선청 핵심 보안 취약점 <br /> OWASP TOP10을 중심으로 <br /> 웹 취약점 집중 분석 및 해킹
                      </text>
                      {/* <div className={styles.clickButton2}>
                        <ActivityButton url="/Webhacking" />
                      </div> */}
                    </div>
                    <div className={styles.mintBox2}>
                      <text className={styles.boxText}>Reversing</text>
                      <text className={styles.boxContentText}>
                        모의해킹 환경 개발부터 실습까지 <br />
                        화이트 해커로서 사이버보안
                        <br />
                        취약점을 파악하고 해킹하기
                      </text>
                      {/* <div className={styles.clickButton2}>
                        <ActivityButton url="/Reversing" />
                      </div> */}
                    </div>
                    <div className={styles.mintBox2}>
                      <text className={styles.boxText}>Forensics</text>
                      <text className={styles.boxContentText}>
                        포렌식 툴을 사용해
                        <br />
                        최신 포렌식 동향을 반영한
                        <br />
                        국제 포렌식 대회 문제 풀어보기
                      </text>
                      {/* <div className={styles.clickButton2}>
                        <ActivityButton url="/Forensic" />
                      </div> */}
                    </div>
                    <div className={styles.mintBox2}>
                      <text className={styles.boxText}>Development</text>
                      <text className={styles.boxContentText}>
                        보안과 관련된 주제,
                        <br /> 시큐어 코딩을 접목한
                        <br /> 웹/앱 개발 프로젝트
                      </text>
                      {/* <div className={styles.clickButton2}>
                        <ActivityButton url="/Development" />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* bottom bars */}
          <footer>
            <NavBar />
            <BottomBar />
          </footer>
        </>
      ) : (
        <span>화면 크기를 조정해주세요.</span>
      )}
    </body>
  );
}

export default Activity;
