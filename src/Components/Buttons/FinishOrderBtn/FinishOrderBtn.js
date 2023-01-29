import "./FinishOrderBtn.css"

export default function FinishOrderBtn(props) {

    const {name} = props;
    
    return (
        <button
            className="finishOrderBtn"
            type="button"
        >
            {name}
        </button>
    )
}