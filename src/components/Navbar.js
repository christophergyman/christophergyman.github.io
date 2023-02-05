// Navigation Button component
function NavBarButton({ text, extra, link }) {
  return (
    <a href={link} target="blank">
      <button className={`btn text-bold normal-case ${extra}`}> {text} </button>
    </a>
  );
}
// Navbar component
function NavBar() {
  return (
    <div className="navbar p-5">
      <div className="flex flex-1">
        <NavBarButton extra={"btn-ghost text-xl"} text={"CHRISGYMAN.IO"} />
      </div>
      <NavBarButton
        extra={"btn-ghost text-lg"}
        text={"Linkedin"}
        link="https://www.linkedin.com/in/christophergayiuman/"
      />

      <NavBarButton extra={"btn-accent text-lg"} text={"Resume"} />
    </div>
  );
}

export default NavBar;
