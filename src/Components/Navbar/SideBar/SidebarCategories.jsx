import { NavLink } from "react-router-dom";

export default function SidebarCategories(props) {
    
    const {onClickAction, reference, categoriesList} = props;

    return(
        (categoriesList === undefined) ? (
            <p>Loading....</p>
        ) : (
            categoriesList.map( (category) => (
                <li key={`${category}-category`}>
                    <NavLink 
                        ref={reference}
                        onClick={onClickAction}
                        to={`/home/categories/${category}`}
                        className={
                            ( {isActive} ) => isActive ? "sidebarCategories link is-active" : "link sidebarCategories"
                        }
                    >
                        {category}
                    </NavLink>
                </li>
            ))
        )
    )
}; 