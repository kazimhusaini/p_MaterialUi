import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Container, Divider, Grid, ImageList, ImageListItem, Link, Typography } from '@mui/material';
import { Avatar, AvatarGroup } from '@mui/material';
const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(10),
        position:"sticky",
        top:0,
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        color: "#555",
        width: "100%",
    },
    avatarGroup: {
        justifyContent: "flex-end",
    },
    link:{
        marginRight:"10px !important",
        fontWeight:"500 !important",
        fontSize:"18px !important",
        color:"#555 !important"
        

    }
}))
function RightBar() {
    const classes = useStyles();
    return (
        <Container container className={classes.container}>
            <Typography className={classes.title} variant="h6">Online Friends</Typography>
            <AvatarGroup max={4} className={classes.avatarGroup}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
            <Typography className={classes.title} variant="h6">Gallery</Typography>
            <ImageList
            sx={{ width: 500, height: 450 }}
            variant="quilted"
            cols={2}
            // rowHeight={121}
            >
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format" />
                </ImageListItem>


            </ImageList>
            <Typography className={classes.title} variant="h6">Categories</Typography>
            <Link href="#"  variant="body2" className={classes.link}>
               Sport
            </Link>
            <Link href="#"  variant="body2" className={classes.link}>
               Food
            </Link>
            <Divider flexItem style={{marginBottom:10}}/>
            <Link href="#"  variant="body2" className={classes.link}>
               Movies
            </Link>
            <Link href="#"  variant="body2" className={classes.link}>
               Science
            </Link>
        </Container>
    );
}

export default RightBar;
