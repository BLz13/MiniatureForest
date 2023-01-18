import "./SideBar.css";

import NavDropdown from "../NavDropdown/NavDropdown";
import NavDropdownContainer from "../NavDropdown/NavDropdownContainer";
import { NavLink } from "react-router-dom";
import {PAGES} from "../../../Utils/main-pages"
import { useRef } from "react";

function SideBar (props) {

    const {sideCategoriesRef} = useRef();

    const {menuClick, sidebarStatus, reference} = props;

    const sidebarClass = sidebarStatus ? "hideSidebar" : "showSidebar";

    return (
        <ul ref={reference} className={`sideBar ${sidebarClass}`}>
            {PAGES.map( (page) => (
                (page.id !== "products") ? (
                    <li key={`${page.id}-page`} className="sidebarElements" >
                        <NavLink onClick={menuClick} to={page.path} className={( {isActive} ) => isActive ? "link is-active" : "link"} >
                            {page.name}
                        </NavLink>
                    </li>
                ) : (
                    <li key={`${page.id}-page`} className="sidebarElements" > 
                        <NavLink onClick={menuClick} to={page.path} className={( {isActive} ) => isActive ? "link is-active" : "link"} >
                            Categories
                        </NavLink>
                        <NavDropdownContainer>
                            <NavDropdown onClick={menuClick} reference={sideCategoriesRef} />
                        </NavDropdownContainer>
                    </li>
                )
            ))}
        </ul>
    );
};

export default SideBar;