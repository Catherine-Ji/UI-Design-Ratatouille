import '../App.css';
import {useNavigate} from 'react-router-dom';
import Logo from '../Logo_orange.png';
import {Helmet} from "react-helmet";

function Loading_Recipe(){
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
        <div class="ratatouillify-content">
        <div class="ratatouillify-title"> 
            <h1>Ratatouilli-fy a recipe and create a custom lesson plan! </h1>
        </div>



        <div class="ratatouillify-submit">
            <h1> Submit </h1>
            <button class="ratatouillify-submit-btn"> Ratatouilify </button>
        </div>

      </div>
      </div>
    </div>

	);
}

export default Loading_Recipe;