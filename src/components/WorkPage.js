import { Container, Grid, Card, CardHeader ,CardActions, CardMedia, CardContent, Button } from '@material-ui/core'
import { cards } from './misc'
import React from 'react'

const WorkPage = () => { 

    console.log(cards)

    const renderCards = () => {
        return cards.map((card) => {
            return (
                    <Grid item xs={12} sm={6} key={card.projectName} >
                        <Card>
                            <CardHeader
                                // avatar={
                                // <Avatar aria-label="recipe" className={classes.avatar}>
                                //     R
                                // </Avatar>
                                // }
                                // action={
                                // <IconButton aria-label="settings">
                                //     <MoreVertIcon />
                                // </IconButton>
                                // }
                                title={card.projectName}
                                subheader="placeholdie"
                            />
                            <CardMedia
                                className="card-img"
                                image={card.image}
                                title="Paella dish"
                            />
                            <CardContent>
                               {card.projectName}
                                <Button variant="outlined" >Something</Button>
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