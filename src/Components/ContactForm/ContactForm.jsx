import "./ContactForm.css"

export default function ContactForm(props) {

    const {onClick, inputMailRef, inputNameRef, lockBtn, onBlur} = props

    return(
        <form className="form" action="contact.html" method="get" encType="multipart/form-data">
                <div className="inputBox">
                    <input
                        required="required"
                        className="formInput"
                        type="text"
                        ref={inputNameRef}
                        onBlur={onBlur}
                    />
                    <span className="formLabel"> Name </span> 
                </div>
                <div className="inputBox">
                    <input
                        required="required"
                        className="formInput"
                        type="email"
                        ref={inputMailRef}
                        onBlur={onBlur}
                    />
                    <span className="formLabel"> Email </span> 
                </div>
                <div className="inputBox">
                    <textarea required="required" className="formComment"/>
                    <span className="formLabelComment formLabel"> Leave a comment here </span>
                </div>
                <input 
                    className={ (lockBtn === true) ? ("buttonOFF") : ("buttonON") }
                    type="submit"
                    value="Send"
                    disabled={{lockBtn}}
                    onClick={onClick}
                />
            </form>
    )
}