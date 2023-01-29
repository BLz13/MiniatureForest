import "./CartAmountSelection.css"

export default function CartAmountSelection(props){

    const {productsAmount, onChange} = props;

    const options = (stop) => {
        const content = [];
        for (let i = 1; i <= stop; i++) {
            content.push(
                <option 
                    key={`option-${i}`}
                    value={i}
                >
                    {i}
                </option>)
        }
        return content
    }
    
    return(
        <select 
            required size="1"
            className="amountCartSelect"
            onChange={onChange}
        >
            {options(productsAmount)}
        </select>
    )
}