import '../App.css';
import {useNavigate} from 'react-router-dom';
import Logo from '../Logo_white.png';

export default function Login_landing(){
    let navigate = useNavigate();
    return (
        <div className = 'loginpage'>
            <img src={Logo} className='extraLargeLogo_landing'></img>
            <h1 className='headertext_white loginlandingtext'> Let's get cookin' </h1>
            <button className='loginbtn_white' onClick={() => navigate("/login")}>Login</button>
            <button className='loginbtn_grey' onClick={()=> navigate("/create-account")}>Create Account</button>
        </div>
    );
}