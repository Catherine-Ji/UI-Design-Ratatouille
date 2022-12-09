import '../App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Lessons from './Lessons';
import Profile from './Profile';
import Ratatouillify from './Ratatouillify';
import Logo from '../Logo_orange.png';

function Home_newUser() {
    const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate('/profile');
  };

  const navigateToLessons = () => {
    navigate('/lessons');
  }

  const navigateToRatatouillify = () => { 
    navigate('/ratatouillify');
  }
    return (
        <div class="row">
      <div class="column left">
        <img src={Logo} class='smallLogo'></img>
        <div class="container">
          <i class="fa fa-solid fa-user user" style={{ fontSize: '2em' }} />
          <div class="btn-group">
            <button >Home</button>
            <button onClick={navigateToProfile}>Profile</button>
            <button onClick={navigateToLessons}>Lessons</button>
            <button onClick={navigateToRatatouillify}>Ratatouillify</button>
            <Routes>
              <Route path='/profile' element={<Profile/>}/>
              <Route path="/lessons" element={<Lessons/>}/>
              <Route path="/ratatouillify" element={<Ratatouillify/>}/>
            </Routes>
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

export default Home_newUser;