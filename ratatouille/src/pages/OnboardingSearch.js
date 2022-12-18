import '../App.css';
import {useNavigate} from 'react-router-dom';
import Logo from '../Logo_orange.png';
import Onboarding_Search_Img from '../onboarding_search.png';

export default function Onboarding_Search(){
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
         <h1>Search </h1> 
          <img src={Onboarding_Search_Img} alt="six people in the kitchen cooking" class='onboarding-search-img'></img>
          <p class="onboarding-search-text">Need help with a specific skill or recipe? <div></div> Search for it directly in the search bar </p>
          <p class="left-align"> <a class="skip" href="/onboarding-lesson">back</a>
          <span class="right-align"><a class="skip" href="/onboarding-ratatouillify">next</a> </span>
          </p>
        </div>
      </div>
    </div>

	);
}