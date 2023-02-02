import React from 'react';
import "./App.css";
import NavBar from "./components/Navbar";
import TitleSection from './components/TitleSection';
import ProfilePicture from './components/ProfilePicture';
import ImageBubbles from './components/ImageBubbles';

// Page component used for auto formatting all page content 
function Section({children}){
    return (
        <div className='xl:max-w-6xl pt-11'>
            {children}
        </div>
    ); 
}

// First message blub on landing page
function FirstBlurb(){
    return(
        <div>
            {/* <p className='prose'>As prior student and now full-time working professional understand how hard it is to get into the tech industry without feeling overwhelmed. To many this field seems daunting and scary but I'm here to provide you with guidance and advice on how I cruised through my early career of Computer Science. My academic history conists of a dual diploma in the International Baccalaureate (IB) and a Ontario Secondary School Diploma (OSSD) continuing on to study at The University of Exeter (UoE). Where as I am now working professionally in the tech industry in London as a Developer and at Awin as a Techincal Client Support Lead.</p> */}
            <p className='prose text-center'>Developer providing services for </p>
            <p className='prose text-center'>programming and system design needs.</p>
            <p className='prose text-center'>Join my network down below and lets get coding!</p>
        </div>
    );
}

//Main App
function App (){
    return (
        <div>
            <div className='h-full flex flex-col items-center '>
                <NavBar/>
                <div className='pt-11'><TitleSection/></div>
                <div className='pt-11'><FirstBlurb/></div>
                <div className='pt-11'><ProfilePicture/></div>
                <div className='pt-11'><ImageBubbles/></div>

            </div>
        </div>
    );  
}

export default App;