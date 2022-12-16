import '../App.css';
import {useNavigate} from 'react-router-dom';
import Logo from '../Logo_orange.png';


function Lesson_Ready(){
	let navigate = useNavigate();

	return( 
    <div class="row">
      <div class="column left">
        <img src={Logo} class='smallLogo' alt='app logo'></img>
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
            <h1>LESSON READY</h1>
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

export default Lesson_Ready;