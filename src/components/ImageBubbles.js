import linkedin from "./images/linkedin.svg"
import github from "./images/github.svg"
import resume from "./images/resume.svg"

function onClick () {
    console.log("CLICK!!");
}

function ImageBubbles (){
    return(
        <div className="drop-shadow-lg flex space-x-11 justify-center h-10">
            <img className="btn btn-ghost" src={linkedin}/>
            <img className="btn btn-ghost" src={github} onClick={onClick}/>
            <img className="btn btn-ghost" src={resume}/>
        </div>
    );
}

export default ImageBubbles;