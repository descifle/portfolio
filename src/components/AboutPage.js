import { Container, Grid, Typography } from '@material-ui/core'
import { GitHub, LinkedIn } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import React from 'react'

const AboutPage = () => {

    // add quick scroll to employment history

    return (
        <Container>
            <div className="page-container">
                <h2 className="home"><Link to="/">Giovanni Headley</Link></h2>
                <div className="socials">
                    <span><GitHub fontSize="large" /></span>
                    <span><LinkedIn fontSize="large" /></span>
                </div>
                <h1 className="">ABOUT</h1>
                <div>
                    <p>Full Stack Web Developer working mainly in the MERN stack. Currently residing in Halethorpe, but am open to relocation.
                        I take much pride in my work, and I am always striving to learn. 
                    </p>

                </div>
                <div className="employment">
                    <Grid container justify="space-between"  alignItems="center">
                        <Grid item xs={4} sm={3} md={2}><h2>Employment</h2></Grid>
                        <Grid item xs={6} sm={9} md={10}><hr /></Grid>
                    </Grid>
                    <Grid container alignItems="center" className="employment-history">
                        <Grid item xs={2} md={1}>
                            <Typography>
                                Current
                            </Typography>
                        </Grid>
                        <Grid item xs={10} md={11}>
                            <h3>BACK END ENGINEER @ SMART SOLUTIONS GROUP</h3>
                            <span>12/12/2012</span>
                            <p>
                                Work with automated medical application.
                            </p>
                        </Grid>
                        <Grid item xs={2} md={1}>
                            <Typography>
                                Past
                            </Typography>
                        </Grid>
                        <Grid item xs={10} md={11}>
                            <h3>FULL STACK DEVELOPER @ SWIFT STAFFING</h3>
                            <span>12/12/2012</span>
                            <p>
                                som info about position
                            </p>
                        </Grid>
                        <Grid item xs={2} md={1}>
                            <Typography>
                                Current
                            </Typography>
                        </Grid>
                        <Grid item xs={10} md={11}>
                            <h3>FULLSTACK DEVELOPER @ DESCIFLE CONSULTANCY</h3>
                            <span>12/12/2012</span>
                            <p>
                                som info about position
                            </p>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Container>
    )
}

export default AboutPage