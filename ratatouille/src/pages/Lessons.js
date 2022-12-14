import '../App.css';
import {useNavigate} from 'react-router-dom';
import Logo from '../Logo_orange.png';
import lesson_icons from '../lessoncard-icons.png';
import omelet from '../omelet.jpeg';
import burger from '../burger.jpeg';
import sausage from '../sausage.jpeg';
import chicken from '../chicken.webp';

function Lessons(){
    let navigate = useNavigate();
    const reciepes = [

      {name: "Sausage",img:sausage},
      {name: "Chicken",img:chicken},
      {name: "Burger",img:burger},
  ];
    return (
    <><div class="row">
        <div class="column left">
          <img src={Logo} class='smallLogo'></img>
          <div class="container">
            <i class="fa fa-solid fa-user user" style={{ fontSize: '2em', color: 'var(--grey)' }} />
            <div class="btn-group">
              <button onClick={() => { navigate("/login-landing"); } }> Login </button>
              <button onClick={() => { navigate("/home"); } }>Home</button>
              <button onClick={() => { navigate("/profile"); } }>Profile</button>
              <button onClick={() => { navigate("/lessons"); } }>Lessons</button>
              <button onClick={() => { navigate("/ratatouillify"); } }>Ratatouillify</button>
            </div>
          </div>
        </div>
      </div><div class="column right">
          <span className='headertext lessontext1'>Pick up where you left off...</span>
          <br></br>
          <br></br>
          <button className='lessoncard' onClick={() => {navigate("/tutorial-landing")}}>
            <div className='lessoncard-cell'>
              <span className='row headertext-lessoncard'>Omelet</span>
              <div className="difficulty-label"><div className="difficulty-label-text">easy</div></div>
              <span className='time-label'>5 min</span>
              <img src={lesson_icons} class='lessoncard-icons'></img>
            </div>
            <div className="lessoncard-image-cell">
              <img src={omelet} className="lessoncard-image"></img>
            </div>
          </button>
          <span className='headertext lessontext2'>Other Suggested Lessons</span>
          <div class="suggestions">
            {reciepes.map((reciepe)=>(
              <button className="suggest" onClick={() => { navigate("/tutorial-landing"); } }>
              <div class='suggestcard'>
                <span class='row headertext-lessoncard'>{reciepe.name}</span>
                <div className="suggest-easy-label"><div className="suggest-easy-label-text">easy</div></div>
                <span className='suggest-time-label'>5 min</span>
              <img src={lesson_icons} class='suggest-icons'></img>
              </div>
              <div className="suggest-image-cell">
                <img src={reciepe.img} className="lessoncard-image"></img>
              </div>
              </button> 
            ))}
            </div>
          <button className="orangeButton" style={{left: '50%', top: '113%', height: '10%'}} onClick={() => {navigate("/reciepes");}}>View all reciepes</button>
        </div></>
  );
}

export default Lessons;