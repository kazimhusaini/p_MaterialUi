import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@mui/material';
import Post from './Post';
const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(10),
        paddingLeft:theme.spacing(1),
        paddingRight:theme.spacing(1),
    }

}))
function Feeds() {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </Grid>
    );
}

export default Feeds;
