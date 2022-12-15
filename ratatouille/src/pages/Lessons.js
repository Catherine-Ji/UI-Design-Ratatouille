import '../App.css';
import {useNavigate} from 'react-router-dom';
import Logo from '../Logo_orange.png';

function Lessons(){
    let navigate = useNavigate();
    return (
    <><div class="row">
        <div class="column left">
          <img src={Logo} class='smallLogo'></img>
          <div class="container">
            <i class="fa fa-solid fa-user user" style={{ fontSize: '2em' }} />
            <div class="btn-group">
              <button onClick={() => { navigate("/login-landing"); } }> Login </button>
              <button onClick={() => { navigate("/"); } }>Home</button>
              <button onClick={() => { navigate("/profile"); } }>Profile</button>
              <button onClick={() => { navigate("/lessons"); } }>Lessons</button>
              <button onClick={() => { navigate("/ratatouillify"); } }>Ratatouillify</button>
            </div>
          </div>
        </div>
      </div><div class="column right">
          <span className='headertext lessontext1'>Pick up where you left off...</span>
          <br></br>
          <button class='lessoncard'>lesson card</button>

        </div></>
  );
}

export default Lessons;