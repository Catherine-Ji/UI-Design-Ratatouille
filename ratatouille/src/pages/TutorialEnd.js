import '../App.css';
import {useNavigate} from 'react-router-dom';
import points from '../tutorialMedia/points.png';

export default function TutorialEnd() {
    let navigate = useNavigate();
    return (
        <div>
            <div className="tutorial-end-title">
                Congrats on finishing this recipe!
            </div>
            <div className="tutorial-end-points">
                <img src={points} alt="+100 chef points" />
            </div>
            <div className="tutorial-end-skills" >+Food Prep</div>
            <div className="tutorial-end-skills" style={{left: '46%'}}>+Seasoning</div>
            <div className="tutorial-end-skills" style={{left: '60%'}}>+Skillet Skills</div>
            <button className="tutorial-end-button orangeButton" onClick={() => navigate('/home')}>Back to home</button>
        </div>
    );
}