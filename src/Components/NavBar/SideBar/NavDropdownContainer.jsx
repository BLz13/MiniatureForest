import "./NavDropdownContainer.css";

import { ReactComponent as Arrow } from "../../../Assets/Images/Arrow.svg";
import { useState } from "react";

export default function NavDropdownContainer(props) {

  const {children, title} = props;

  const [arrowState, setArrowState] = useState(true);
  
  const arrowClass = arrowState ? "openNavArrow" : "closeNavArrow";

  const dropmenuClass = arrowState ? "openNavDropmenu" : "closeNavDropmenu";

  const arrowStateHandler = () => {
    setArrowState(!arrowState)
  }

  return (
    <div className="navDropdownContainer">
        {title}
        <Arrow
          id="sidebarArrow"
          onClick={arrowStateHandler}
          className={`navArrow ${arrowClass}`}
        />
        <ul 
          id="sidebarDropmenu"
          className={`navDropmenu ${dropmenuClass}`}
        >
          {children}
        </ul>
    </div>
  );
};