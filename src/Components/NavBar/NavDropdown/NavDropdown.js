import "./NavDropdown.css"

import Context from "../../../Context/Context";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

export default function SidebarCategories(props) {
    
    const {store} = useContext(Context)

    const {categories} = store

    const {onClickAction, reference} = props;

    return(
        categories.map( (category) => (
            <li key={`${category.id}-category`}>
                <NavLink 
                    ref={reference}
                    onClick={onClickAction}
                    to={`/categories/${category.id}`}
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