import '../App.css';
import {useNavigate} from 'react-router-dom';
import skills from '../Lesson page skills.png';

export default function Tutorial_landing() {
    let navigate = useNavigate();
    return (
        <div className="tutorial-landing">
            <div>difficulty</div>
            <div>yeilds   1 serving</div>
            <div>prep time  10 minutes</div>
            <div class="tutorial-exit" onClick={() => navigate('/home')}>
                <i class="fa-solid fa-x w3-xxlarge"></i>
            </div>
            <button className="orangeButton tutorial-start">Start cooking!</button>
            <h1 className='tutorial-header' style={{top: '10%'}}>Skills in this recipe:</h1>
            <img className="lesson-page-skills" src={skills} alt="skills" />
            <h1 className='tutorial-header' style={{top: '40%'}}>Tools and Equipments:</h1>
            <div className="tutorial-equipments">insert ingredients hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</div>
            <h1 className='tutorial-header' style={{top: '70%'}}>Ingredients:</h1>
            <div className="tutorial-ingredients"></div>
            <div className="tutorial-padding"></div>
        </div>
    );
}