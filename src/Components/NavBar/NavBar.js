import "./NavBar.css"

import {PAGES} from "../../Utils/main-pages"

import CartWidget from "../Cart/Widget/CartWidget"

import Logo from "../Logo/MainLogo"

import Menu from "../Menu/Menu"

import SideBar from "../SideBar/SideBar"

function NavBar() {
    return(
        <nav
        className="navBar"
        >
            <SideBar pages={PAGES} />
            <ul
                className="items"
            >
                <li
                    id="menu"
                >
                    <Menu />
                </li>
                <li>
                    <Logo />
                </li>
                <li
                    id="cart"
                >
                    <CartWidget />
                </li>
            </ul>
        </nav>

    );
};

export default NavBar;