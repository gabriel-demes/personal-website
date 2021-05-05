import React from "react"
import styled from 'styled-components'

const Section = styled.section`
    margin:0;
    padding-top:3em;
    height: 100vh;
    width: 100vw;
    background-color: #DDDDDD;
    background-size: cover;
    text-align: center;
`
const Container = styled.div`
    display:flex;
    justify-content: space-evenly;
    align-content: center;
`

const ContentDiv = styled.div`
    flex-grow:1;
    flex-shrink:1;
    flex-basis:0;
`

const H1 = styled.h1`
    margin:0;
    padding:;
`

const About = () => {

    return(
        <Section>
            <H1>ABOUT</H1>
            <Container>
                <ContentDiv>
                    Picture Goes HERE
                </ContentDiv>
                <ContentDiv>
                    About Me Details
                    <p>
                        Hi, My name is Gabriel and  I am a software engineer with a strong interest in speech technologies, computational linguistics, and solution-based problem solving. As a former Fulbright Scholar and a former educator, future employers can expect me to be an excellent team player, with a drive to continuously learn new technologies that’ll best serve the project/team at hand. My technical skills combined with my professional and educational backgrounds make me an ideal candidate for any team searching for a quick starter, a self motivator, and a boundary pusher.

                    </p>
                </ContentDiv>

            </Container>

        </Section>
    )
}

export default About 