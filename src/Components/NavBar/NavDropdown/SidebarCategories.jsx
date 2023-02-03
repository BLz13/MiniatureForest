import{
    QuerySnapshot,
    collection,
    getDocs
} from "firebase/firestore";
import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { fireDatabase } from "../../../Firebase/config";

export default function SidebarCategories(props) {
    
    const {onClickAction, reference} = props;

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