import React from "react"
import styled from 'styled-components'
import Me from '../images/Me.jpeg'
import {Roll} from 'react-reveal'
import {
    AiFillLinkedin,
    AiOutlineGithub,
    AiOutlineMedium,
    AiOutlineMail,
} from "react-icons/ai"

const Section = styled.section`
    margin:0;
    padding-top:3em;
    height: 100vh;
    width: 100vw;
    background-color: #eee;
    background-size: cover;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
`
const Container = styled.div`
    display:flex;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    width: 80vw;
    height: inherit;
    margin: auto;
`

const ContentDiv = styled.div`
    flex: 1 1 0px;
`

const H1 = styled.h1`
    margin:0;
    padding:;
    font-size: xx-large;
`
const Img = styled.img`
    border-radius:50%;
    width: 30em;
    height: 30em;
`
const P = styled.p`
    line-height: 2.0;
    font-size: large;
`

const About = () => {

    return(
        <Section id="about">
            <H1>ABOUT</H1>
            <Container>
                <ContentDiv>
                    <Roll>
                        <Img src={Me} alt="me"/>
                    </Roll>
                </ContentDiv>
                <ContentDiv>
                    
                    <P>
                        Hi, My name is <strong>Gabriel Demes</strong> and  I am a <strong>software engineer</strong> with a strong interest in <i>speech technologies</i>, <i>computational linguistics</i>, and <i>solution-based problem solving</i>. As a former <strong>Fulbright Scholar</strong> and a former educator, future employers can expect me to be an excellent <i>team player</i>, with a drive to continuously learn new technologies that’ll best serve the project/team at hand. My technical skills combined with my professional and educational backgrounds make me an ideal candidate for any team searching for a <i>quick starter</i>, a <i>self motivator</i>, and a <i>boundary pusher</i>.
                    </P>
                    <div>
                        <AiFillLinkedin class="contacticon" color="#007cb1" size={35} onClick={()=> window.open("https://www.linkedin.com/in/gdemes/", '_blank')}/>
                        <AiOutlineGithub class="contacticon" size={35} onClick={()=> window.open("https://github.com/gabriel-demes", '_blank')}/>
                        <AiOutlineMedium class="contacticon" size={35} onClick={()=> window.open("https://gabrieldemes.medium.com/", '_blank')}/>
                        <AiOutlineMail class="contacticon" color="#be211f" size={35} onClick={()=> window.open('mailto:Gabriel.Y.Demes@gmail.com?subject=Subject&body=Body%20goes%20here', '_blank')}/>
                    </div>
                </ContentDiv>

            </Container>

        </Section>
    )
}

export default About 