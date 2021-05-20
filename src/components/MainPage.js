import { Container, Grid, Card, CardContent, Button } from '@material-ui/core'
import { GitHub, LinkedIn } from '@material-ui/icons'
import React from 'react'

const MainPage = () => {

    return (
        <Container>
            <div className="page-container">
                <h2 className="home">Giovanni Headley</h2>
                <div className="socials">
                    <GitHub />
                    <LinkedIn />
                </div>
                <h1 className="main-header">Full Stack Developer</h1>
                <div className="about-me">
                    <p>some image showing my skillset with responsive pages</p>
                    <Grid>
                    <Card>
                            <CardContent>
                            <p>
                            I am a Full Stack Developer, working with React, Node, relational
                            and non-relational databases, Lorem ipsum dolor sit amet
                        </p>
                                <Button variant="outlined" >Something</Button>
                            </CardContent>
                            </Card>
                        
                    </Grid>
                </div>
            </div>
        </Container>
    )
}

export default MainPage