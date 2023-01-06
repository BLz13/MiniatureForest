import { NavLink } from "react-router-dom";

import {ReactComponent as Circle } from "../../Assets/Images/Circle.svg";
import {ReactComponent as Icon1 } from "../../Assets/Images/Logo1.svg";
import {ReactComponent as Icon2 } from "../../Assets/Images/Logo2.svg";

import "./MainLogo.css";

function Logo () {
    return (
        <NavLink
            to="home"
            className="logo"
        >
            <Circle 
                className="circle showCircle"
            />
            <Icon1
                className="icon1 hide"
            />
            <Icon2
                className="icon2 hide"
            />
            <p
                className="text hide"
            >
                MiniatureForest
            </p>                
        </NavLink>
    );
};

export default Logo;