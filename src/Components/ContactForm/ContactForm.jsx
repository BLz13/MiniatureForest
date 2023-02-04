import "./ContactForm.css"

import { useEffect } from "react";
import { useState } from "react"

export default function ContactForm(props) {

    const {onClick} = props

    const [lockBtn, setLockBtn] = useState("true")

    const [btnClass, setBtnClass] = useState("buttonOFF")

    const [valueInputName, setValueInputName] = useState("");

    const [valueInputMail, setValueInputMail] = useState("");

    console.log(valueInputName);
    console.log(valueInputMail);

    const onBlurNameHandler = (event) =>{
        setValueInputName(event.target.value);
    }

    const onBlurMailHandler = (event) =>{
        setValueInputMail(event.target.value);
    }

    useEffect( () => {
        if ((valueInputName === "") && (valueInputMail === "")) {
            setLockBtn("true")
            setBtnClass("buttonOFF")
        } {
            setLockBtn("false")
            setBtnClass("buttonON")
        }
    })

    return(
        <form className="form" action="contact.html" method="get" encType="multipart/form-data">
                <div className="inputBox">
                    <input
                        onBlur={onBlurNameHandler}
                        required="required"
                        className="formInput"
                        type="text"
                    />
                    <span className="formLabel"> Name </span> 
                </div>
                <div className="inputBox">
                    <input
                        onBlur={onBlurMailHandler}
                        required="required"
                        className="formInput"
                        type="email"
                    />
                    <span className="formLabel"> Email </span> 
                </div>
                <div className="inputBox">
                    <textarea required="required" className="formComment"/>
                    <span className="formLabelComment formLabel"> Leave a comment here </span>
                </div>
                <input 
                    className={btnClass}
                    type="submit"
                    value="Send" 
                    disabled={lockBtn}
                    onClick={onClick}/>
            </form>
    )
}