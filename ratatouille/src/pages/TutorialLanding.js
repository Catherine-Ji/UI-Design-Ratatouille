import '../App.css';
import {useNavigate} from 'react-router-dom';
import skills from '../Lesson-page-skills.png';
import tutorial_ingredients from '../Tutorial-ingredients.png';
import tutorial_tools from '../Tutorial-tools.png';
import tutorial_difficulty from '../Tutorial-difficulty.png';

export default function Tutorial_landing() {
    let navigate = useNavigate();
    return (
        <div className="tutorial-landing">
            <div className="tutorial-header">
                <img className="tutorial-difficulty" src={tutorial_difficulty} alt="difficulty" />
                <div className='tutorial-description-bold'>Yields Time</div>
                <div className='tutorial-description'>1 serving 5 minutes</div>
            </div>
            <div class="tutorial-exit" onClick={() => navigate('/home')}>
                <i class="fa-solid fa-x w3-xxlarge"></i>
            </div>
            <button className="orangeButton tutorial-start" onClick={() => navigate('/tutorial-page-1')}>Start cooking!</button>
            <h1 className='tutorial-header' style={{top: '15%'}}>Skills in this recipe:</h1>
            <img className="tutorial-skills" src={skills} alt="skills" />
            <h1 className='tutorial-header' style={{top: '45%'}}>Tools and Equipment:</h1>
            <div className="tutorial-equipments">
                <img className="tools-image" src={tutorial_tools} alt="tools" />
            </div>
            <h1 className='tutorial-header' style={{top: '80%'}}>Ingredients:</h1>
            <div className="tutorial-ingredients">
                <img className="ingredients-image" src={tutorial_ingredients} alt="ingredients" />
            </div>
            <div className="tutorial-padding"></div>
        </div>
    );
}