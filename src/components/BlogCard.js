import React from "react"
import {Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import {
    FacebookIcon,
    FacebookShareButton,  
    LinkedinIcon, 
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton
} from "react-share"


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        backgroundColor: "#eee",
        margin: "2em",
        alignSelf: "auto",
        fontFamily: `'Montserrat', sans-serif`,
        
    },
    media: {
        height: 140,
    },
});


const BlogCard = ({blog}) => {
    const classes = useStyles();
    const theme = createMuiTheme({
        typography: {
          fontFamily: [
            'Montserrat',
            'sans-serif',
          ].join(','),
        },});
    return (
        <ThemeProvider theme={theme}>
        <div style={{flex: "10 0 auto"}}>
        <Card className={classes.root} raised={true} >
            <CardActionArea>
                <div onClick={()=> window.open(blog.link, '_blank')}>
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
            </div>
            </CardActionArea>
            <CardActions>
                
                <FacebookShareButton url={blog.link}>
                    <FacebookIcon round size={40}/>
                </FacebookShareButton>
                <TwitterShareButton url={blog.link}>
                    <TwitterIcon round size={40}/>
                </TwitterShareButton>
                <LinkedinShareButton url={blog.link}>
                    <LinkedinIcon round size={40}/>
                </LinkedinShareButton>
            </CardActions>

        </Card>
        </div>
        </ThemeProvider>
    )
}

export default BlogCard