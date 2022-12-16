import '../App.css';
import {useNavigate} from 'react-router-dom';
import Logo from '../Logo_orange.png';
import { useState } from 'react';
import lesson_icons from "../lessoncard-icons.png";
import omelet from "../omelet.jpeg";



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
        <button class='lessoncard'>lesson card</button>
        <span className='headertext searchtext1' >Get help with something</span><span class='headertext searchtext2 orangetext'> &nbsp; specifc</span><span class='headertext searchtext3'>...</span>
        {/* search bar */}
        <form onSubmit={submitsearch} className="home-search-wrapper">
          <span class="home-search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          <input type='text' onChange = {change} placeholder='Search...' class='searchbar'></input>
        </form>
        <span className='headertext rathometext1' >Upload a recipt to be </span><span className='headertext rathometext2 orangetext'> &nbsp; Ratatouilli-fied</span><span className='headertext rathometext3'>...</span>
        <button className="orangeButton" onClick={() => {navigate("/ratatouillify");}}>Ratatouillify</button>
        <span className="small-text-home">Don’t see the recipe you’re looking for?</span>
        <span className='small-text-home'>We can Ratatouillify it and help you create an original lesson plan!</span>
      </div>
    </div>
  );
}

export default Home_newUser;