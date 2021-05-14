import { Container } from '@material-ui/core'
import { GitHub, LinkedIn } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import React from 'react'

const AboutPage = () => {

    return (
        <Container>
            <div className="page-container">
            <h2><Link to="/">Giovanni Headley</Link></h2>
                <div className="socials">
                <span><GitHub fontSize="large" /></span>
                <span><LinkedIn fontSize="large" /></span>
                </div>
                <h1 className="">ABOUT</h1>
                <div>
                    <p>some synopsis</p>
                    
                </div>
                <div>
                    <h2>Employment</h2>
                    <hr />
                    <p>List of work history</p>
                </div>
            </div>
        </Container>
    )
}

export default AboutPage