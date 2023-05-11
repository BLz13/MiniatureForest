import "./SideBar.css";

import { useContext, useEffect, useRef, useState } from "react";

import Context from '../../../Context/Context'
import NavDropdownContainer from "./NavDropdownContainer";
import { NavLink } from "react-router-dom";
import {PAGES} from "../../../Utils/main-pages"
import SidebarCategories from "./SidebarCategories";

function SideBar (props) {

    const {menuClick, sidebarStatus, reference} = props;

    const {products} = useContext(Context)

    const { stock } = products
    
    const [categoriesList, setCategoriesList] = useState([]);

    const {sideCategoriesRef} = useRef();

    const sidebarClass = sidebarStatus ? "showSidebar" : "hideSidebar" ;

    function createList() {
        const categories = [];
        stock.map( product => {
            if ( categories.find( category => (category === product.category) ) === undefined ) {
                categories.push(product.category);
            };
        });
        return(categories);
    };

    useEffect( () => {
        setCategoriesList(createList())
    },[stock]);

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