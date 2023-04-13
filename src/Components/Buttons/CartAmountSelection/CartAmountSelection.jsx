import "./CartAmountSelection.css"

import { useEffect, useState } from "react";

import {ReactComponent as Minus} from "../../../assets/images/Minus.svg"
import {ReactComponent as Plus} from "../../../assets/images/Plus.svg"

export default function CartAmountSelection(props){

    const {productsAmount, reference} = props;

    const [amount, setAmount] = useState(1);
    
    function onMouseDownMinusHandler() {
        if (amount>1){
            setAmount(amount-1)
        };
    };
    
    function onMouseDownPlusHandler() {
        if (amount<productsAmount){
            setAmount(amount+1)
        };
    };

    useEffect( () => {setAmount(1)},[productsAmount])
    
    return(
        <div className="amountContainer">
            <div onMouseDown={onMouseDownMinusHandler} className="buttons">
                <Minus />
            </div>
            <span className="amount" ref={reference}> {amount} </span>
            <div className="buttons" onMouseDown={onMouseDownPlusHandler}>
                <Plus />
            </div>
        </div>
    )

}