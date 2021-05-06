import React from "react"
import styled from "styled-components"
import {Zoom} from 'react-reveal'
import StockImage1 from '../images/StockImage1.jpg'
import Typist from 'react-typist';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-scroll"
const Section = styled.section`
    margin:0;
    padding:0;
    height: 100vh;
    width: 100vw;
    background-image: url(${StockImage1});
    background-size: cover;
    text-align: center;
    display:table;
`
const H1 = styled.h1`
    color: #1be0ff;
    vertical-align:middle;
    display:table-cell;
    font-family: 'Montserrat', sans-serif;
    font-size: xxx-large;
    background-color: #4d4c4c4d;
`
const useStyles = makeStyles({
    root: {
        color: "#14a2b8",
        backgroundColor:"#eee",
        fontSize: "medium",
        fontWeight: "bold"
    },
});

const Landing = () => {
    const classes = useStyles();
    return(
        <div>
        
            <Zoom >
                <Section>
                    <H1>
                    Hello, World! <Typist cursor={{hideWhenDone:true}}>I am Gabriel Demes. </Typist>
                    <Link
                        to="about"
                        smooth="true"
                        duration={750}
                        offset={-40}>
                    <Button className={classes.root} variant="contained">Enter GabrielDemes.com</Button>
                    </Link>
                    </H1>
                </Section>
            </Zoom>
        </div>
        
    )
}

export default Landing