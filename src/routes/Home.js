import Button from '../components/Button';
import NavBar from '../components/NavBar';

function Home (){
  return (
    <div>
        <NavBar/>
        <h1>
          Home
        </h1>
        <Button text={"link btn"}/>
    </div>
  );
}

export default Home;