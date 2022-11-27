import logo from './logo.svg';
import './App.css';
import { SideNavBar } from './SideNavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home_newUser from './pages/Home_newUser';
import Lessons from './pages/Lessons';

function App() {
  return (
    <Router >
      <SideNavBar/>
      <Routes>
        <Route path="/home" element={<Home_newUser/>}/>
        <Route path="/lessons" element={<Lessons/>}/>
      </Routes>
    </Router>
  );
}

export default App;
