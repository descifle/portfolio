import { Container } from '@material-ui/core'
import { GitHub, LinkedIn } from '@material-ui/icons'
import React from 'react'

const ContactPage = () => {

    return (
        <Container>
            <div className="page-container">
                <h2>Giovanni Headley</h2>
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