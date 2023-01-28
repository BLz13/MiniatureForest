import "./ContactForm.css"

export default function ContactForm(props) {

    const {onClick} = props

    return(
        <form className="form" action="contact.html" method="get" encType="multipart/form-data">
                <div className="inputBox">
                    <input required="required" className="formInput" type="text"/>
                    <span className="formLabel"> Name </span> 
                </div>
                <div className="inputBox">
                    <input required="required" className="formInput" type="email"/>
                    <span className="formLabel"> Email </span> 
                </div>
                <div className="inputBox">
                    <textarea required="required" className="formComment"/>
                    <span className="formLabelComment formLabel"> Leave a comment here </span>
                </div>
                <input className="button" type="submit" value="Send"  onClick={onClick}/>
            </form>
    )
}