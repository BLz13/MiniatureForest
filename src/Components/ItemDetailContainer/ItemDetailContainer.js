import "./ItemDetailContainer.css";

import {useParams} from "react-router-dom";

import {getItem} from "../../Utils/functions"

import { useEffect, useState } from "react";

export default function Item() {

    const [itemData, setItemData] = useState();

    const {item} = useParams();

    useEffect ( () => {
        getItem(item).then((itemData => {
            setItemData(itemData);
        }));
    }, []);

    return(
        <div>
            <p>{itemData.name}</p>      
            <p>{itemData.category}</p>
            <p>{itemData.description}</p>
        </div>
    )
}