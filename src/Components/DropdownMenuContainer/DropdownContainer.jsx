import "./DropDownMenuContainer.css";

import { ReactComponent as Arrow } from "../../assets/images/Arrow.svg";

export default function DropdownMenuContainer(props) {

  const {children, arrowStateHandler} = props;

  return (
    <div className="dropMenuContainer">
        <Arrow
          id="sidebarArrow"
          onClick={arrowStateHandler}
          className="arrow closeArrow"
        />
        <ul 
          id="dropMenu"
          className="dropmenu closeDropMenu"
        >
          {children}
        </ul>
    </div>
  );
};