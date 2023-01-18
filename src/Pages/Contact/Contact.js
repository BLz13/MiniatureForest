import "./Contact.css";

import { useState } from "react";

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
            <form className="form" action="contact.html" method="get" enctype="multipart/form-data">
                <div className="inputBox">
                    <input required="required" className="formInput" type="text"/>
                    <span className="formLabel"> Name </span> 
                </div>
                <div className="inputBox">
                    <input required="required" className="formInput" type="email"/>
                    <span className="formLabel" for="mail"> Email </span> 
                </div>
                <div className="inputBox">
                    <textarea required="required" className="formComment"/>
                    <span className="formLabelComment formLabel"> Leave a comment here </span>
                </div>
                <input className="button" type="submit" value="Send"  onClick={SubmitHandler}/>
            </form>
        </div>
    );
}