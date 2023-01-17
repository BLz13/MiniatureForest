import "./Menu.css";

import {ReactComponent as MenuLogo} from "../../../Assets/Images/Menu.svg"

export default function Menu (props) {

    const {onClick, reference} = props;
    
    return (
        <MenuLogo ref={reference} className={"menuIcon"} onClick={onClick} />
    );
};