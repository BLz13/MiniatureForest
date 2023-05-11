import "./MainLogo.css";

import { useEffect, useState } from "react";

import {ReactComponent as Circle} from "../../../assets/images/Circle.svg"
import {ReactComponent as Icon1} from "../../../assets/images/Logo1.svg";
import {ReactComponent as Icon2} from "../../../assets/images/Logo2.svg";
import { Link } from "react-router-dom";

export default function Logo (props) {

    const {navbarStatus} = props;

    const [classCircle, setClassCircle] = useState("circle");

    const [classIcon1, setClassIcon1] = useState("icon1 hide");

    const [classIcon2, setClassIcon2] = useState("icon2 hide");

    const [classText1, setClassText1] = useState("text1 hide");

    const [classText2, setClassText2] = useState("text2 hide");

    useEffect(() => {
        setClassIcon1("icon1")
        setClassIcon2("icon2");
        setClassText1("text1 showText")
        setClassText2("text2 showText")
        setTimeout(() => {
            setClassCircle("hide")
            setClassIcon1("hide")
            setClassText1("text1")
            setClassText2("text2")
        }, 5000);
    },[]);
    
    return (
        <Link to="/" className="logo">
            <Circle className={classCircle} />
            <Icon1 className={classIcon1} />
            <Icon2 className={ navbarStatus ? "icon2 logoOpenNav" : classIcon2 } />
            <p id="logoText1" className={ navbarStatus ? "text1 logoOpenNav" : classText1 }>Miniature</p>
            <p id="logoText2" className={ navbarStatus ? "text2 logoOpenNav" : classText2 }>Forest</p>
        </Link>
    );
};