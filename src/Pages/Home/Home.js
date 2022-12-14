import "./Home.css";

import ItemList from "../../Components/ItemList/ItemListConteiner"

import {ITEMS} from "../../Services/items"

export default function Portfolio() {
    return(
        <div
            className="home"
        >
            <ItemList items={ITEMS}/>
        </div>
    );
}