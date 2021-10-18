import  {React} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Card, CardActions } from '@material-ui/core';
const useStyles = makeStyles(theme=>({
    container:{
        paddingTop:theme.spacing(10),
      },
      cardmedia:{
          height:450,
          [theme.breakpoints.down("sm")]:{
            height:300,
          }
      },
      cards:{

      }

}))
function Post() {
  const classes= useStyles();
  return (
        <Card className={classes.cards}>
            <CardActionArea>
                <CardMedia className={classes.cardmedia} 
                image="https://images.pexels.com/photos/9730025/pexels-photo-9730025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="My Post"
               />
            </CardActionArea>
            <CardContent>
                <Typography variant="h5" >My First Post</Typography>
                <Typography variants="body2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
        </Card>
  );
}

export default Post;
