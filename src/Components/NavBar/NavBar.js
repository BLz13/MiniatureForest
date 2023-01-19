import "./NavBar.css"

import { useEffect, useRef, useState } from "react"

import CartWidget from "./Cart/Widget/CartWidget"
import Logo from "./Logo/MainLogo"
import MenuIcon from "./MenuIcon/MenuIcon"
import SideBar from "./SideBar/SideBar"

function NavBar() {

    const sidebarRef = useRef();

    const menuIconRef = useRef();

    const [sidebarStatus, setSidebar] = useState(true);

    const [navbarStatus, setNavbar] = useState(true);

    const [menuIconStatus, setMenuIcon] = useState(true);
    
    const menuIconHandler = () => {
        const filler = document.getElementById("Filler");
        const lines = document.getElementById("Lines");
        const menuIcon = document.getElementById("Menu");
        let fillerClass;
        let linesClass;
        let iconClass;
        if (menuIconStatus===true) {
            fillerClass = sidebarStatus ? "hide" : "close";
            linesClass = sidebarStatus ? "open" : "hide";
            iconClass="menuIcon"
        } {
            fillerClass = sidebarStatus ? "hide" : "closeNavON";
            linesClass = sidebarStatus ? "open" : "hide";
            iconClass="menuIconNavON"
        }        
        filler.setAttribute("class", fillerClass);
        lines.setAttribute("class", linesClass);
        menuIcon.setAttribute("class", iconClass);
    }

    const onScrollHandler = () => {
        (window.scrollY >= 50) ? (
            setNavbar(false)
        ) : (
            (sidebarStatus===true) ? (setNavbar(true)) : (setNavbar(false))            
        )
    };

    window.addEventListener("scroll", onScrollHandler);
    
    const menuClickHandler = () => {
        setSidebar(!sidebarStatus);
        (window.scrollY >= 50) ? (
            setNavbar(false)
        ) : (
            setNavbar(!navbarStatus)
        )
    };
    
    useEffect(() => {
        menuIconHandler();
}, [menuIconStatus]);
    
    useEffect(() => {
        if (navbarStatus===true) {
            setMenuIcon(true);
        } {
            setMenuIcon(false);
        }
}, [navbarStatus]);

    useEffect(() => {
        document.onmousedown = (event) =>{
            if ( (sidebarStatus === false) && (!sidebarRef.current.contains(event.target)) && (!menuIconRef.current.contains(event.target)) ){
                menuClickHandler();
                setSidebar(true);
            }
        }
    })

    return(
        <nav className={navbarStatus ? "navBar transOn" : "navBar transOff"}>
            <SideBar reference={sidebarRef} sidebarStatus={sidebarStatus} menuClick={menuClickHandler}/>
            <ul className="items">
                <li className="menuBox"> <MenuIcon reference={menuIconRef} onClick={menuClickHandler} /> </li>
                <li> <Logo navbarStatus={navbarStatus} /> </li>
                <li className="cartBox"> <CartWidget navbarStatus={navbarStatus} /> </li>
            </ul>
        </nav>

    );
};

export default NavBar;