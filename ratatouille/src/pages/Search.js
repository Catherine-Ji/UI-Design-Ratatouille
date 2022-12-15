import '../App.css';
import {useNavigate} from 'react-router-dom';
import Logo from '../Logo_orange.png';
import { useState } from 'react';

function Search(){
    let navigate = useNavigate();
    const [val, setVal] = useState("")
    const [key, setKey] = useState("")


    const reciepes = [

        {name: "Omelete"},
        {name: "Sausage"},
        {name: "Egg"},
        {name: "Burger"}
    ]
    
    const enter=(e)=> {
        e.preventDefault();
        setKey(val)
    }

    const change = event => {
        event.preventDefault();
        setVal(event.target.value)
    }
    
    
    
    if (key.length > 0) {
        reciepes.filter((recipe) => {
            return recipe.name.match(key)
        });
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
                <form onSubmit={enter}>
                    <input onChange ={change} type='text' placeholder='Search...' value={val} class='searchbartop'></input>
                </form>
                <span className='headertext searchkey'>{key}</span>
                <table>
                    <tr>
                        <th>recipe</th>
                    </tr>
                    {reciepes.map(function (recipe) {
                        <div>
                            <tr>
                                <td>{recipe.name}</td>
                            </tr>
                        </div>;
                    })}
                </table>
            </div></>
  );
}

export default Search;