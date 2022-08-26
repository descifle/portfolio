import { Container, Grid, Typography } from '@material-ui/core'
import { GridProps } from '@material-ui/core/Grid'
import { GitHub, LinkedIn } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { jobInfo, JobProps } from './base/misc'
import * as Scroll from 'react-scroll'
import { styled } from '@mui/material/styles';
import { JsxElement } from 'typescript'

const AboutPage = () => {

    let ScrollLink = Scroll.Link
    let events = Scroll.Events
    let scrollSpy = Scroll.scrollSpy

    type DomElem = JsxElement

    interface CustomGridProps extends GridProps  {
        name?: string
    }

    const CustomGrid = styled(Grid)<CustomGridProps>({ boxShadow: "none" });

    useEffect(() => {
        events.scrollEvent.register('begin', function (to: DomElem, element: DomElem) {
            // console.log('begin', arguments)
        })

        events.scrollEvent.register('end', function (to: DomElem, element: DomElem) {
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
                    <p>Full Stack Web Developer working mainly in the MERN stack. Currently residing in Halethorpe, but am open to relocation.
                        I take much pride in my work, and I am always striving to learn.
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