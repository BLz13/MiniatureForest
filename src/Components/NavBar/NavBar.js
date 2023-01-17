import "./NavBar.css"

import { useEffect, useRef, useState } from "react"

import CartWidget from "./Cart/Widget/CartWidget"
import Logo from "./Logo/MainLogo"
import Menu from "./Menu/Menu"
import SideBar from "./SideBar/SideBar"

function NavBar() {

    const sidebarRef = useRef();

    const menuIconRef = useRef();
    
    const [sidebarStatus, setSideBar] = useState(true)

    const navTrans = sidebarStatus ? "transOn" : "transOff"

    useEffect(() => {
        const lines = document.getElementById("Lines");
        lines.setAttribute("class", "hide")
    }, [])
    
    const menuClickHandler = () => {
        setSideBar(!sidebarStatus)
        const filler = document.getElementById("Filler");
        const lines = document.getElementById("Lines");
        const fillerState = !sidebarStatus ? "open" : "close";
        const linesState = sidebarStatus ? "open" : "close";
        filler.setAttribute("class", fillerState)
        lines.setAttribute("class", linesState)
    }

    useEffect(() => {
        if (sidebarStatus === false) {
            document.onmousedown = (event) =>{
                if ( (!sidebarRef.current.contains(event.target)) && (!menuIconRef.current.contains(event.target)) ){
                    menuClickHandler();
                    setSideBar(true);
                }
            }
        }
    })

    return(
        <nav className={`navBar ${navTrans}`}>
            <SideBar reference={sidebarRef} sidebarStatus={sidebarStatus} setSideBar={setSideBar}/>
            <ul className="items">
                <li className="menu"> <Menu reference={menuIconRef} onClick={menuClickHandler} /> </li>
                <li> <Logo /> </li>
                <li className="cart"> <CartWidget /> </li>
            </ul>
        </nav>

    );
};

export default NavBar;