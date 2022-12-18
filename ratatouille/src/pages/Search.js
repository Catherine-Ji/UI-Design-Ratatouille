import '../App.css';
//import List from './List';
import {useLocation, useNavigate, useNavigation} from 'react-router-dom';
import Logo from '../Logo_orange.png';
import { useEffect, useState } from 'react';
import React, { Component } from 'react';
import lesson_icons from "../lessoncard-icons.png";
import omelet from "../omelet.jpeg";



function Search({}){
    let navigate = useNavigate();
    
    const [val, setVal] = useState("");
    const [key, setKey] = useState("");
    const location = useLocation();
    console.log(location.state); 
    console.log(location.state.searchKey); 
    useEffect(() =>{
        setKey(location.state.searchKey); 
    }, [])
    console.log(key)

    const reciepes = [

        {name: "Omelete"},
        {name: "Sausage"},
        {name: "Egg"},
        {name: "Burger"}
    ];
    
    const [results,setResults] = useState(reciepes);


    const enter=(e)=> {
        e.preventDefault();
        setKey(val)

/*         if (key.length > 0) {
            const found = reciepes.filter((recipe)=>{
                return recipe.name.toLowerCase().startsWith(key.toLowerCase());
            });
            setResults(found)
        } */
    } 

    const change = event => {
        event.preventDefault();
        setVal(event.target.value)
    }

    
    
    return (
    <div class="row">
            <div class="column left">
                <img src={Logo} class='smallLogo'></img>
                <div class="container">
                    <i class="fa fa-solid fa-user user" style={{ fontSize: '2em', color: 'var(--grey)' }} />
                    <div class="btn-group">
                        <button onClick={() => { navigate("/login-landing"); } }> Login </button>
                        <button onClick={() => { navigate("/"); } }>Home</button>
                        <button onClick={() => { navigate("/profile"); } }>Profile</button>
                        <button onClick={() => { navigate("/lessons"); } }>Lessons</button>
                        <button onClick={() => { navigate("/ratatouillify"); } }>Ratatouillify</button>
                    </div>
                </div>
            </div>
        <div class="column right">
                        <br></br><br></br>
                        <form onSubmit={enter}>
                            <input onChange ={change} type='text' placeholder='Search...' value={val} class='searchbar'></input>
                        </form>
                        <span className='headertext searchkey'>{key}</span>
                        <span className="search-subtext">5 results</span>
                        <br></br><br></br><br></br>



                        <div className='results'>
                            {results.map((reciepe) => (
                                <li className="list-item">
                                    <div class='searchcard'>
                                        <span class='row headertext-lessoncard'>{reciepe.name}</span>
                                        <div className="search-difficulty-label"><div className="search-difficulty-label-text">easy</div></div>
                                        <span className='search-time-label'>5 min</span>
                                        <img src={lesson_icons} class='search-icons'></img>
                                    </div>
                                    <div className="search-image-cell">
                                        <img src={omelet} className="lessoncard-image"></img>
                                    </div>
                                </li>
                            ))}
                        </div>
                    </div>



        </div>
        
          );
}

export default Search;