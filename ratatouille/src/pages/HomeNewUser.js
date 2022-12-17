import '../App.css';
import {useNavigate} from 'react-router-dom';
import Logo from '../Logo_orange.png';
import { useState } from 'react';
import lesson_icons from "../lessoncard-icons.png";
import omelet from "../omelet.jpeg";
import {Helmet} from "react-helmet";



function Home_newUser() {
  let navigate = useNavigate();
  const [searchkey, setSearch] = useState("");
  const [val, setVal] = useState("");

  const submitsearch=(event)=>{
    event.preventDefault();
    setSearch(val);
    console.log(val)
    console.log(searchkey)
    navigate("/search",{
      state: {
        searchKey: val
      }
    });
  }


  const change = event => {
    event.preventDefault();
    setVal(event.target.value)
    console.log(val)
}


    return (
    <div class="row">
      <Helmet>
        <meta http-equiv="refresh" content=".01;url=./onboarding-welcome/" />
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
      <div class="column right">
        <img src={Logo} class='largeLogo'></img>
        <div class="circle1 yellow"></div>
        <div class="circle2 yellow"></div>
        <div class="circle3 yellow"></div>
        <span className='headertext hometext1' >Get started on a &nbsp;</span><span class='headertext home-newUser-text2 orangetext'>lesson plan</span><span class='headertext home-newUser-text3'>...</span>
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
        <span className='headertext searchtext1' >Get help with something</span><span class='headertext searchtext2 orangetext'> &nbsp; specifc</span><span class='headertext searchtext3'>...</span>
        {/* search bar */}
        <form onSubmit={submitsearch} className="home-search-wrapper">
          <span class="home-search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          <input type='text' onChange = {change} placeholder='Search...' class='searchbar'></input>
        </form>
        <div className="search-suggestions">
          <span className="small-text-home search-title">Top Suggested</span>
          <span className="small-text-home search-hint">easy recipes</span>
          <span className="small-text-home search-hint">knife skills</span>
          <span className="small-text-home search-hint">pasta recipes</span>
        </div>
        <span className='headertext rathometext1' >Upload a recipt to be </span><span className='headertext rathometext2 orangetext'> &nbsp; Ratatouilli-fied</span><span className='headertext rathometext3'>...</span>
        <button className="orangeButton" onClick={() => {navigate("/ratatouillify");}}>Ratatouillify</button>
        <div className="rat-home-text">
          <h3 className="small-text-home">Don’t see the recipe you’re looking for?</h3>
          <h3 className='small-text-home'>We can Ratatouillify it and help you create an original lesson plan!</h3>
        </div>
      </div>
    </div>
  );
}

export default Home_newUser;