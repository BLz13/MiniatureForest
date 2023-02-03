import "./SideBar.css";

import{
    QuerySnapshot,
    collection,
    getDocs
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";

import NavDropdownContainer from "./NavDropdownContainer";
import { NavLink } from "react-router-dom";
import {PAGES} from "../../../Utils/main-pages"
import SidebarCategories from "./SidebarCategories";
import { fireDatabase } from "../../../Firebase/config";

function SideBar (props) {

    const {sideCategoriesRef} = useRef();

    const {menuClick, sidebarStatus, reference} = props;

    const sidebarClass = sidebarStatus ? "hideSidebar" : "showSidebar";
    
    const categoriesCollection = collection(fireDatabase, "/categories");

    const [categoriesList, setCategoriesList] = useState();

    useEffect( () => {

        const  categories = [];
        
        getDocs(categoriesCollection)
            .then ((QuerySnapshot) => {
                QuerySnapshot.forEach( category => {
                    const categoryData = category.data();
                    categoryData.address = category.id;
                    categories.push(categoryData);
                });
            setCategoriesList(categories);
            console.log(`Categories successfully loaded from firebase`);
            console.log(`Categories loaded on categoriesList: ${categoriesList}`);
            })
            .catch ((error) => {
                console.error(`ERROR on {SidebarCategories} firebase call - ${error}`);
            })

    },[]);

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