import { Container } from '@material-ui/core'
import React from 'react'

const MainPage = () => {

    return (
        <Container>
            <div className="page-container">
                <h2>Giovanni Headley</h2>
                <h1 className="main-header">Full Stack Developer</h1>
                <div className="about-me">
                    <p>
                        I am a Full Stack Developer, working with React, Node, relational
                        and non-relational databases, Lorem ipsum dolor sit amet
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default MainPage