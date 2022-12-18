import '../App.css';
import {useNavigate, Link} from 'react-router-dom';
import Logo from '../Logo_white.png';

export default function Create_account() {
    let navigate = useNavigate();
    return (
        <div className = 'loginpage'>
            <img src={Logo} class='extraLargeLogo_login'></img>
            <div class="login-field-wrapper">
                <span class="login-field-icon">
                    <i class="fa-regular fa-circle-user"></i>
                </span>
                <input class="login-input" type="text" placeholder='Name'></input>
            </div> 
            <div class="login-field-wrapper">
                <span class="login-field-icon">
                    <i class="fa-solid fa-at"></i>
                </span>
                <input class="login-input" type="text" placeholder='Email'></input>
            </div> 
            <div class="login-field-wrapper">
                <span class="login-field-icon">
                    <i class="fa-solid fa-lock"></i>
                </span>
                <input class="login-input" type="text" placeholder='Password'></input>
            </div> 
            <button className='loginbtn_grey btn-login' onClick={() => navigate("/intermediate")}>Create Account</button>
            <Link to="/login" className='link loginlink' >Login</Link>
        </div>
    );
}