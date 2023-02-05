import linkedin from "./images/linkedin.svg"
import github from "./images/github.svg"
import resume from "./images/resume.svg"

function onClick () {
    console.log("CLICK!!");
}

function ImageLink ({src, link}){
    return(
        <a target="blank" href={link}>
            <img className="btn btn-ghost" src={src}/>
        </a>
    );
}

function ImageBubbles (){
    return(
        <div className="drop-shadow-lg flex space-x-11 justify-center h-10">
            <ImageLink src={linkedin} link="https://www.linkedin.com/in/christophergayiuman/"/>
            <ImageLink src={github} link="https://github.com/christophergyman"/>
            <ImageLink src={resume} link=""/>
        </div>
    );
}

export default ImageBubbles;