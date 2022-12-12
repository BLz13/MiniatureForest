import { NavLink } from "react-router-dom";

import "./SideBar.css";

function SideBar (props) {

    const {pages} = props;

    return (
        <ul
            className="sideBar"
        >
            {pages.map( (page) => (
                <li key={`{page.id}-page`}>
                    <NavLink
                        to={page.id}
                        className={( {isActive} ) => isActive ? "link show" : "link"}
                    >
                        {page.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default SideBar;