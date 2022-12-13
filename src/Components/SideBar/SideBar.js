import { Link } from "react-router-dom";

import "./SideBar.css";

import {PAGES} from "../../Utils/main-pages"

import {CATEGORIES} from "../../Utils/items"

function SideBar (props) {

    const {sidebarState} = props;

    const sidebarClass = sidebarState ? "hideSidebar" : "showSidebar";

    return (
        <ul className={`sideBar ${sidebarClass}`}>
            {PAGES.map( (page) => (
                (page.id != "products") ? (
                    <li key={`{page.id}-page`}>
                        <Link to={`/${page.id}`}>
                            {page.name}
                        </Link>
                    </li>
                ) : (
                    <ul>
                        "Products"
                        {CATEGORIES.map( (category) => (
                            <li key={category.id}>
                                <Link to={`/category/${category.id}`}>
                                    {category.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )
            ))}
        </ul>
    );
};

export default SideBar;