import "./SideBar.css";

import {PAGES} from "../../Utils/main-pages"

import { NavLink } from "react-router-dom";

import {CATEGORIES} from "../../Services/items"

function SideBar (props) {

    const {sidebarState} = props;

    const sidebarClass = sidebarState ? "hideSidebar" : "showSidebar";

    return (
        <ul className={`sideBar ${sidebarClass}`}>
            {PAGES.map( (page) => (
                (page.id !== "products") ? (
                    <li key={`${page.id}-page`}>
                        <NavLink 
                            to={`/${page.id}`}
                            className={( {isActive} ) => isActive ? "link is-active" : "link"}
                        >
                            {page.name}
                        </NavLink>
                    </li>
                ) : (
                    <ul key={`${page.id}-page`}>
                        "Products"
                        {CATEGORIES.map( (category) => (
                            <li key={`${category.id}-category`}>
                                <NavLink to={`/category/${category.id}`}>
                                    {category.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                )
            ))}
        </ul>
    );
};

export default SideBar;