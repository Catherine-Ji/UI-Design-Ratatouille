import '../App.css';
import {useNavigate} from 'react-router-dom';
import Logo from '../Logo_orange.png';
import Onboarding_Search_Img from '../onboarding_search.png';

export default function Onboarding_Ratatouillify(){
	let navigate = useNavigate();

	return( 
    <div class="row"> 
      <div class="column left">
        <img src={Logo} class='smallLogo'></img>
        <div class="container">
          <i class="fa fa-solid fa-user user" style={{ fontSize: '2em' }} />
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
         <h1 class="rat-title">Ratatouillify </h1> 
          <button class="uploaded-ratatouillify-submit-btn"> Ratatouilify </button>
          <p class="onboarding-ratatouillify-text"> If you don’t see the recipe you want to learn, or have a recipe that you’re struggling with, just upload it via Ratatouillify and we can help create a custom lesson plan for you!
          <div class="rat-paragraph-space"> <h1> </h1></div>
          Just give us the recipe via a video or text, and we will help you break it down into small digestible steps with written explanations and images explaining each step.
          </p>

          <p class="left-align"> <a class="skip" href="/onboarding-search">back</a>
          <span class="right-align"><a class="skip" href="/home">finished</a> </span>
          </p>
        </div>
      </div>
    </div>

	);
}