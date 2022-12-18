import '../App.css';
import {useNavigate} from 'react-router-dom';
import Logo from '../Logo_orange.png';
import lesson_icons from '../lessoncard-icons.png';
import omelet from '../omelet.jpeg';

function Reciepes(){
    let navigate = useNavigate();
    const reciepes = [

      {name: "Omelet"},
      {name: "Sausage"},
      {name: "Egg"},
      {name: "Bacon"},
      {name: "Chicken"},
      {name: "Pasta"},
      {name: "Burger"}
  ];
    return (
    <><div class="row">
        <div class="column left">
          <img src={Logo} class='smallLogo'></img>
          <div class="container">
            <i class="fa fa-solid fa-user user" style={{ fontSize: '2em' }} />
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
          <div class="all">
            {reciepes.map((reciepe)=>(
              <button className="suggest">
              <div class='suggestcard'>
                <span class='row headertext-lessoncard'>{reciepe.name}</span>
                <div className="suggest-difficulty-label"><div className="suggest-difficulty-label-text">easy</div></div>
                <span className='suggest-time-label'>5 min</span>
              <img src={lesson_icons} class='suggest-icons'></img>
              </div>
              <div className="suggest-image-cell">
                <img src={omelet} className="lessoncard-image"></img>
              </div>
              </button> 
            ))}
            </div>
        </div></>
  );
}

export default Reciepes;