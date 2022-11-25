import "./NavButton.css";

function NavButton (props) {

    const {link,innerText} = props

    return (
        <li
            className="listItem"
        >
            <a
                className="NavButton"
                href={link}
            >
                {innerText}
            </a>
        </li>
    );
};

export default NavButton;