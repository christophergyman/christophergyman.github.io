
// Navigation Button component
function NavBarButton({text, extra}){
    return(
        <button className={`btn text-bold normal-case ${extra}`}> {text} </button>
    );
}
// Navbar component
function NavBar (){
    return (
         <div className="navbar p-5">
            <div className="flex flex-1">
                <NavBarButton extra={"btn-ghost text-xl"} text={"CHRISGYMAN.IO"}/>
            </div>
                <NavBarButton extra={"btn-ghost text-lg"} text={"Linkedin"}/>
                <NavBarButton extra={"btn-accent text-lg"} text={"Resume"}/>
        </div>
    );
}


export default NavBar;