import '../App.css';
import {useNavigate} from 'react-router-dom';
import video from '../tutorialMedia/omelet_3 720.mp4';
import snapshot from '../tutorialMedia/3.png';
import icon from '../tutorialMedia/whisk.png';

export default function TutorialPage3() {
    let navigate = useNavigate();
    return (
        <div className='TutorialPageWrapper'>
            <div className="tutorial-step">Step 3/6: Omelet</div>
            <div className="tutorial-step" style={{top: '15%'}}>[Skill category] -- Whisking (an egg) </div>
            <div class="tutorial-exit" onClick={() => navigate('/home')}>
                <i class="fa-solid fa-x w3-xxlarge"></i>
            </div>
            <div className="tutorial-skill-icon" style={{left: '49.5%'}}>
                <img src={icon} alt="whisk icon" />
            </div>
            <div className="tutorial-scrollable-area">
                <div className="tutorial-scrollable-inner">
                    <div className="tutorial-skill-description">Whisk with a fork until egg whites are incorporated into yolks. Mix in herbs, if using. </div>
                    <div className="tutorial-video">
                        <video width="100%" height="100%" loop muted autoPlay controls = ''>
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div>
                    <button className="tutorial-transcript-button" onClick={() => showHide()} id='transcript-btn'>Transcript</button>
                    <div id='tutorial-transcript'>
                        <div className="tutorial-step tutorial-transcript-header">Transcript</div>
                        <div className="tutorial-skill-description tutorial-transcript">
                            Season the eggs with a splash of water (this helps get the eggs a bit fluffier), salt, and ground black pepper. 
                        </div>
                    </div>
                    <div id = 'snapshots'>
                        <div className="tutorial-step tutorial-snapshot">Snapshots from this step:</div>
                        <div className="tutorial-snapshot-image"> 
                            <img className="snapshot-image" src={snapshot} alt="images of snapshot from this step" /> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="tutorial-back-btn" style={{left: '89.1%'}} onClick={() => navigate('/tutorial-page-4')}>
                next
                <i class="fa-solid fa-right-long w3-xxlarge"></i>
            </div>
            <div className="tutorial-back-btn" onClick={() => navigate('/tutorial-page-2')}>
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