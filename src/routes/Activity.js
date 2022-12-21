import NavBar from '../components/NavBar';
import BottomBar from '../components/BottomBar';
import styles from './Activity.module.css';

function Activity(){
  return (
    <body style={{backgroundColor: '#1A1C1D'}}>
    <header>
        <NavBar/>
    </header>
    <main className={styles.mainContainer}>
      
    </main>

    {/* bottom bars */}
    <footer>
      <NavBar/>
      <BottomBar/>
    </footer>
    
    </body>
  );
}

export default Activity;