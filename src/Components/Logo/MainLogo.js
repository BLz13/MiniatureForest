import { NavLink } from "react-router-dom";
import "./MainLogo.css";

function Logo () {
    return (
        <NavLink
            to="home"
            className="logo"
        >
            <p>MiniatureForest</p>                
        </NavLink>
    );
};

export default Logo;