import React, { useState, useEffect } from 'react'
import { Container, Grid, Card, CardHeader ,CardActions, CardMedia, CardContent, Button, Tabs, Tab, Paper, Chip } from '@material-ui/core'
import { GitHub, LinkedIn } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPhp, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { cards } from './misc'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import * as Scroll from 'react-scroll'

const WorkPage = () => {
    let ScrollLink = Scroll.Link
    let element = Scroll.Element
    let events = Scroll.Events
    let scroll = Scroll.animateScroll
    let scrollSpy = Scroll.scrollSpy

    // add some text or button saying scroll down
    // add hover effect on cards with a visit me link

    const [list, setList] = useState(cards)
    const [value, setValue] = useState(2)
    const [hide, setHide] =  useState(false)

    useEffect(() => {
        events.scrollEvent.register('begin', function(to, element) {
            console.log('begin', arguments)
        })

        events.scrollEvent.register('end', function(to, element) {
            console.log('end', arguments)
        })

        scrollSpy.update()

        return () => {
           events.scrollEvent.remove('begin')
           events.scrollEvent.remove('end')
        }
    })

    useEffect(() => {

       const checkScreenPos = () => {
        console.log(window.scrollY)
        window.scrollY > 50 ? setHide(true) : setHide(false)
       }
    
       window.addEventListener('scroll', checkScreenPos)


       return () => {
        window.removeEventListener('scroll', checkScreenPos)
       }
    }, [])

    const handleChange = (event, newValue) => {
        if(newValue === value) {
            setList(cards)
            return setValue(false)
        }
        // eslint-disable-next-line array-callback-return
        setList(cards.filter(card => {
            if(newValue === 0) return card.filter.includes('apps')
            if(newValue === 1) return card.filter.includes('websites')
            if(newValue === 2) return card.filter.includes('emails')
        }))
        setValue(newValue)
    }

    const scrollToProjects = (e) => {
        scroll.scrollTo(100)
    }

    const renderCards = () => {
        return list.map((card) => {
            return (
                <TransitionGroup component={null}  key={card.projectName}>
                <CSSTransition  timeout={200}
                                classNames="fade"
                >
                    <Grid item xs={12} sm={10} md={5} className="web-card">
                        <Card>
                            <CardHeader
                            className="card-head"
                                avatar={
                                    card.projectType === 'react' ? <FontAwesomeIcon size="lg" color="#61DBFB" icon={faReact} />:
                                    card.projectType === 'php' ? <FontAwesomeIcon size="lg" color="Magenta" icon={faPhp} /> :
                                    <FontAwesomeIcon size="lg" color="#e34c26" icon={faHtml5} />
                                }
                                // action={
                                // <IconButton aria-label="settings">
                                //     <MoreVertIcon />
                                // </IconButton>
                                // }
                                title={card.projectName}
                                subheader={card.projectType}
                            />
                            <CardMedia
                                className="card-img"
                                image={card.image}
                                title={card.projectName}
                            />
                            <CardContent className="card-body">
                               {card.projectSkill}
                                {/* <Button variant="outlined" >Something</Button> */}
                            </CardContent>
                        </Card>
                    </Grid>
                </CSSTransition>
                </TransitionGroup>
            )
        })
    }

    return (
        <Container>
            <div 
            className={ hide ? 'hide-scroll':'scroll-bottom' }
            onClick={scrollToProjects}
            ><ArrowDownwardIcon fontSize="inherit" /></div>
            <div className="page-container">
                <h2 className="home"><Link to="/">Giovanni Headley</Link></h2>
                <div className="socials">
                    <span><GitHub fontSize="large" /></span>
                    <span><LinkedIn fontSize="large" /></span>
                </div>
                <div className="chip-container">
                    <Chip label="JavaScript" />
                    <Chip label="ReactJS" />
                    <Chip label="Redux" />
                    <Chip label="NodeJS" />
                    <Chip label="Relational DB" />
                    <Chip label="Non-Relation DB" />
                    <Chip label="Responsive Design" />
                    <Chip label="CSS3" />
                    <Chip label="HTML5" />
                    <Chip label="Agile" />
                    <Chip label="Git" />
                    <Chip label="SPA's" />
                    <Chip label="Debug" />
                    <Chip label="MOCHA" />
                    <Chip label="Test-Driven-Development" />
                    <Chip label="JavaScript" />
                </div>
                <Paper>
                    <Tabs
                        className="sorter"
                        variant="fullWidth"
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="work type"
                    >
                        <Tab label="Apps" />
                        <Tab label="Websites" />
                        <Tab label="Emails" />
                    </Tabs>
                </Paper>
                <Grid 
                container 
                justify="space-around"
                name="my-works"
                >
                    {renderCards()}
                </Grid>
            </div>
        </Container>
    )
}

export default WorkPage