import { Container } from '@material-ui/core'
import { GitHub, LinkedIn, Email } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const ContactPage = () => {

    return (
        <Container>
            <div className="page-container">
                <h2 className="home"><Link to="/">Giovanni Headley</Link></h2>
                <div className="socials"></div>
                <h1 className="contact-h1">Let's Talk</h1>
                <div>
                    <div className="contact-center"><span><a href="https://github.com/descifle"><GitHub fontSize="inherit" /></a></span><span><a href="https://www.linkedin.com/in/giovanni-headley/"><LinkedIn fontSize="inherit" /></a></span><span><a href="mailto:giovanniheadley@gmail.com"><Email fontSize="inherit" /></a></span></div>
                </div>
            </div>
        </Container>
    )
}

export default ContactPage