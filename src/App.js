import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/Home';
import Activity from './routes/Activity';
import Program from './routes/Program';
import Member from './routes/Member';
import Recruitment from './routes/Recruitment';


function App() {
  return (
    <Router>
      <Routes>
        {/* other pages */}
        <Route path='/activity' element={<Activity/>}/>
        <Route path='/program' element={<Program/>}/>
        <Route path='/member' element={<Member/>}/>
        <Route path='/recruitment' element={<Recruitment/>}/>
        {/* root page */}
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}
 
export default App;
