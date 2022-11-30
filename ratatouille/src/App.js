import logo from './logo.svg';
import './App.css';
import SideNavBar from './SideNavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home_newUser from './pages/Home_newUser';
import Lessons from './pages/Lessons';
import Profile from './pages/Profile';
import Ratatouillify from './pages/Ratatouillify';

function App() {
  return (
    <Router >
       <img src="public/Logo_orange.png"></img>
      <SideNavBar/>
      <Routes>
        <Route path="/home" element={<Home_newUser/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path="/lessons" element={<Lessons/>}/>
        <Route path="/ratatouillify" element={<Ratatouillify/>}/>
      </Routes>
    </Router>
  );
}

export default App;
