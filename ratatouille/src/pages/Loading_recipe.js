import '../App.css';
import {useNavigate} from 'react-router-dom';
import Logo from '../Logo_orange.png';
import {Helmet} from "react-helmet";
import People_cooking from '../People_cooking.png';

function Loading_Recipe(){
	let navigate = useNavigate();

	return( 
    <div class="row">
      <Helmet>
      	<meta http-equiv="refresh" content="1;url=./lesson-ready/" />
      </Helmet> 
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
        <div class="ratatouillify-content">
       		<div class="loading-recipe-content">
        		<div class="ratatouillify-title"> 
            	<h1>Thanks for helping us grow our library of lessons! </h1>
            	</div>

            	<h2>Please wait a moment while we Ratatouilli-fy your recipe and prepare an original lesson plan... </h2>
            	<img src={People_cooking} alt="people in the kitchen cooking" class='people-cooking'></img> 
            	<h2> cooking something up just for you... </h2>

        </div>
      </div>
      </div>
    </div>

	);
}

export default Loading_Recipe;