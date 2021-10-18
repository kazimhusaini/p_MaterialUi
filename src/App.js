import logo from './logo.svg';
import './App.css';
import  {React} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Navbar from "./components/Navbar"
import { Grid } from '@mui/material';
import LeftBar from './components/LeftBar';
import { Feed } from '@mui/icons-material';
import RightBar from './components/RightBar';
import Feeds from './components/Feeds';
import Adds from './components/Adds';
const useStyles = makeStyles(theme=>({
    container:{
      // paddingTop:theme.spacing(10)
    },
    rightbar:{
  [theme.breakpoints.down("sm")]:{
    display:"none",
  }
    }
}))
function App() {
  const classes= useStyles();
  return (
    <div>
     <Navbar/>
      <Grid container className={classes.container}>
        <Grid item sm={2} xs={2}>
          <LeftBar/>
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feeds/>
        </Grid>
        <Grid item sm={3} className={classes.rightbar}>
          <RightBar/>
        </Grid>
      </Grid>
      <Adds/>
    </div>
  );
}

export default App;
