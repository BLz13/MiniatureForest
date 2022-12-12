import "./ItemDetailContainer.css";

export default function Item(props) {

    const {name, description} = props;

    return(
        <div>
            <ul 
                className="popUp"
            >
                <li>{name}</li>
                <li>{description}</li>
            </ul>      
        </div>
    )
}