import "./ItemListContainer.css";

function ItemListContainer (props) {

    const {greeting} = props

    return (
        <ul
            className="cartItemList"
        >
            <li>{greeting}</li>
        </ul>
    );
};

export default ItemListContainer;