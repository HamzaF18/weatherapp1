import "./NavBar.css"
import { useNavigate } from "react-router-dom";


const NavButton = ({ text, path }) => {

    const navigate = useNavigate()

    return (
        <button onClick={() => navigate(path)}>
            {text}
        </button>

    )

}

const NavBar = ()=>{
    return(
        <div className="nav-bar">
            <div className="nav-buttons">
                <NavButton text="Home" path="/"/>
                <NavButton text="Weather Map" path="/weather" />
                <NavButton text="Sign in" path="/login"/>
            </div>
        </div>
    )
}
export default NavBar;