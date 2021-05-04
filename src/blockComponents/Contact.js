import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm('gmail', 'contact_for_portfolio', e.target, 'user_gDKrcwCD2Y35ZOiNFfSxd')
        .then((result) => {
            console.log(result.text)
        },
        (err) => {
            console.log(err.text
        )})
        
        setFirstName("")
        setLastName("")
        setEmail("")
        setMessage("")
    }

    return (
        <div className="container main">
            <div className="row">
                <div className="col-md-8">
                    <h1 className="text-center">Get In Touch</h1>
                    <p className="text-center">Use the form below to contact me in regards to an offer, or a project you would like to work on!</p>
                    <form className="" onSubmit={sendEmail}>
                        <div className="form-group">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input 
                                    name="from_name" 
                                    placeholder="First Name" 
                                    type="text" 
                                    className="form-control"
                                    required
                                    value={firstName}
                                    onChange={(e) => {setFirstName(e.target.value)}} />
                                </div>
                                <div className="form-group col-md-6">
                                    <input  
                                    placeholder="Last Name" 
                                    type="text" 
                                    className="form-control"
                                    value={lastName}
                                    onChange={(e) => {setLastName(e.target.value)}} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input
                            name="from_email"
                            placeholder="Enter your Email" 
                            type="email" 
                            className="form-control"
                            required
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="form-group">

                            <textarea cols="30" rows="10"
                            name="message" 
                            placeholder="Leave a message..." 
                            className="form-control"
                            required
                            value={message}
                            onChange={(e) => {setMessage(e.target.value)}}>

                            </textarea>
                        </div>
                        <button type="submit" className="btn btn-success"><i className="icon paper plane large"></i> Send</button>
                    </form>
                </div>
                <div className="col-md-4 text-left">
                    <h4 className="text-left">Connect with me:</h4>
                    <p className="smaller">if you have any additional questions send me a message at <a href="mailto:giovanniheadley@gmail.com">giovanniheadley@gmail.com</a></p>
                    <p className="smaller">Call me at: <a href="tel:4705955674">4705955674</a></p>
                    <p className="smaller">My Github: <a href="https://github.com/descifle"><i className="github square icon huge"></i></a></p>
                    <p className="smaller">My Linkedin: <a href="https://www.linkedin.com/in/giovanni-headley/"><i className="linkedin square icon huge"></i></a></p>
                </div>
            </div>
        </div>
    )
}

export default Contact;