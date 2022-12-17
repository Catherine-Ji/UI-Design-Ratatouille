import '../App.css';
import {useNavigate} from 'react-router-dom';
import video from '../tutorialMedia/omelet 5 720.mp4';
import snapshot from '../tutorialMedia/5.png';
import icon from '../tutorialMedia/whisk.png';

export default function TutorialPage5() {
    let navigate = useNavigate();
    return (
        <div className='TutorialPageWrapper'>
            <div className="tutorial-step">Step 5/6: Omelet</div>
            <div className="tutorial-step" style={{top: '15%'}}>[Skill category] --  Whisking (in a skillet) </div>
            <div class="tutorial-exit" onClick={() => navigate('/home')}>
                <i class="fa-solid fa-x w3-xxlarge"></i>
            </div>
            <div className="tutorial-skill-icon" style={{left: '49.5%'}}>
                <img src={icon} alt="whisk icon" />
            </div>
            <div className="tutorial-scrollable-area">
                <div className="tutorial-scrollable-inner">
                    <div className="tutorial-skill-description">Pour in egg mixture and reduce heat to medium. Whisk eggs around skillet until the bottom begins to set. </div>
                    <div className="tutorial-video">
                        <video width="100%" height="100%" loop muted autoPlay controls = ''>
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div>
                    <button className="tutorial-transcript-button" onClick={() => showHide()} id='transcript-btn'>Transcript</button>
                    <div id='tutorial-transcript'>
                        <div className="tutorial-step tutorial-transcript-header">Transcript</div>
                        <div className="tutorial-skill-description tutorial-transcript">
                            Pour in egg mixture and reduce heat to medium. With the back of a fork or a heatproof rubber spatula, whisk eggs around skillet until the bottom begins to set. This takes only a few seconds. Add any fillings, if using. 
                        </div>
                    </div>
                    <div id = 'snapshots'>
                        <div className="tutorial-step tutorial-snapshot">Snapshots from this step:</div>
                        <div className="tutorial-snapshot-image"> 
                            <img className="snapshot-image" src={snapshot} alt="difficulty" /> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="tutorial-back-btn" style={{left: '89.1%'}} onClick={() => navigate('/tutorial-page-6')}>
                next
                <i class="fa-solid fa-right-long w3-xxlarge"></i>
            </div>
            <div className="tutorial-back-btn" onClick={() => navigate('/tutorial-page-4')}>
                <i class="fa-solid fa-left-long w3-xxlarge"></i>
                back
            </div>
        </div>
    );
}

function showHide(){
    var x = document.getElementById("tutorial-transcript");
    var snapshots = document.getElementById("snapshots");
    var button = document.getElementById("transcript-btn");
    if (x.style.display === 'none'){
        x.style.display = "block";
        snapshots.style.top = '71.04%';
        button.innerText = 'Hide';
    } else {
        x.style.display = 'none';
        snapshots.style.top = '56%';
        button.innerText = 'Transcript';
    }
}