import "./MenuIcon.css";

import {ReactComponent as MenuSvg} from "../../../assets/images/Menu.svg"

export default function MenuIcon (props) {

    const {onClick, reference} = props;

    return (
        <MenuSvg ref={reference} onClick={onClick} />
    );
};