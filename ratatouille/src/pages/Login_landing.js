import '../App.css';
import {useNavigate} from 'react-router-dom';
import Logo from '../Logo_white.png';

export default function Login_landing(){
    return (
        <div className = 'loginpage'>
            <img src={Logo} class='extraLargeLogo'></img>
            <h1 className='headertext_white'> Let's get cookin' </h1>
            <button>Login</button>
            <button>Create Account</button>
        </div>
    );
}