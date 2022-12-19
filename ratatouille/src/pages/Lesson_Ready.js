import '../App.css';
import {useNavigate} from 'react-router-dom';
import Logo from '../Logo_orange.png';
import OmeletRecipe from '../omelet-recipe.png';
import OmeletSkills from '../omelet-skills.png';



function Lesson_Ready(){
	let navigate = useNavigate();

	return( 
    <div class="row">
      <div class="column left">
        <img src={Logo} class='smallLogo' alt='app logo'></img>
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
      <div class="column right-ratatouillify">
        <div class="ratatouillify-content">
        <div class="ratatouillify-title"> 
            <h1>Your new lesson is ready!</h1>
            <div class="lesson-start-button">
            <img src={OmeletRecipe} class='omelet-recipe' alt='omelet recipe lesson'></img>
            <button onClick={() => {navigate("/tutorial-landing");}} class="uploaded-ratatouillify-submit-btn" style={{position: 'absolute', top: '20%', left: '65%'}}> Start cooking! </button>
            </div>
            <h1>Skills in this recipe include: </h1>
            <img src={OmeletSkills} class='omelet-skills' alt='uploaded omelet recipe'></img>
        </div>



      </div>
      </div>
    </div>

	);
}

export default Lesson_Ready;