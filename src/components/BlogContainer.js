import React, {useEffect, useState} from "react"
import BlogCard from "./BlogCard"

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

    const displayBlogs = blogs.map(blog => <BlogCard blog={blog}/>)

    

    return(
        <div>
            {displayBlogs}
        </div>
    )
}

export default BlogContainer