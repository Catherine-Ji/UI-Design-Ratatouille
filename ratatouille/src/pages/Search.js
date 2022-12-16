import '../App.css';
//import List from './List';
import {useLocation, useNavigate, useNavigation} from 'react-router-dom';
import Logo from '../Logo_orange.png';
import { useEffect, useState } from 'react';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react';



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
        <div class="column right">
                        <form onSubmit={enter}>
                            <input onChange ={change} type='text' placeholder='Search...' value={val} class='searchbartop'></input>
                        </form>
                        <span className='headertext searchkey'>{key}</span>
                        <br></br><br></br><br></br>
                        <br></br><br></br><br></br>
                        <br></br><br></br><br></br>
                        <br></br><br></br><br></br>



                        <div className='results'>
                                <li key="test" className="list-item">
                                    <span>TEST</span>
                                </li>


                            {results.map((reciepe) => (
                                <li key={reciepe.name} className="list-item">
                                    <div className='item-primary-text'>{reciepe.name}</div>
                                </li>
                            ))}
                        </div>
                    </div>



        </div>
        
          );
}

export default Search;