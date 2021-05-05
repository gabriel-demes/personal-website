import { Button, Card, CardMedia, Grid, CardActions } from "@material-ui/core"
import React from "react"
import styled from 'styled-components'
import {makeStyles} from '@material-ui/core/styles'
import Frello from '../images/Frello.png'
import MomentJournal from '../images/MomentJournal.png'
import MockTube from '../images/MockTube.png'

const Section = styled.section`
    margin:0;
    padding-top:3em;
    width: 100vw;
    background-color: #DDDDDD;
    background-size: cover;
    text-align: center;`

const useStyles = makeStyles({
    root: {
        padding:'2em',
        margin:0,
        justifyContent: "space-evenly"
    },
    card: {
        maxWidth: 525
    },
    media:{
        
        height: 300,
    }
})

const Projects = () => {
    const classes = useStyles()

    return( 
        <Section>
            <h1>PROJECTS</h1>
            <Grid className={classes.root} container spacing={0} xs={12}>
                <Grid item xs={6} className={classes.card}>
                    <Card >
                        <CardMedia className={classes.media}
                            image={MomentJournal}
                            title="MomentJournal"
                        />
                        <CardActions>
                            <Button>
                                FrontEnd
                            </Button>
                            <Button>
                                Backend
                            </Button>
                            <Button>
                                Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid className={classes.card} item xs={6}>
                    <p>MomentJorunal descrip</p>
                </Grid>
                <Grid className={classes.card} item xs={6} style={{paddingTop:"3em"}}>
                    <p>MockTube descrip</p>
                </Grid>
                <Grid className={classes.card} item xs={6} style={{paddingTop:"3em"}}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={MockTube}
                            title="MockTube"
                        />
                        <CardActions>
                            <Button>
                                FrontEnd
                            </Button>
                            <Button>
                                Backend
                            </Button>
                            <Button>
                                Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid >
                <Grid className={classes.card} item xs={6} style={{paddingTop:"3em"}}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={Frello}
                            title="Frello"
                        />
                        <CardActions>
                            <Button>
                                FrontEnd
                            </Button>
                            <Button>
                                Backend
                            </Button>
                            <Button>
                                Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid className={classes.card} item xs={6} style={{paddingTop:"3em"}}>
                    <p>Frello descrip</p>
                </Grid>
            </Grid>

        </Section>
    )
}

export default Projects