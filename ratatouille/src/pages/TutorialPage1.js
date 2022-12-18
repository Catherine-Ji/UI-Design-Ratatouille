import '../App.css';
import {useNavigate} from 'react-router-dom';
import video from '../tutorialMedia/omelet_1 720.mp4';
import snapshot from '../tutorialMedia/1.png';
import icon from '../tutorialMedia/Egg Cracking.png';

export default function TutorialPage1() {
    let navigate = useNavigate();
    return (
        <div className='TutorialPageWrapper'>
            <div className="tutorial-step">Step 1/6: Omelet</div>
            <div className="tutorial-step" style={{top: '15%'}}>Food prep -- Egg cracking </div>
            <div class="tutorial-exit" onClick={() => navigate('/home')}>
                <i class="fa-solid fa-x w3-xxlarge"></i>
            </div>
            <div className="tutorial-skill-icon">
                <img src={icon} alt="egg cracking icon" />
            </div>
            <div className="tutorial-scrollable-area">
                <div className="tutorial-scrollable-inner">
                    <div className="tutorial-skill-description">Crack eggs into a medium bowl</div>
                    <div className="tutorial-video">
                        <video width="100%" height="100%" loop muted autoPlay controls = ''>
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div>
                    <button className="tutorial-transcript-button" onClick={() => showHide()} id='transcript-btn'>Transcript</button>
                    <div id='tutorial-transcript'>
                        <div className="tutorial-step tutorial-transcript-header">Transcript</div>
                        <div className="tutorial-skill-description tutorial-transcript">
                            One at a time, tap the side of the egg against a hard surface, cracking the egg shell. <br></br>Then, use your thumbs to separate the shell where it’s cracked over the medium bowl. <br></br>Use a spoon to remove any shell fragments from the bowl. 
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
            <div className="tutorial-back-btn" style={{left: '89.1%'}} onClick={() => navigate('/tutorial-page-2')}>
                next
                <i class="fa-solid fa-right-long w3-xxlarge"></i>
            </div>
            <div className="tutorial-back-btn" onClick={() => navigate('/tutorial-landing')}>
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