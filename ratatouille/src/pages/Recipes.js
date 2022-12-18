import '../App.css';
import {useNavigate} from 'react-router-dom';
import Logo from '../Logo_orange.png';
import lesson_icons from '../lessoncard-icons.png';
import omelet from '../omelet.jpeg';
import sausage from '../sausage.jpeg';
import bacon from '../bacon.jpeg';
import burger from '../burger.jpeg';
import pasta from '../pasta.jpeg';
import noodles from '../noodles.jpeg';
import greeksalad from '../greeksalad.jpeg';
import chicken from '../chicken.webp';
import back from "../back icon.png";

function Reciepes(){
    let navigate = useNavigate();
    const easyreciepes = [

      {name: "Omelet",img:omelet},
      {name: "Sausage",img:sausage},
      {name: "Bacon",img:bacon},
      {name: "Chicken",img:chicken},
      {name: "Burger",img:burger},
      {name: "Noodles",img:noodles},
      {name: "Greek Salad",img:greeksalad}
  ];

  const mediumrecipes = [

    {name:"Pad Thai",img:omelet},
    {name: "Pasta",img:pasta},
    {name:"Meatballs",img:omelet}

  ];


  const hardreciepes = [

        {name:"Salmon",img:omelet}

  ];

    return (
    <><div class="row">
        <div className="backIcon">
          <img src={back} onClick={() => { navigate("/lessons"); } }></img>
        </div>
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
          <div class="all">
            {easyreciepes.map((reciepe)=>(
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
            {mediumrecipes.map((reciepe)=>(
              <button className="suggest" onClick={() => { navigate("/tutorial-landing"); } }>
              <div class='suggestcard'>
                <span class='row headertext-lessoncard'>{reciepe.name}</span>
                <div className="suggest-med-label"><div className="suggest-med-label-text">intermediate</div></div>
                <span className='suggest-time-label'>25 min</span>
              <img src={lesson_icons} class='suggest-icons'></img>
              </div>
              <div className="suggest-image-cell">
                <img src={omelet} className="lessoncard-image"></img>
              </div>
              </button> 
            ))}
            {hardreciepes.map((reciepe)=>(
              <button className="suggest" onClick={() => { navigate("/tutorial-landing"); } }>
              <div class='suggestcard'>
                <span class='row headertext-lessoncard'>{reciepe.name}</span>
                <div className="suggest-hard-label"><div className="suggest-hard-label-text">masterchef</div></div>
                <span className='suggest-time-label'>45 min</span>
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