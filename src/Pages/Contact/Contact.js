import "./Contact.css";

import ContactForm from "../../Components/ContactForm/ContactForm";

export default function Contact() {
    
    const SubmitHandler = (event) => {
        event.preventDefault();
        window.location.reload(false);
    }

    return(
        <div className="contact">
            <h1 className="mainTitle">
                Contact Us
            </h1>
            <p className="mainText">
                We'll try to get back to you as soon as possible
            </p>
            <ContactForm onClick={SubmitHandler}/>
        </div>
    );
}