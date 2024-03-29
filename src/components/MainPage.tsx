import { Container, Grid, Card, CardContent, Button } from '@mui/material'
import { GitHub, LinkedIn } from '@mui/icons-material'
import responsiveImage from '../assets/images/responsive-page.png'
import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {

    return (
        <Container>
            <div className="page-container">
                <h2 className="home">Giovanni Headley</h2>
                <div className="socials">
                    <a href="https://github.com/descifle"><GitHub className="github" fontSize="large" /></a>
                    <a href="https://www.linkedin.com/in/giovanni-headley/"><LinkedIn className="linkedin" fontSize="large" /></a>
                </div>
                <h1 className="main-header">Full Stack Developer</h1>
                <div className="about-me">
                    <Grid>
                        <Card>
                            <CardContent>
                                <div style={{ textAlign:'center' }}>
                                    <p>
                                        I am a Full Stack Developer, working with ReactJS, NodeJS, relational
                                        and non-relational databases
                                    </p>
                                    <p>
                                        Through my career, I have been acknowledged as solution-focused engineer
                                        that has the ability to design and develop innovative applications using advanced technologies
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Grid className="responsive-img-box" item >
                            <div><img src={responsiveImage} alt="responsive web pages" /></div>
                            <Button><Link to="/about">PORTFOLIO</Link></Button>
                        </Grid>
                    </Grid>
                    
                </div>
            </div>
        </Container>
    )
}

export default MainPage