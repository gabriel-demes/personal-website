import { Button, Card, CardMedia, Grid, CardActions, Tooltip } from "@material-ui/core"
import React from "react"
import styled from 'styled-components'
import {makeStyles} from '@material-ui/core/styles'
import Frello from '../images/Frello.png'
import MomentJournal from '../images/MomentJournal.png'
import MockTube from '../images/MockTube.png'
import {DiReact,DiRor,DiPostgresql, DiJavascript1} from "react-icons/di"
import {Roll} from 'react-reveal'
const Section = styled.section`
    margin:0;
    padding-top:3em;
    width: 100vw;
    min-height: 100vh;
    background-color: #eee;
    background-size: cover;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    `

const Li = styled.li`
    line-height: 2.0;
    font-size: medium;
`
const H1 = styled.h1`
    margin:0;
    padding:0;
    font-size: xx-large;
`
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
        <Section id="projects">
            <H1>PROJECTS</H1>
            <Grid className={classes.root} container spacing={0} xs={12}>
                <Grid item xs={6} className={classes.card}>
                    <Card raised={true} >
                        <CardMedia className={classes.media}
                            image={MomentJournal}
                            title="MomentJournal"
                            />
                        <CardActions>
                            <Button onClick={()=> window.open("https://github.com/gabriel-demes/momentjournal-frontend", "_blank")}>
                                FrontEnd
                            </Button >
                            <Button onClick={()=> window.open("https://github.com/gabriel-demes/momentjournal-backend", "_blank")}>
                                Backend
                            </Button>
                            <Button onClick={()=> window.open("https://www.youtube.com/watch?v=s-mthfwhdkg", "_blank")}>
                                Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* <Roll> */}
                <Grid className={classes.card} item xs={6}>
                    
                    <h2>MomentJournal</h2>
                    <ul>
                        <Roll>
                            <Li>Journaling application that integrates speech-to-text functionality, offering greater accessibility to online journaling</Li>
                        </Roll>
                        <Roll>
                            <Li>Incorporates Google's Natural Language API </Li>
                        </Roll>
                        <Roll>
                            <Li>Uses React-Speech-Recognition hook for speech-to-text capabilities</Li>
                        </Roll>
                        <Tooltip placement="bottom" title="React">
                            <span><DiReact size={50} color="#61DBFB"/></span>
                        </Tooltip>
                        <Tooltip title="Ruby on Rails">
                            <span>
                                <DiRor size={50} color="#CC0000"/>
                            </span>
                        </Tooltip>
                        <Tooltip title="PostgreSQL">
                            <span>
                                <DiPostgresql size={50} color="#336790"/>
                            </span>
                        </Tooltip>
                    </ul>
                    
                </Grid>
                <Grid className={classes.card} item xs={6} style={{paddingTop:"3em"}}>
                    <h2>MockTube</h2>
                    <ul>
                        <Roll>
                            <Li>Video streaming application designed as a YouTube Clone.</Li>
                        </Roll>
                        <Roll>
                            <Li>Integrates Web Sockets using Action Cable to build a real-time comments section</Li>
                        </Roll>
                        <Roll>
                            <Li>Implements backend external Cloudinary API calls allowing users to persist image and video files to the database</Li>
                        </Roll>
                        <Tooltip placement="bottom" title="React">
                            <span><DiReact size={50} color="#61DBFB"/></span>
                        </Tooltip>
                        <Tooltip title="Ruby on Rails">
                            <span>
                                <DiRor size={50} color="#CC0000"/>
                            </span>
                        </Tooltip>
                        <Tooltip title="PostgreSQL">
                            <span>
                                <DiPostgresql size={50} color="#336790"/>
                            </span>
                        </Tooltip>
                    </ul>
                </Grid>
                <Grid className={classes.card} item xs={6} style={{paddingTop:"3em"}}>
                    <Card raised={true}>
                        <CardMedia
                            className={classes.media}
                            image={MockTube}
                            title="MockTube"
                        />
                        <CardActions>
                            <Button onClick={()=> window.open("https://github.com/gabriel-demes/mockyoutube-frontend", "_blank")}>
                                FrontEnd
                            </Button>
                            <Button onClick={()=> window.open("https://github.com/gabriel-demes/mockyoutube-backend", "_blank")}>
                                Backend
                            </Button>
                            <Button onClick={()=> window.open("https://youtu.be/bLRJVw765vk", "_blank")}>
                                Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid >
                <Grid className={classes.card} item xs={6} style={{paddingTop:"3em"}}>
                    <Card raised={true}>
                        <CardMedia
                            className={classes.media}
                            image={Frello}
                            title="Frello"
                        />
                        <CardActions>
                            <Button onClick={()=> window.open("https://github.com/gabriel-demes/frello-frontend", "_blank")}>
                                FrontEnd
                            </Button>
                            <Button onClick={()=> window.open("https://github.com/gabriel-demes/frello-backend", "_blank")}>
                                Backend
                            </Button>
                            {/* <Button>
                                Demo
                            </Button> */}
                        </CardActions>
                    </Card>
                </Grid>
                <Grid className={classes.card} item xs={6} style={{paddingTop:"3em"}}>
                <h2>Frello</h2>
                    <ul>
                        <Roll>
                            <Li>Task management application allowing organizations and users to easily track project progressions based on Trello</Li>
                        </Roll>
                        <Roll>
                            <Li>Uses Rails API backend following RESTful routing principles with multiple endpoints for entries</Li>
                        </Roll>
                        <Roll>
                            <Li>Integrates user authentication features using Rails validations for user and organization protection</Li>
                        </Roll>
                        <Tooltip placement="bottom" title="JavaScript">
                            <span><DiJavascript1 size={50} color="#F0DB4F"/></span>
                        </Tooltip>
                        <Tooltip title="Ruby on Rails">
                            <span>
                                <DiRor size={50} color="#CC0000"/>
                            </span>
                        </Tooltip>
                        <Tooltip title="PostgreSQL">
                            <span>
                                <DiPostgresql size={50} color="#336790"/>
                            </span>
                        </Tooltip>
                    </ul>
                </Grid>
            </Grid>

        </Section>
    )
}

export default Projects