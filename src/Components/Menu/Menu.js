import "./Menu.css";

import {ReactComponent as MenuLogo} from "../../Assets/Images/Menu.svg"

export default function Menu (props) {

    const {onClick} = props;

    return (
        <MenuLogo
            className={"logo"}
            onClick={onClick}
        />
    );
};