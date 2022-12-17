import '../App.css';
import {useNavigate} from 'react-router-dom';
import Logo from '../Logo_orange.png';
import {Helmet} from "react-helmet";
import Six_people_cooking from '../six-people-cooking.png';

export default function Onboarding_Welcome(){
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
      
      <div class="column right-ratatouillify">
        <div class="welcome-title">
         <h1>Welcome to </h1> <span class="app-title-orange"> <h1>Ratatouille!</h1> </span> 
          <img src={Six_people_cooking} alt="six people in the kitchen cooking" class='six-people-cooking'></img>
          <h2> let’s get you cooking! </h2>
          <button onClick={() => {navigate("/loading-recipe");}} class="uploaded-ratatouillify-submit-btn"> get started </button>
          <div> <a class="skip" href="/home">skip</a> </div>
        </div>
      </div>
    </div>

	);
}