import React from 'react'
import { Container, Grid, Card, CardHeader ,CardActions, CardMedia, CardContent, Button } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa } from '@fortawesome/free-solid-svg-icons'
import { faReact, faPhp, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { cards } from './misc'

const WorkPage = () => { 

    const renderCards = () => {
        return cards.map((card) => {
            return (
                    <Grid item xs={12} sm={6} key={card.projectName} >
                        <Card>
                            <CardHeader
                                avatar={
                                    card.projectType === 'react' ? <FontAwesomeIcon size="lg" color="#61DBFB" icon={faReact} />:
                                    card.projectType === 'php' ? <FontAwesomeIcon size="lg" color="Magenta" icon={faPhp} /> :
                                    <FontAwesomeIcon size="lg" color="#e34c26" icon={faHtml5} />
                                // <Avatar aria-label="recipe" className={classes.avatar}>
                                //     R
                                // </Avatar>
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
                            <CardContent>
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
                <p>Some content</p>
                <Grid container spacing={10}>
                    {renderCards()}
                </Grid>
            </div>
        </Container>
    )
}

export default WorkPage