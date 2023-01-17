import "./DropDownMenuContainer.css";

import { ReactComponent as Arrow } from "../../../../Assets/Images/Arrow.svg";

export default function DropDownMenuContainer(props) {

  const {children, title, arrowStateHandler} = props;

  return (
    <div className="dropMenuContainer">
        {title}
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