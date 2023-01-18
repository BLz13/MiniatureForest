import "./DropdownMenuContainer.css";

export default function DropdownMenuContainer(props) {

  const {children} = props;

  return (
    <div className="dropMenuContainer">
      <ul id="dropmenu" className="dropmenu closeDropMenu" >
        {children}
      </ul>
    </div>
  );
};