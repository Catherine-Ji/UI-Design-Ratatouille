import logo from './logo.svg';
import './App.css';
import SideNavBar from './SideNavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home_newUser from './pages/Home_newUser';
import Lessons from './pages/Lessons';
import Profile from './pages/Profile';
import Ratatouillify from './pages/Ratatouillify';
import Upload from './pages/Upload'
import Login_landing from './pages/Login_landing';
import Search from './pages/Search';
import Login from './pages/Login';
import Create_account from './pages/Create_account';
import Logo from './Logo_orange.png';

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home_newUser />}/>
          <Route path="/home" element={<Home_newUser />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path="/lessons" element={<Lessons />}/>
          <Route path="/ratatouillify" element={<Ratatouillify />}/>
          <Route path="/login-landing" element={<Login_landing />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/create-account" element={<Create_account />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/upload" element={<Upload />}/>
          <Route path="/*" element={<div>ERROR: Page Not Found</div>} />
        </Routes>
      </Router>
  );
}
