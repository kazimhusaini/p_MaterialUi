import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Container, Typography } from '@mui/material';
import { Bookmark, Home, List, Person, PhotoCamera, PlayCircleOutline, TabletMac } from '@mui/icons-material';
import { Grid } from '@mui/material';
const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(10),
        height: "100vh",
        position:"sticky",
        top:0,
        backgroundColor: theme.palette.primary.main,
        color: "white",
        [theme.breakpoints.up("sm")]:{
            backgroundColor:"white",
            color:"#555",
            border:"1px solid #ece7e7"
        }
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
            
        }},
        texts: {
            fontWeight:500,
            [theme.breakpoints.down("sm")]: {
                display: "none !important",
                backgroundColor: "red"
            },
            [theme.breakpoints.up("sm")]:{
                fontSize:"18px !important",
            }
        },
        icon:{
            marginRight:theme.spacing(1),
            [theme.breakpoints.up("sm")]:{
                fontSize:"18px !important",
            }
            
        }

    
}  
))
function LeftBar() {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.texts}>
                    Home
                </Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icon} />
                <Typography className={classes.texts}>
                    Friends
                </Typography>
            </div>
            <div className={classes.item}>
                <List className={classes.icon} />
                <Typography className={classes.texts}>
                    Lists
                </Typography>
            </div>
            <div className={classes.item}>
                <PhotoCamera className={classes.icon} />
                <Typography className={classes.texts}>
                    Camera
                </Typography>
            </div>
            <div className={classes.item}>
                <PlayCircleOutline className={classes.icon} />
                <Typography className={classes.texts}>
                    Videos
                </Typography>
            </div>
            <div className={classes.item}>
                <TabletMac className={classes.icon} />
                <Typography className={classes.texts}>
                    Apps
                </Typography>
            </div>
            <div className={classes.item}>
                <Bookmark className={classes.icon} />
                <Typography className={classes.texts}>
                    Collection
                </Typography>
            </div>


        </Container>
    );
}

export default LeftBar;
