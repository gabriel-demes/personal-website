import React, {useEffect, useState} from "react"
import BlogCard from "./BlogCard"
import styled from 'styled-components'



const Section = styled.section`
    margin:0;
    padding-top:3em;
    height: 100vh;
    width: 100vw;
    background-color: #CCCCCC;
    background-size: cover;
    text-align: center;
`

const Div = styled.div`
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    overflow-x: scroll;
`
const BlogContainer = () => {

    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch(" https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgabrieldemes.medium.com%2Ffeed")
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setBlogs(data.items)
        })
    },[])

    const displayBlogs = blogs.map(blog => <BlogCard key={blog.title} blog={blog}/>)

    

    return(
        <Section>
            <h1>BLOGS</h1>
            <Div>
                {displayBlogs}
            </Div>
        </Section>
    )
}

export default BlogContainer