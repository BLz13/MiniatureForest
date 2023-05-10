import "./MainLogo.css";

import {ReactComponent as Circle} from "../../../assets/images/Circle.svg"
import {ReactComponent as Icon1} from "../../../assets/images/Logo1.svg";
import {ReactComponent as Icon2} from "../../../assets/images/Logo2.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Logo (props) {

    const {navbarStatus} = props;

    useEffect(() => {
        const icon2 = document.getElementById("icon2");
        const text1 = document.getElementById("logoText1");
        const text2 = document.getElementById("logoText2");        
        text1.classList.toggle("logoOpenNav");        
        text2.classList.toggle("logoOpenNav");
        icon2.classList.toggle("logoOpenNav");
    },[navbarStatus]);

    useEffect(() => {
        const circle = document.getElementById("circle");
        const icon1 = document.getElementById("icon1");
        const icon2 = document.getElementById("icon2");
        const text1 = document.getElementById("logoText1")
        const text2 = document.getElementById("logoText2")
        circle.classList.add("showCircle");
        icon2.classList.add("showIcon2");
        setTimeout(() => {
            icon1.classList.add("showIcon1");
            icon1.classList.remove("hide");
        }, 500);
        setTimeout(() => {
            circle.classList.remove("showCircle");
            circle.classList.add("hide");
        }, 2000);
        setTimeout(() => {
            icon1.classList.remove("showIcon1");
            icon1.classList.add("hide");
            text1.classList.remove("hide");
            text1.classList.add("showText");
            text2.classList.remove("hide");
            text2.classList.add("showText");
        }, 3500);
    },[]);


    
    return (
        <Link to="home" className="logo">
            <Circle className="circle" />
            <Icon1 className="icon1 hide" />
            <Icon2 className="icon2" />
            <p id="logoText1" className="text1 hide">Miniature</p>
            <p id="logoText2" className="text2 hide">Forest</p>
        </Link>
    );
};