import { useContext, useEffect, useState } from "react";

import Context from "../../../Context/Context";
import { NavLink } from "react-router-dom";

export default function SidebarCategories(props) {
    
    const {store} = useContext(Context)

    const {categories} = store

    const {onClickAction, reference} = props;

    const [categoriesList, setCategoriesList] = useState();

    useEffect( () => {
        setCategoriesList(categories);
    },[])

    return(
        (categoriesList === undefined) ? (
            <p>Loading....</p>
        ) : (
            categoriesList.map( (category) => (
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
        )
    )
}; 