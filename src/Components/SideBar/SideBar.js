import "./SideBar.css";

import NavButton from "../NavButton/NavButton"

function SideBar () {
    return (
        <ul
            className="sideBar"
        >
            <NavButton innerText="About Us"/>
            <NavButton innerText="Products"/>
            <NavButton innerText="Contact"/>
        </ul>
    );
};

export default SideBar;