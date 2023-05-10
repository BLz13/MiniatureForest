import "./SideBar.css";

import { useEffect, useRef, useState } from "react";

import NavDropdownContainer from "./NavDropdownContainer";
import { NavLink } from "react-router-dom";
import {PAGES} from "../../../Utils/main-pages"
import SidebarCategories from "./SidebarCategories";

function SideBar (props) {

    const {sideCategoriesRef} = useRef();

    const {menuClick, sidebarStatus, reference} = props;

    const sidebarClass = sidebarStatus ? "hideSidebar" : "showSidebar";

    const [categoriesList, setCategoriesList] = useState();

    return (
        <ul ref={reference} className={`sideBar ${sidebarClass}`}>
            {PAGES.map( (page) => (
                (page.id !== "categories") ? (
                    <li key={`${page.id}-page`} className="sidebarElements" >
                        <NavLink onClick={menuClick} to={page.path} className={( {isActive} ) => isActive ? "link is-active" : "link"} >
                            {page.name}
                        </NavLink>
                    </li>
                ) : (
                    <li key={`${page.id}-page`} className="sidebarElements" > 
                        {page.name}
                        <NavDropdownContainer>
                            <SidebarCategories
                                onClick={menuClick}
                                reference={sideCategoriesRef}
                                categoriesList={categoriesList}
                            />
                        </NavDropdownContainer>
                    </li>
                )
            ))}
        </ul>
    );
};

export default SideBar;