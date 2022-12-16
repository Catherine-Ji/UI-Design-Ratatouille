import '../App.css';
import {useNavigate} from 'react-router-dom';
import Logo from '../Logo_orange.png';
import UploadImage from '../upload_image.png';
import Microphone from '../microphone.png'
import FileIcon from '../fileicon.png'
import Delete from '../delete-icon.png'

function Upload(){
    let navigate = useNavigate();
    return(
    <div class="row">
      <div class="column left">
        <img src={Logo} class='smallLogo'></img>
        <div class="container">
          <i class="fa fa-solid fa-user user" style={{ fontSize: '2em' }} />
          <div class="btn-group">
            <button onClick={() => {navigate("/login-landing")}}> Login </button>
            <button onClick={() => {navigate("/")}}>Home</button>
            <button onClick={() => {navigate("/profile");}}>Profile</button>
            <button onClick={() => {navigate("/lessons");}}>Lessons</button>
            <button onClick={() => {navigate("/ratatouillify");}}>Ratatouillify</button>
          </div>
        </div>
      </div>
      <div class="column right-ratatouillify">
        <div class="ratatouillify-content">
        <div class="ratatouillify-title"> 
            <h1>Ratatouilli-fy a recipe and create a custom lesson plan! </h1>
        </div>
        <div class="ratatouillify-upload">
            <h1>Upload </h1>
            <button id="uploaded-btn" >  
                <div class="uploaded-btn-content"> 

                    <img src={FileIcon} alt="file icon" class='fileimage'></img> 
                    <span class="recipe-file"> omeleterecipe.txt </span> 
                    <br>
                    </br>  
                    <span class="file-info" >7.4MB 100% </span> 


                </div> 
            </button>
           <a href="../ratatouillify"> <img src={Delete} alt="microphone icon for verbally uploading a recipe" class="microphoneimage"></img> </a>
           

        </div>
        <h1 id="or"> OR </h1>

        <div class="ratatouillify-manually-input">
            <h1> Manually Input </h1>
            <textarea id="manual-textarea" rows="4" cols="50"> Type or paste your recipe here...</textarea> <img src={Microphone} alt="microphone icon for verbally uploading a recipe" class="microphoneimage"></img>
        </div>

        <div class="ratatouillify-submit">
            <h1> Submit </h1>
            <button onClick={() => {navigate("/loading-recipe");}} class="uploaded-ratatouillify-submit-btn"> Ratatouilify </button>
        </div>

      </div>
      </div>
    </div>

    )
}

export default Upload;