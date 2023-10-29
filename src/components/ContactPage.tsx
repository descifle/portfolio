import { Container } from '@mui/material'
import { GitHub, LinkedIn, Email } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const ContactPage = () => {

    const handleEmailClick = () => {
        window.location.assign("mailto:giovanniheadley@gmail.com")
    }

    return (
        <Container>
            <div id="page" className="page-container">
                <h2 className="home"><Link to="/">Giovanni Headley</Link></h2>
                <div className="socials"></div>
                <h1 className="contact-h1">Let's Talk</h1>
                <div>
                    <div className="contact-center">
                        <span><a href="https://github.com/descifle"><GitHub className="github" fontSize="inherit" /></a></span>
                        <span><a href="https://www.linkedin.com/in/giovanni-headley/"><LinkedIn className="linkedin" fontSize="inherit" /></a></span>
                        <span><a  onClick={() => handleEmailClick()} href="#page"><Email className="email" fontSize="inherit" /></a></span>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ContactPage