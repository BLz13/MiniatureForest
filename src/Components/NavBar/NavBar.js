import "./NavBar.css"

import CartWidget from "../Cart/Widget/CartWidget"

import Logo from "../Logo/MainLogo"

import Menu from "../Menu/Menu"

import SideBar from "../SideBar/SideBar"

import { useState, useEffect } from "react"

function NavBar() {

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

    return(
        <nav className={`navBar ${navTrans}`}>
            <SideBar sidebarState={sidebarStatus}/>
            <ul className="items">
                <li className="menu">
                    <Menu onClick={menuClickHandler} />
                </li>
                <li>
                    <Logo />
                </li>
                <li className="cart">
                    <CartWidget />
                </li>
            </ul>
        </nav>

    );
};

export default NavBar;