import "./MenuIcon.css";

import {ReactComponent as MenuSvg} from "../../../Assets/Images/Menu.svg"

export default function MenuIcon (props) {

    const {onClick, reference} = props;

    return (
        <MenuSvg ref={reference} onClick={onClick} />
    );
};