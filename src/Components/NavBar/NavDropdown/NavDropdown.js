import "./NavDropdown.css"

import {CATEGORIES} from "../../../Services/items"
import { NavLink } from "react-router-dom";

export default function SidebarCategories(props) {

    const {onClickAction, reference} = props;

    return(
        CATEGORIES.map( (category) => (
            <li key={`${category.id}-category`}>
                <NavLink 
                    ref={reference}
                    onClick={onClickAction}
                    to={`/category/${category.id}`}
                    className={
                        ( {isActive} ) => isActive ? "sidebarCategories link is-active" : "link sidebarCategories"
                    }
                >
                    {category.name}
                </NavLink>
            </li>
        ))
    );
} 