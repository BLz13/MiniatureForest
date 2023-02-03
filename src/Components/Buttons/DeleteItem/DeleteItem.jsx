import "./DeleteItem.css"

import { ReactComponent as Trash } from "../../../Assets/Images/Trash.svg";

export default function DeleteItemBtn(props) {

    const {onClick} = props;

    return(
        <>
            <Trash
                className="trashCan"
                onClick={onClick}
            />
        </>
    );

}