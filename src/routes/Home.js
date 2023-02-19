import Button from '../components/Home_Button';
import NavBar from '../components/NavBar';
import BottomBar from '../components/BottomBar';
import styles from './Home.module.css';
import logo from '../components/hspace.png';
import { useMediaQuery } from 'react-responsive';

function Home() {
  const isTxtBar = useMediaQuery({ minWidth: 1200 }); // 하단 애니메이션
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
                  <div className={styles.historyYear}>
                    <text className={styles.historyTitle}>History</text>
                    <text className={styles.historyContent}></text>
                  </div>
                  <div className={styles.historyYear}>
                    <text className={styles.historyTitle}>2023 : YOU KNOW THE DRILL</text>
                    <text className={styles.historyContent}></text>
                  </div>
                  <div className={styles.historyYear}>
                    <text className={styles.historyTitle}>2022</text>
                    <text className={styles.historyContent}>
                      <ul>
                        <li>2022 Summer Polygon BUIDL IT Pool Prize</li>
                        <li>2022 Consensus Web3athon Prasaga - 1st prize</li>
                        <li>E-COPS & EVI$ION 여름 보안 연합 학술제</li>
                        <li>AI Computer 버그바운티 with 이화체인</li>
                      </ul>
                    </text>
                  </div>
                  <div className={styles.historyYear}>
                    <text className={styles.historyTitle}>2021</text>
                    <text className={styles.historyContent}>
                      <ul>
                        <li>2021 WISET ICT 팀프로젝트 결과발표대회 우수상</li>
                        <li>2제 9회 K-HACKATHON 우수상</li>
                        <li>한국정보기술학회 추계 대학생 논문 경진 대회 우수논문상</li>
                        <li>한국 무역 협회 스타트업 스토리텔링 경진대회 대상</li>
                        <li>제 8회 소프트웨어 개발보안 경진대회 우수상</li>
                        <li>2021 TAEBIT Global Defi Online HACKATHON 3등</li>
                        <li>2021 제 2회 성남시 여성 창업경진대회 0수상</li>
                        <li>2021 개인정보가명익명 처리기술 경진대회 대상</li>
                        <li>개인정보보호기술 아이디어 공모전 최우수상</li>
                        <li>사이버보안 AI 빅데이터 활용경진대회 2021 최우수상</li>
                        <li>2021 제 17회 경영혁신연구논문 및 사례연구 대학(원)생 공모전 장려상</li>
                        <li>클러스터링을 이용한 이더리움 기반 스탬 코인 탐지 연구</li>
                      </ul>
                    </text>
                  </div>
                  <div className={styles.historyYear}>
                    <text className={styles.historyTitle}>2020</text>
                    <text className={styles.historyContent}>
                      <ul>
                        <li>추계학술대회 대학생 논문/졸업작품 공모전 우수상</li>
                        <li>2020 스마트시티 서비스 아이디어 공모전 우수상</li>
                        <li>이화여대 SW 창업 경진대회 대상</li>
                        <li>이화여대 캡스톤 디자인 경진대회 대상</li>
                        <li>강서구 스마트도시 아이디어 공모전 장려상</li>
                      </ul>
                    </text>
                  </div>
                  <div className={styles.historyYear}>
                    <text className={styles.historyTitle}>2019</text>
                    <text className={styles.historyContent}>
                      <ul>
                        <li>SW챌린지 공모전 수상</li>
                        <li>개인정보보호 정책 아이디어 공모전 한국 인터넷 진흥원장상</li>
                        <li>소프트웨어 개발보안 경진대회 정보보호학회장상</li>
                        <li>제 3회 서울혁신챌린지 챌린지상</li>
                        <li>K-사이버 시큐리티 챌린지 2019 자동차용 침입탐지트랙 장려상</li>
                      </ul>
                    </text>
                  </div>
                  <div className={styles.historyYear}>
                    <text className={styles.historyTitle}>2018</text>
                    <text className={styles.historyContent}>
                      <ul>
                        <li>이화여대 2018 캡스톤디자인 경진대화 수상</li>
                        <li>IncogNITO 최우수상</li>
                        <li>2018 Power of XX Award 1등</li>
                      </ul>
                    </text>
                  </div>
                  <div className={styles.historyYear}>
                    <text className={styles.historyTitle}>2017</text>
                    <text className={styles.historyContent}>
                      <ul>
                        <li>IncogNITO 우수상</li>
                      </ul>
                    </text>
                  </div>
                  <div className={styles.historyYear}>
                    <text className={styles.historyTitle}>2016</text>
                    <text className={styles.historyContent}>
                      <ul>
                        <li>LEAP 우수상</li>
                      </ul>
                    </text>
                  </div>
                  <div className={styles.historyYear}>
                    <text className={styles.historyTitle}>2015</text>

                    <text className={styles.historyContent}>
                      <ul>
                        <li>전국 학생 포트폴리오 경진대회 동상</li>
                        <li>한마음 엑스포 2015</li>
                        <li>국가보안기술연구소 암호 기술</li>
                        <li>2015 캠퍼스 특허전략 유니버사이드 대회 우수상</li>
                        <li>한국 멀티미디어 학회 우수 논문상</li>
                        <li>EWHA 3D 프린팅을활용한 모델링 출력 경진대회 도전상</li>
                      </ul>
                    </text>
                  </div>
                  <div className={styles.historyYear}>
                    <text className={styles.historyTitle}>2014: The Beginning of E-COPS</text>
                    <text className={styles.historyContent}>
                      <ul>
                        <li>국가암호 공모전 장려상</li>
                        <li>KBWA 프로젝트 은상</li>
                      </ul>
                    </text>
                  </div>
                  <div className={styles.historyYear}>
                    <text className={styles.historyTitle}>E-COPS Footstep</text>
                  </div>
                  {/* <text className={styles.historyYear} style={{ top: 80 }}>
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
                  </text> */}
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
