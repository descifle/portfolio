import React, { useState } from 'react'
import { Container, Grid, Card, CardHeader ,CardActions, CardMedia, CardContent, Button, Tabs, Tab, Paper } from '@material-ui/core'
import { GitHub, LinkedIn } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPhp, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { cards } from './misc'

const WorkPage = () => { 

    // add some text or button saying scroll down

    const [list, setList] = useState(cards)
    const [value, setValue] = useState(2)

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

    const renderCards = () => {
        return list.map((card) => {
            return (
                    <Grid item xs={12} sm={6} key={card.projectName} >
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
            )
        })
    }

    return (
        <Container>
            <div className="page-container">
                <h2><Link to="/">Giovanni Headley</Link></h2>
                <div className="socials">
                    <span><GitHub fontSize="large" /></span>
                    <span><LinkedIn fontSize="large" /></span>
                </div>
                {/* <div onClick={() => setList(cards.filter(card => card.projectType !== "php"))} style={{marginBottom: "5rem"}}>some kinda sort</div> */}
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
                <Grid container spacing={10}>
                    {renderCards()}
                </Grid>
            </div>
        </Container>
    )
}

export default WorkPage