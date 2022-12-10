import "./NavBar.css"

import CartWidget from "../Cart/Widget/CartWidget"

import Logo from "../Logo/MainLogo"

import Menu from "../Menu/Menu"

import SideBar from "../SideBar/SideBar"

function NavBar() {
    return(
        <nav
        className="navBar"
        >
            <SideBar />
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
                <CartListContainer greeting="You haven't add anything to your cart yet, go spend some money" />
            </ul>
        </nav>

    );
};

export default NavBar;