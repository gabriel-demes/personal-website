import { Grid, Tooltip } from "@material-ui/core"
import React from "react"
import styled from 'styled-components'
import {makeStyles} from '@material-ui/core/styles'
import {
    DiPython,
    DiJavascript1,
    DiReact,
    DiRuby,
    DiRor,
    DiHtml5,
    DiCss3,
    DiPostgresql,
    DiSqllite,
    DiVisualstudio, 
    DiTerminal
} from "react-icons/di"
import {SiRedux} from "react-icons/si"

const Section = styled.section`
    margin:0;
    padding-top:3em;
    height: 100vh;
    width: 100vw;
    background-color: #CCCCCC;
    background-size: cover;
    text-align: center;
`
const H1 = styled.h1`
    margin:0;
    padding:0;
`

const useStyles = makeStyles({
    root: {
        padding:'2em',
        margin:0,
    }
})
const Skills = () => {
    const classes = useStyles()

    return(

        <Section>
            <H1>SKILLS</H1>
            <Grid className={classes.root} container spacing={10} xs={12} justify="space-between"  >
                <Grid item xs={3} >
                    <Tooltip title="Python" placement="bottom">
                        <div><DiPython size={100}/></div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip title="JavaScript">
                        <div><DiJavascript1 size={100}/></div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip placement="bottom" title="React">
                        <div><DiReact size={100}/></div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip title="Redux">
                        <div><SiRedux size={75}/></div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip placement="bottom" title="Ruby">
                        <div><DiRuby size={100}/></div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip placement="bottom" title="Ruby on Rails">
                        <div><DiRor size={100}/></div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip placement="bottom" title="HTML5">
                        <div><DiHtml5 size={100}/></div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip placement="bottom" title="CSS3">
                        <div><DiCss3 size={100}/></div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip placement="bottom" title="PostGresql">
                        <div><DiPostgresql size={100}/></div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip placement="bottom" title="Sqllite">
                        <div><DiSqllite size={100}/></div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip placement="bottom" title="Terminal">
                        <div><DiTerminal size={100}/></div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip placement="bottom" title="VsCode">
                        <div><DiVisualstudio size={100}/></div>
                    </Tooltip>
                </Grid>
            </Grid>

        </Section>
    )
}

export default Skills 