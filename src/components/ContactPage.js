import { Container } from '@material-ui/core'
import { GitHub, LinkedIn } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const ContactPage = () => {

    return (
        <Container>
            <div className="page-container">
                <h2 className="home"><Link to="/">Giovanni Headley</Link></h2>
                <div className="socials">
                        
                        
                </div>
                <h1 className="contact-h1">Let's Talk</h1>
                <div>
                    <div>you can reach me at</div>
                    <div><span><GitHub fontSize="large" /></span><span><LinkedIn fontSize="large" /></span><span>or at <a href="mailto:giovanniheadley@gmail.com">giovanniheadley@gmail.com</a></span></div>
                </div>
            </div>
        </Container>
    )
}

export default ContactPage