import "./SideBar.css";

import { useRef, useState } from "react";

import DropDownMenuContainer from "./DropDownMenu/DropDownMenuContainer";
import { NavLink } from "react-router-dom";
import {PAGES} from "../../../Utils/main-pages"
import SidebarCategories from "./DropDownMenu/Categories/Categories";

function SideBar (props) {

    const {sideCategoriesRef} = useRef();

    const [arrowState, setArrowState] = useState(true);

    const {sidebarStatus, setSidebar , reference} = props;

    const sidebarClass = sidebarStatus ? "hideSidebar" : "showSidebar";

    const sidebarClickHandler = () => {
        setSidebar(!sidebarStatus)
        const filler = document.getElementById("Filler");
        const lines = document.getElementById("Lines");
        const fillerState = !sidebarStatus ? "open" : "close";
        const linesState = sidebarStatus ? "open" : "close";
        filler.setAttribute("class", fillerState)
        lines.setAttribute("class", linesState)
    }

    const arrowStateHandler = () => {
        setArrowState(!arrowState)
        const dropMenu = document.getElementById("dropMenu");
        const arrow = document.getElementById("sidebarArrow");
        const arrowClass = arrowState ? "openArrow" : "closeArrow";
        const dropmenuClass = arrowState ? "openDropMenu" : "closeDropMenu";
        arrow.setAttribute("class", `arrow ${arrowClass}`)
        dropMenu.setAttribute("class", `dropmenu ${dropmenuClass}`)
    }

    return (
        <ul ref={reference} className={`sideBar ${sidebarClass}`}>
            {PAGES.map( (page) => (
                (page.id !== "products") ? (
                    <li key={`${page.id}-page`} className="sidebarElements" >
                        <NavLink onClick={sidebarClickHandler} to={page.path} className={( {isActive} ) => isActive ? "link is-active" : "link"} >
                            {page.name}
                        </NavLink>
                    </li>
                ) : (
                    <li key={`${page.id}-page`} className="sidebarElements" > 
                        <NavLink onClick={sidebarClickHandler} to={page.path} className={( {isActive} ) => isActive ? "link is-active" : "link"} >
                            Categories
                        </NavLink>
                        <DropDownMenuContainer arrowStateHandler={arrowStateHandler} >
                            <SidebarCategories onClick={sidebarClickHandler} reference={sideCategoriesRef} />
                        </DropDownMenuContainer>
                    </li>
                )
            ))}
        </ul>
    );
};

export default SideBar;