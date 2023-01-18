import "./Menu.css";

import {ReactComponent as MenuIcon} from "../../../Assets/Images/Menu.svg"

export default function Menu (props) {

    const {onClick, reference} = props;
    
    return (
        <MenuIcon ref={reference} className={"menuIcon"} onClick={onClick} />
    );
};