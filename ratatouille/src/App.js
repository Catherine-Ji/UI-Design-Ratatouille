import logo from './logo.svg';
import './App.css';
import SideNavBar from './SideNavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home_newUser from './pages/HomeNewUser';
import Lessons from './pages/Lessons';
import Profile from './pages/Profile';
import Ratatouillify from './pages/Ratatouillify';
import Upload from './pages/Upload'
import Login_landing from './pages/Login_landing';
import Reciepes from './pages/Recipes';
import Search from './pages/Search';
import Login from './pages/Login';
import Create_account from './pages/CreateAccount';
import Home_returnUser from './pages/HomeReturnUser';
import Tutorial_landing from './pages/TutorialLanding';
import Loading_recipe from './pages/Loading_recipe';
import Lesson_Ready from './pages/Lesson_Ready';
import Onboarding_Welcome from './pages/OnboardingWelcome'
import Onboarding_Lesson from './pages/OnboardingLesson'
import Onboarding_Search from './pages/OnboardingSearch'
import Onboarding_Ratatouillify from './pages/OnboardingRatatouillify'
import TutorialPage1 from './pages/TutorialPage1';
import TutorialPage2 from './pages/TutorialPage2';
import TutorialPage3 from './pages/TutorialPage3';
import TutorialPage4 from './pages/TutorialPage4';
import TutorialPage5 from './pages/TutorialPage5';
import TutorialPage6 from './pages/TutorialPage6';
import TutorialEnd from './pages/TutorialEnd';

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home_newUser />}/>
          <Route path="/home-newUser" element={<Home_newUser />}/>
          <Route path="/home" element={<Home_returnUser />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path="/lessons" element={<Lessons />}/>
          <Route path="/ratatouillify" element={<Ratatouillify />}/>
          <Route path="/login-landing" element={<Login_landing />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/create-account" element={<Create_account />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/upload" element={<Upload />}/>
          <Route path="/tutorial-landing" element={<Tutorial_landing />}/>
          <Route path='/tutorial-page-1' element={<TutorialPage1 />}/>
          <Route path='/tutorial-page-2' element={<TutorialPage2 />}/>
          <Route path='/tutorial-page-3' element={<TutorialPage3 />}/>
          <Route path='/tutorial-page-4' element={<TutorialPage4 />}/>
          <Route path='/tutorial-page-5' element={<TutorialPage5 />}/>
          <Route path='/tutorial-page-6' element={<TutorialPage6 />}/>
          <Route path='/tutorial-end' element={<TutorialEnd />}/>
          <Route path="/loading-recipe" element={<Loading_recipe />}/>
          <Route path="/reciepes" element={<Reciepes/>}/>
          <Route path="/lesson-ready" element={<Lesson_Ready />}/>
          <Route path="/onboarding-welcome" element={<Onboarding_Welcome />}/>
          <Route path="/onboarding-lesson" element={<Onboarding_Lesson />}/>
          <Route path="/onboarding-search" element={<Onboarding_Search />}/>
          <Route path="/onboarding-ratatouillify" element={<Onboarding_Ratatouillify />}/>
          <Route path="/*" element={<div>ERROR: Page Not Found</div>} />
        </Routes>
      </Router>
  );
}
