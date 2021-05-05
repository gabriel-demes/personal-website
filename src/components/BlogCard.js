import React from "react"
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });


const BlogCard = ({blog}) => {
    const classes = useStyles();
    return (

        <Card className={classes.root}>
            <CardActionArea>
                <a href={blog.link}>
            <CardHeader
                title={blog.title}
                subheader={new Date(blog.pubDate).toDateString()}
            />
            <CardMedia 
                className={classes.media}
                style = {{ height: "50"}}
                image={blog.thumbnail}
                title="fjenrfknr"
            />
            <CardContent>
                
            </CardContent>
            </a>code 
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary"> Share</Button>
            </CardActions>

        </Card>
    )
}

export default BlogCard