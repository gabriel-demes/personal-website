import React, {useEffect, useState} from "react"
import BlogCard from "./BlogCard"
import styled from 'styled-components'



const Section = styled.section`
    margin:0;
    padding-top:5em;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    background-size: cover;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
`

const Div = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    overflow-x: scroll;
    width: 80vw;
    margin: auto

`
const H1 = styled.h1`
    margin:0;
    padding:0;
    font-size: xx-large;
`
const BlogContainer = () => {

    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch(" https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgabrieldemes.medium.com%2Ffeed")
        .then(r => r.json())
        .then(data => {
            setBlogs(data.items)
        })
    },[])

    const displayBlogs = blogs.map(blog => <BlogCard key={blog.title} blog={blog}/>)

    

    return(
        <Section id="blogs">
            <H1>ARTICLES</H1>
            <Div className="blog-container">
                {displayBlogs}
            </Div>
        </Section>
    )
}

export default BlogContainer