import '../App.css';
import {useNavigate} from 'react-router-dom';
import Logo from '../Logo_orange.png';
import Onboarding_Lesson_Card from '../onboarding_lesson_card.png';

export default function Onboarding_Lesson(){
	let navigate = useNavigate();

	return( 
    <div class="row"> 
      <div class="column left">
        <img src={Logo} class='smallLogo'></img>
        <div class="container">
          <i class="fa fa-solid fa-user user" style={{ fontSize: '2em', color: 'var(--grey)' }} />
          <div class="btn-group">
            <button onClick={() => {navigate("/login-landing")}}> Login </button>
            <button onClick={() => {navigate("/")}}>Home</button>
            <button onClick={() => {navigate("/profile");}}>Profile</button>
            <button onClick={() => {navigate("/lessons");}}>Lessons</button>
            <button onClick={() => {navigate("/ratatouillify");}}>Ratatouillify</button>
          </div>
        </div>
      </div>
      
      <div class="column lesson-right-ratatouillify">
        <div class="onboarding-lesson-cards">
         <h1>Lesson Cards </h1> 
          <img src={Onboarding_Lesson_Card} alt="six people in the kitchen cooking" class='lesson-card-img'></img>
          <p class="left-align"> <a class="skip" href="/onboarding-welcome">back</a>
          <span class="right-align"><a class="skip" href="/onboarding-search">next</a> </span>
          </p>
        </div>
      </div>
    </div>

	);
}