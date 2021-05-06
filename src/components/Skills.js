import { Grid, Tooltip } from "@material-ui/core"
import React, {useState} from "react"
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
import { Bounce } from "react-reveal"

const Section = styled.section`
    margin:0;
    padding-top:3em;
    height: 100vh;
    width: 100vw;
    background-color: #fff;
    background-size: cover;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
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
    }
})
const Skills = () => {
    const classes = useStyles()
    const [hover, setHover] = useState("")


    return(

        
        <Section id="skills">
            <H1>SKILLS</H1>
            <Bounce>
            <Grid className={classes.root} container spacing={10} xs={12} justify="space-between"  >
                <Grid item xs={3} >
                    <Tooltip title="Python" placement="bottom">
                        <div onMouseEnter={()=> setHover("python")} onMouseLeave={()=>setHover("")}>
                            <DiPython size={100} color={hover ==="python" && "#4b8bbe"} />
                        </div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip title="JavaScript">
                        <div onMouseEnter={()=> setHover("js")} onMouseLeave={()=>setHover("")}>
                            <DiJavascript1 color={hover ==="js" && "#F0DB4F"} size={100}/>
                        </div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip placement="bottom" title="React">
                        <div onMouseEnter={()=> setHover("react")} onMouseLeave={()=>setHover("")}>
                            <DiReact color={hover ==="react" && "#61DBFB"} size={100}/>
                        </div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip title="Redux">
                        <div onMouseEnter={()=> setHover("redux")} onMouseLeave={()=>setHover("")}>
                            <SiRedux color={hover ==="redux" && "#764abc"} size={75}/>
                            </div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip placement="bottom" title="Ruby">
                        <div onMouseEnter={()=> setHover("ruby")} onMouseLeave={()=>setHover("")}>
                            <DiRuby color={hover ==="ruby" && "#CC0000"} size={100}/>
                        </div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip placement="bottom" title="Ruby on Rails">
                        <div onMouseEnter={()=> setHover("rails")} onMouseLeave={()=>setHover("")}>
                            <DiRor color={hover ==="rails" && "#CC0000"} size={100}/></div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip placement="bottom" title="HTML5">
                        <div onMouseEnter={()=> setHover("html")} onMouseLeave={()=>setHover("")}>
                            <DiHtml5 color={hover ==="html" && "#f06529"} size={100}/>
                            </div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip placement="bottom" title="CSS3">
                        <div onMouseEnter={()=> setHover("css")} onMouseLeave={()=>setHover("")}>
                            <DiCss3 color={hover ==="css" && "#2965f1"} size={100}/>
                            </div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip placement="bottom" title="PostGresql">
                        <div onMouseEnter={()=> setHover("pstg")} onMouseLeave={()=>setHover("")}>
                            <DiPostgresql color={hover ==="pstg" && "#336790"} size={100}/></div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip placement="bottom" title="Sqllite">
                        <div onMouseEnter={()=> setHover("sqllite")} onMouseLeave={()=>setHover("")}>
                            <DiSqllite color={hover ==="sqllite" && "#013b57"} size={100}/>
                        </div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip placement="bottom" title="Terminal">
                        <div onMouseEnter={()=> setHover("term")} onMouseLeave={()=>setHover("")}>
                            <DiTerminal color={hover ==="term" && "#424242"} size={100}/>
                            </div>
                    </Tooltip>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip placement="bottom" title="VsCode">
                        <div onMouseEnter={()=> setHover("vscode")}>
                            <DiVisualstudio color={hover ==="vscode" && "#21aaf2"} size={100}/>
                        </div>
                    </Tooltip>
                </Grid>
            </Grid>
            </Bounce>
        </Section>
        
    )
}

export default Skills 