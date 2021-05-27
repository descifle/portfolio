import { Container, Grid, Typography } from '@material-ui/core'
import { GitHub, LinkedIn } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import * as Scroll from 'react-scroll'

const AboutPage = () => {

    let ScrollLink = Scroll.Link
    let events = Scroll.Events
    let scrollSpy = Scroll.scrollSpy
    
    useEffect(() => {
        events.scrollEvent.register('begin', function(to, element) {
            // console.log('begin', arguments)
        })

        events.scrollEvent.register('end', function(to, element) {
            // console.log('end', arguments)
        })

        scrollSpy.update()

        return () => {
           events.scrollEvent.remove('begin')
           events.scrollEvent.remove('end')
        }
    })

    return (
        <Container>
            <div className="page-container">
                <h2 className="home"><Link to="/">Giovanni Headley</Link></h2>
                <div className="socials">
                    <a href="https://github.com/descifle"><GitHub fontSize="large" /></a>
                    <a href="https://www.linkedin.com/in/giovanni-headley/"><LinkedIn fontSize="large" /></a>
                </div>
                <h1 className="">ABOUT ME</h1>
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
                    <Grid container alignItems="center" className="employment-history" id="employment-history">
                        <div className="employment-history_tab">
                            <ScrollLink activeClass="nav-active" to="smart" spy={true} smooth={true} offset={-50} duration={100} containerId="employment-history">
                            <p>Smart Solutions</p>
                            </ScrollLink>
                            <ScrollLink activeClass="nav-active" to="swift" spy={true} smooth={true} offset={-50} duration={100} containerId="employment-history">
                            <p>Swift Staffing</p>
                            </ScrollLink>
                            <ScrollLink activeClass="nav-active" to="descifle" spy={true} smooth={true} offset={-50} duration={100} containerId="employment-history">
                            <p>Descifle Consult.</p>
                            </ScrollLink>
                        </div>
                        <Grid item xs={3} md={1}>
                            <Typography>
                                Current
                            </Typography>
                        </Grid>
                        <Grid item xs={9} md={11} className="employment-item" name="smart">
                            <h3>BACK END ENGINEER @ SMART SOLUTIONS GROUP</h3>
                            <span>12/12/2020 - current</span>
                            <p>
                                Work with automated medical application.
                            </p>
                        </Grid>
                        <Grid item xs={3} md={1}>
                            <Typography>
                                Past
                            </Typography>
                        </Grid>
                        <Grid item xs={9} md={11} className="employment-item" name="swift">
                            <h3>FULL STACK DEVELOPER @ SWIFT STAFFING</h3>
                            <span>01/01/2020 - 2/01/2021</span>
                            <p>
                                Developed LAMP stack applications and websites.
                            </p>
                        </Grid>
                        <Grid item xs={3} md={1}>
                            <Typography>
                                Current
                            </Typography>
                        </Grid>
                        <Grid item xs={9} md={11} className="employment-item" name="descifle">
                            <h3>FULLSTACK DEVELOPER @ DESCIFLE CONSULTANCY</h3>
                            <span>current</span>
                            <p>
                                Developed MERN stack applications and websites.
                            </p>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Container>
    )
}

export default AboutPage