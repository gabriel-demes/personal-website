import { AppBar, Button, Toolbar } from "@material-ui/core"
import React from "react"
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import {Link} from "react-scroll"
import Resume5_5_21 from "../images/Resume5_5_21.pdf"


const useStyles = makeStyles({
    root: {
        backgroundColor: '#14a2b8',
        width: '100vw',
    },
    button: {
        fontSize: "medium",
        fontWeight: "bold"
    }
})
const Navbar = () => {
    const classes = useStyles();
    const theme = createMuiTheme({
        typography: {
          fontFamily: [
            'Montserrat',
            'sans-serif',
          ].join(','),
        },});
    return(
        <ThemeProvider theme={theme}>
        <AppBar className={classes.root} position="sticky" >
            <Toolbar className="navbar">
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                >
                    <Button className={classes.button}>ABOUT</Button>
                </Link>
                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                >
                    <Button className={classes.button}>SKILLS</Button>
                </Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                >
                    <Button className={classes.button}>PROJECTS</Button>
                </Link>
                <Link
                    activeClass="active"
                    to="blogs"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={0}
                >
                    <Button className={classes.button}>ARTICLES</Button>
                </Link>
                <Button onClick={()=> window.open(Resume5_5_21, '_blank')} className={classes.button}>RESUME</Button>
            </Toolbar>
        </AppBar>
        </ThemeProvider>
    )
}

export default Navbar