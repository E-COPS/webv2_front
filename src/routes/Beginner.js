import NavBar from '../components/NavBar';
import BottomBar from '../components/BottomBar';
import styles from './Activity2.module.css';
import ProfileBox from '../components/ProfileBox';
import { useState } from 'react';

function Beginner(){
  const [hide,setHide]=useState(false);

    return (
      <body>
      <header>
          <NavBar/>
      </header>
      <main className={styles.mainContainer}>   
        <div className={styles.beginContainer}>
          <div className = {styles.textBox}>
              <div className ={styles.firstText}><br></br>E-COP'S------<br></br>Begginer Track</div>
          </div>
          <div className = {styles.galleryContainer}>
            <div className = {styles.text2Box}>
              <div className = {styles.secondText}>2022 Gallery</div>
            </div>
            <div className ={styles.rowContainer}>
              <ProfileBox
               onMouseOver={()=>{setHide(true)}}
               onMouseOut={()=>{setHide(false)}} 
               img ={hide?'':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'} style ="max-width:100%;height:auto;"
              />
              <div className={`list${{hide}? '회원만가능':''}`}> </div>
              <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
              <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
            </div>
            <div className ={styles.rowContainer}>
              <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
              <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
              <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
            </div>
            <div className ={styles.rowContainer}>
              <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
              <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
              <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
            </div>
          </div>
          <div className ={styles.text3Box}>
            <div className ={styles.thirdText}>Spread your wide wing at E-COPS</div>
            <div className ={styles.third2Text}>@E_COPS</div>
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
  
 export default Beginner;