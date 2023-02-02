import profpic from "./profpic.jpg"

function ProfilePicture() {
    return(
        <div>
            <img src={profpic} alt="React Image"
            className="
            rounded-full
            h-60
            shadow-xl
            border-accent
            border-2
            " />
        </div>
    );
}

export default ProfilePicture;