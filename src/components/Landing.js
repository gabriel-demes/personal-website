import React from "react"
import styled from "styled-components"
import {Zoom} from 'react-reveal'
import StockImage1 from '../images/StockImage1.jpg'

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
    color:black;
    vertical-align:middle;
    display:table-cell;
`
const Landing = () => {

    return(
        <div>
        
            <Zoom>
                <Section>
                    <H1>Hello, I'm Gabriel Demes.<br></br>I'm a software engineer.</H1>
                </Section>
            </Zoom>
        </div>
        
    )
}

export default Landing