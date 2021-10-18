import createTheme from '@material-ui/core/styles/createTheme';
import * as React from 'react';


 export const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#111",
    },

  },
  myButton:{
    backgroundColor:"red",
    color:"#fffff",
    border:"1px solid black"
  }
});
