import Button from '../components/Home_Button';
import NavBar from '../components/NavBar';
import BottomBar from '../components/BottomBar';
import styles from './Home.module.css';
import logo from '../components/hspace.png';
import { useMediaQuery } from 'react-responsive';

function Home() {
  const isTxtBar = useMediaQuery({ minWidth: 1500 }); // 하단 애니메이션
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  return (
    <body>
      <>
        <header>
          <NavBar />
        </header>

        <main className={`${styles.mainContainer}`}>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className={styles.rowContainer}>
              <div className={`${styles.columnContainer}`}>
                {isMobile ? (
                  <>
                    <div className={styles.mainMobileContainer}>
                      <div className={styles.columnContainerMobile}>
                        <text className={styles.titleTextMobile}>
                          <p>WE STAN</p>
                          <p>CYBER</p>
                          <p>SECURITY</p>
                        </text>
                      </div>
                      <div className={styles.columnContainerMobile}>
                        <text className={styles.descriptionTextMobile}>
                          {/* E-COPS는 보안을 공부하고 싶은 학생이라면 누구나 참여할 수 있는 이화여자대학교 교내
                          동아리입니다. 0*/}
                          E-COPS는 정보보안을 기초부터 시작하여 심화학습, 프로젝트를 통해 실력을 탄탄히 쌓아가고 싶은
                          이대생이라면 누구나 참여할 수 있는 이화여자대학교 커리어클럽 소속 동아리입니다.
                          {/* E-COPS(EWHA-CONTROL OF PROGRAM SECURITY)는 보안에 대해 공부하고 싶은 학생들의 자발적인
                          스터디로부터 시작하여 이화여자대학교 경력개발센터에 우수 동아리로 이름을 올렸으며,
                          이화여자대학교 인재개발원 커리어클럽에 소속되어 활발한 활동을 펼쳐가고 있는 정보보안
                          동아리입니다. */}
                        </text>
                        <text className={styles.descriptionTextMobile}>
                          {/* E-COPS is a cyber security club at Ewha Womans University, and anyone who has a passion for
                          security can participate. */}
                          E-COPS is Cyber Security club at Ewha Womans University, and anyone with a passion for cyber
                          security can participate.
                        </text>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.titleTextBox}>
                      <text className={styles.titleText}>
                        <p>WE STAN</p>
                        <p>CYBER</p>
                        <p>SECURITY</p>
                      </text>
                    </div>
                  </>
                )}
              </div>
              {isMobile ? (
                <></>
              ) : (
                <>
                  <div className={styles.columnContainer}>
                    <text className={styles.descriptionText}>
                      E-COPS는 정보보안을 기초부터 시작하여 심화학습, 프로젝트를 통해 실력을 탄탄히 쌓아가고 싶은
                      이대생이라면 누구나 참여할 수 있는 이화여자대학교 커리어클럽 소속 동아리입니다.{' '}
                    </text>
                    <text className={styles.descriptionText}>
                      E-COPS is Cyber Security club at Ewha Womans University, and anyone with a passion for cyber
                      security can participate.
                    </text>
                  </div>
                </>
              )}
            </div>
            {isMobile ? (
              <>
                <text className={styles.midTextMobile}>EWHA - CONTROL OF PROGRAM SECURITY</text>
                <div className={styles.midTextButtonMobile}>
                  <a href="./recruitment">
                    <Button />
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className={styles.midRowContainer}>
                  <text className={styles.midText}>EWHA - CONTROL OF PROGRAM SECURITY</text>
                  <div className={styles.midTextButton}>
                    <a href="./recruitment">
                      <Button />
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className={`${styles.midColumnContainer} ${styles.background}`}>
            {isMobile ? (
              <>
                <text className={styles.introTitleContainerMobile}>E-COPS는 이런 동아리야</text>
                <text className={styles.introContainerMobile}>
                  E-COPS(EWHA-CONTROL OF PROGRAM SECURITY)는 이화여대 학생이라면 누구나 참여할 수 있는 이화여자대학교
                  대표 사이버 보안 동아리입니다. 함께 정보 보안을 공부하며 보안 전문가로 성장해 나가는 것을 목표로 하고
                  있습니다. 경력 개발 센터 우수 동아리에 이름을 올렸으며, 현재 인재 개발원 커리어클럽, 보안 연합
                  IncogNITO, SUA, hspace에 소속되어 내/외부적으로 활발하게 활동을 이어 나가고 있습니다.
                </text>
                {/* <text className={styles.introContainerMobile}>
                  사이버 보안을 이끄는 인재로 발전하는 것을 목표로 합니다.
                </text>
                <text className={styles.introContainerMobile}>
                  E-COPS는 사이버 보안을 주도하는 이화여대의 동아리입니다.
                </text>
                <text className={styles.introContainerMobile}>
                  사이버 보안을 이끄는 인재로 발전하는 것을 목표로 합니다.
                </text>
                <text className={styles.introContainerMobile}>
                  E-COPS는 사이버 보안을 주도하는 이화여대의 동아리입니다.
                </text>
                <text className={styles.introContainerMobile}>
                  사이버 보안을 이끄는 인재로 발전하는 것을 목표로 합니다.
                </text>
                <text className={styles.introContainerMobile}>
                  E-COPS는 사이버 보안을 주도하는 이화여대의 동아리입니다.
                </text>
                <text className={styles.introContainerMobile}>
                  사이버 보안을 이끄는 인재로 발전하는 것을 목표로 합니다.
                </text>
                <text className={styles.introContainerMobile}>
                  E-COPS는 사이버 보안을 주도하는 이화여대의 동아리입니다.
                </text>
                <text className={styles.introContainerMobile}>
                  사이버 보안을 이끄는 인재로 발전하는 것을 목표로 합니다.
                </text> */}
              </>
            ) : (
              <>
                <text className={styles.introTitleContainer}>E-COPS를 소개합니다!</text>
                <text className={styles.introContainer}>
                  E-COPS(EWHA-CONTROL OF PROGRAM SECURITY)는 <br />
                  이화여대 학생이라면 누구나 참여할 수 있는 이화여자대학교 대표 <br />
                  사이버보안 동아리입니다. <br />
                  함께 정보 보안을 공부하며 보안 전문가로 성장해 나가는 것을 목표로 하고 있습니다.
                  <br /> E-COPS는 이화여대 경력개발센터 우수 동아리에 이름을 올렸으며, 현재 이화여자대학교 인재개발원
                  커리어클럽, 보안 연합 커뮤니티 IncogNITO, SUA, hspace에 소속되어 내/외부적으로 활발하게 활동을 이어
                  나가고 있습니다.
                </text>
                {/* <text className={styles.introContainer}>사이버 보안을 이끄는 인재로 발전하는 것을 목표로 합니다.</text>
                <text className={styles.introContainer}>E-COPS는 사이버 보안을 주도하는 이화여대의 동아리입니다.</text>
                <text className={styles.introContainer}>사이버 보안을 이끄는 인재로 발전하는 것을 목표로 합니다.</text>
                <text className={styles.introContainer}>E-COPS는 사이버 보안을 주도하는 이화여대의 동아리입니다.</text>
                <text className={styles.introContainer}>사이버 보안을 이끄는 인재로 발전하는 것을 목표로 합니다.</text>
                <text className={styles.introContainer}>E-COPS는 사이버 보안을 주도하는 이화여대의 동아리입니다.</text>
                <text className={styles.introContainer}>사이버 보안을 이끄는 인재로 발전하는 것을 목표로 합니다.</text>
                <text className={styles.introContainer}>E-COPS는 사이버 보안을 주도하는 이화여대의 동아리입니다.</text>
                <text className={styles.introContainer}>사이버 보안을 이끄는 인재로 발전하는 것을 목표로 합니다.</text> */}
              </>
            )}
          </div>

          <div>
            {isMobile ? (
              <>
                <text className={styles.historyTitleTextMobile}>지금까지 E-COPS는?</text>
                <box className={styles.histColumnContainerMobile}>
                  {/* <div className={styles.historyBar}></div> */}
                  <text className={styles.historyYearMobile} style={{ top: 0 }}>
                    History
                  </text>
                  <text className={styles.historyYearMobile} style={{ top: 80 }}>
                    2023 : YOU KNOW THE DRILL.
                  </text>
                  <text className={styles.historyYearMobile} style={{ top: 160 }}>
                    2022
                  </text>
                  <text className={styles.histDescriptContainer} style={{ top: 240 }}>
                    버그바운티 활동
                  </text>
                  <text className={styles.historyYearMobile} style={{ top: 320 }}>
                    2021
                  </text>
                  <text className={styles.historyYearMobile} style={{ top: 400 }}>
                    2020
                  </text>
                  <text className={styles.historyYearMobile} style={{ top: 480 }}>
                    2019
                  </text>
                  <text className={styles.historyYearMobile} style={{ top: 560 }}>
                    2018
                  </text>
                  <text className={styles.historyYearMobile} style={{ top: 640 }}>
                    2017
                  </text>
                  <text className={styles.historyYearMobile} style={{ top: 720 }}>
                    2016
                  </text>
                  <text className={styles.historyYearMobile} style={{ top: 800 }}>
                    2015
                  </text>
                  <text className={styles.historyYearMobile} style={{ top: 880 }}>
                    2014 : THE BEGINNING OF E-COPS
                  </text>
                  <text className={styles.historyYearMobile} style={{ top: 960 }}>
                    E-COPS'S FOOTSTEP
                  </text>
                </box>
              </>
            ) : (
              <>
                <text className={styles.historyTitleText}>지금까지 E-COPS는?</text>
                <box className={styles.histColumnContainer}>
                  {/* <div className={styles.historyBar}></div> */}
                  <text className={styles.historyYear} style={{ top: 0 }}>
                    History
                  </text>
                  <text className={styles.historyYear} style={{ top: 80 }}>
                    2023 : YOU KNOW THE DRILL.
                  </text>
                  <text className={styles.historyYear} style={{ top: 160 }}>
                    2022
                  </text>
                  <text className={styles.histDescriptContainer} style={{ top: 240 }}>
                    버그바운티 활동
                  </text>
                  <text className={styles.historyYear} style={{ top: 320 }}>
                    2021
                  </text>
                  <text className={styles.historyYear} style={{ top: 400 }}>
                    2020
                  </text>
                  <text className={styles.historyYear} style={{ top: 480 }}>
                    2019
                  </text>
                  <text className={styles.historyYear} style={{ top: 560 }}>
                    2018
                  </text>
                  <text className={styles.historyYear} style={{ top: 640 }}>
                    2017
                  </text>
                  <text className={styles.historyYear} style={{ top: 720 }}>
                    2016
                  </text>
                  <text className={styles.historyYear} style={{ top: 800 }}>
                    2015
                  </text>
                  <text className={styles.historyYear} style={{ top: 880 }}>
                    2014 : THE BEGINNING OF E-COPS
                  </text>
                  <text className={styles.historyYear} style={{ top: 960 }}>
                    E-COPS'S FOOTSTEP
                  </text>
                </box>
              </>
            )}
          </div>

          {isTxtBar ? (
            <div className={`${styles.scrollRowContainer}`}>
              <marquee behavior="scroll" direction="left" loop="number" className={styles.scroll_text}>
                🔒암호학은 E-COPS에서. 🔒웹 해킹은 E-COPS에서. 🔒포렌식은 E-COPS에서. 🔒리버싱은 E-COPS에서. 🔒개발은
                E-COPS에서.
              </marquee>
              {/* <text className={styles.scroll_text}>
                🔒암호학은 E-COPS에서. 🔒웹 해킹은 E-COPS에서. 🔒포렌식은 E-COPS에서. 🔒리버싱은 E-COPS에서. 🔒개발은
                E-COPS에서.
              </text> */}
            </div>
          ) : (
            <div></div>
          )}

          <div>
            <div className={styles.divider}></div>

            {isMobile ? (
              <>
                <text className={styles.partnerTitleTextMobile}>E-COPS와 함께하는 파트너</text>
              </>
            ) : (
              <>
                <text className={styles.partnerTitleText}>E-COPS와 함께하는 파트너</text>
              </>
            )}
            {isMobile ? (
              <img className={styles.hSpaceCenter} src={logo} alt="HSpace"></img>
            ) : (
              <img className={styles.hSpace} src={logo} alt="HSpace"></img>
            )}
          </div>
        </main>

        {/* bottom bars */}
        <footer>
          <NavBar />
          <BottomBar />
        </footer>
      </>
    </body>
  );
}

export default Home;
