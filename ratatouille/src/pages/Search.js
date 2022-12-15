import '../App.css';
import {useNavigate} from 'react-router-dom';
import Logo from '../Logo_orange.png';
import { useState } from 'react';

function Search(){
    let navigate = useNavigate();
    const [val, setVal] = useState("")
    
    const enter = () =>{
        //add search key and results
        alert(val)
    }
    const change = event => {
        setVal(event.target.value)
    }
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
                <form onSubmit={ enter }>
                    <input onChange ={change} type='text' placeholder='Search...' value={val} class='searchbartop'></input>
                </form>
            </div></>
  );
}

export default Search;