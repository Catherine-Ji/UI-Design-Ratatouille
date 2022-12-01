import logo from './logo.svg';
import './App.css';
import SideNavBar from './SideNavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home_newUser from './pages/Home_newUser';
import Lessons from './pages/Lessons';
import Profile from './pages/Profile';
import Ratatouillify from './pages/Ratatouillify';
import Logo from './Logo_orange.png';

function App() {
  return (
    // <Router >
    //    <img src="public/Logo_orange.png"></img>
    //   <SideNavBar/>
    //   <Routes>
    //     <Route path="/home" element={<Home_newUser/>}/>
    //     <Route path='/profile' element={<Profile/>}/>
    //     <Route path="/lessons" element={<Lessons/>}/>
    //     <Route path="/ratatouillify" element={<Ratatouillify/>}/>
    //   </Routes>
    // </Router>
    <div class="row">
      <div class="column left">
        <img src={Logo} class='smallLogo'></img>
        <div class="container">
          <i class="fa fa-solid fa-user user" style={{ fontSize: '2em' }} />
          <div class="btn-group">
            <button>Home</button>
            <button>Profile</button>
            <button>Lessons</button>
            <button>Ratatouillify</button>
          </div>
        </div>
      </div>
      <div class="column right">
        <img src={Logo} class='largeLogo'></img>
        <div class="circle1 yellow"></div>
        <div class="circle2 yellow"></div>
        <div class="circle3 yellow"></div>
        <span className='headertext hometext1' >Get started on a &nbsp;</span><span class='headertext hometext2 orangetext'>lesson plan</span><span class='headertext hometext3'>...</span>
        <br></br>
        <button class='lessoncard'>lesson card</button>
        <span className='headertext searchtext1' >Get help with something</span><span class='headertext searchtext2 orangetext'> &nbsp; specifc</span><span class='headertext searchtext3'>...</span>
        {/* search bar */}
        <input type='text' placeholder='Search...' class='searchbar'></input>
      </div>
    </div>
  );
}

export default App;
