import "./Navbar.css"

import { useEffect, useRef, useState } from "react"

import CartDropdown from "./Cart/CartDropdown"
import Logo from "./Logo/MainLogo"
import MenuIcon from "./MenuIcon/MenuIcon"
import SideBar from "./SideBar/SideBar"

export default function Navbar() {

    const sidebarRef = useRef();

    const menuIconRef = useRef();

    const [sidebarStatus, setSidebar] = useState(false);

    const [navbarStatus, setNavbar] = useState(false);
    
    const menuIconHandlerNavOff = () => {
        const filler = document.getElementById("Filler");
        const lines = document.getElementById("Lines");
        const menuIcon = document.getElementById("Menu");
        let fillerClass;
        let linesClass;
        let iconClass;
        linesClass = !sidebarStatus ? "hide" : "closeNavON";
        fillerClass = !sidebarStatus ? "open" : "hide";
        iconClass="menuIconNavON"
        filler.setAttribute("class", fillerClass);
        lines.setAttribute("class", linesClass);
        menuIcon.setAttribute("class", iconClass);
    }

    const menuIconHandlerNavOn = () => {
        const filler = document.getElementById("Filler");
        const lines = document.getElementById("Lines");
        const menuIcon = document.getElementById("Menu");
        let fillerClass;
        let linesClass;
        let iconClass;
        fillerClass = sidebarStatus ? "hide" : "close";
        linesClass = sidebarStatus ? "open" : "hide";
        iconClass="menuIcon"
        filler.setAttribute("class", fillerClass);
        lines.setAttribute("class", linesClass);
        menuIcon.setAttribute("class", iconClass);
    }

    const menuClickHandler = () => {
        setSidebar(!sidebarStatus);
        (window.scrollY >= 50) ? (
            setNavbar(true)
        ) : (
            setNavbar(!navbarStatus)
        )
    };

    const onScrollHandler = () => {
        (window.scrollY >= 50) ? (
            setNavbar(true)
        ) : (
            sidebarStatus === true ? setNavbar(true) : setNavbar(false)
        )
    };
    
    useEffect( () => { !navbarStatus ? menuIconHandlerNavOn() : menuIconHandlerNavOff() },[navbarStatus,sidebarStatus]);

    window.addEventListener("scroll", onScrollHandler);
    
    document.onmousedown = (event) =>{
        if ( (sidebarStatus === true) && (!sidebarRef.current.contains(event.target)) && (!menuIconRef.current.contains(event.target)) ){
            menuClickHandler();
            setSidebar(false);
        }
    }

    return(
        <nav className={ navbarStatus ? "navbar transOff" : "navbar transOn" }>
            <ul className="items">
                <li className="menuBox">
                    <MenuIcon reference={menuIconRef} onClick={menuClickHandler} />
                </li>
                <li>
                    <Logo navbarStatus={navbarStatus} />
                </li>
                <li className="cartContainer">
                    <CartDropdown navbarStatus={navbarStatus} />
                </li>
            </ul>
            <SideBar reference={sidebarRef} sidebarStatus={sidebarStatus} menuClick={menuClickHandler}/>
        </nav>

    );
};