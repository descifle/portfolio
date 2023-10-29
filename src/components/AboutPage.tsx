import { Container, Grid, Typography } from '@mui/material'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { jobInfo, JobProps } from '../utils/misc'
import * as Scroll from 'react-scroll'
import { styled } from '@mui/material/styles';
import { JsxElement } from 'typescript'
import { CustomGridProps } from '../utils/misc'

const AboutPage = () => {

    let ScrollLink = Scroll.Link
    let events = Scroll.Events
    let scrollSpy = Scroll.scrollSpy

    const CustomGrid = styled(Grid)<CustomGridProps>({ boxShadow: "none" });

    useEffect(() => {
        events.scrollEvent.register('begin', function (to: JsxElement, element: JsxElement) {
            // console.log('begin', arguments)
        })

        events.scrollEvent.register('end', function (to: JsxElement, element: JsxElement) {
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
                    <a href="https://github.com/descifle"><GitHub className="github" fontSize="large" /></a>
                    <a href="https://www.linkedin.com/in/giovanni-headley/"><LinkedIn className="linkedin" fontSize="large" /></a>
                </div>
                <h1 className="">ABOUT ME</h1>
                <div>
                    <p>Full Stack Web Developer working mainly with the MERN stack and C#. Currently residing in Linthicum Heights.
                    I have a demonstrated track record of domain expertise including understanding technical concepts by 
                    leveraging my proficiency in JavaScript, .net and the Azure ecosystem to deliver efficient and scalable web applications. 
                    My passion for innovation and exceptional problem solving has driven me to stay up-to-date with the latest technologies. 
                    </p>

                </div>
                <div className="employment">
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item xs={4} sm={3} md={2}><h2>Employment</h2></Grid>
                        <Grid item xs={6} sm={9} md={10}><hr /></Grid>
                    </Grid>
                    <Grid container alignItems="center" className="employment-history" id="employment-history">
                        <div className="employment-history_tab">
                            {jobInfo.map((job: JobProps) => (
                                <ScrollLink key={job.scrollName} activeClass="nav-active" to={job.scrollName} spy={true} smooth={true} offset={-50} duration={100} containerId="employment-history">
                                    <p>{job.company}</p>
                                </ScrollLink>
                            ))}
                        </div>
                        {
                            jobInfo.map(job => {
                                return (
                                    <React.Fragment key={job.scrollName}>
                                        <Grid item xs={3} md={1}>
                                            <Typography>
                                                {job.status}
                                            </Typography>
                                        </Grid>
                                        <CustomGrid item xs={9} md={11} className="employment-item"  name={job.scrollName}>
                                            <h3>{job.position}</h3>
                                            <span>{job.timePeriod}</span>
                                            <p>{job.info}</p>
                                        </CustomGrid>
                                    </React.Fragment>
                                )
                            })
                        }
                    </Grid>
                </div>
            </div>
        </Container>
    )
}

export default AboutPage