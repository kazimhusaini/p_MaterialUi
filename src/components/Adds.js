import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, Button, CardActionArea, CardContent, CardMedia, Container, Fab, FormLabel, Grid, MenuItem, Modal, Typography } from '@mui/material';
import { Card, CardActions, FormControlLabel, Radio, RadioGroup, Snackbar, TextField, Tooltip } from '@material-ui/core';
import { Add } from '@mui/icons-material';
import { width } from '@mui/system';

const useStyles = makeStyles(theme => ({
  fabAdd: {
    position: "fixed",
    right: 20,
    bottom: 20,
  },

  modalContainer: {
    width: "500px !important",
    height: "550px !important",
    backgroundColor: "white !important",
    position: "absolute !important",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto !important",
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "100vw  !important",
      height: "100vh  !important",
      borderRadius: "0",
    }
  },
  form: {
    width: "100% !important",
  },
  item: {
    width: "100% !important",
    marginTop: theme.spacing(3),
  },
  text: {
    width: "100% !important",
  },




}))
function Adds() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [openAlert, setOpenAlert] =useState(false);

  const alertHandleClick = () => {
    setOpenAlert(true);
    setOpen(false);
  };

  const alertHandleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <>
      <div className={classes.fabAdd}>
        <Tooltip title="Add" aria-label="add"  >
          <Fab color="primary">
            <Add onClick={handleOpen} />
          </Fab>
        </Tooltip>
      </div>
      <Modal
        open={open}
      // onClose={handleClose}
      >
        <Container className={classes.modalContainer}>
          <form className={classes.form}>
            <div className={classes.item}>
              <TextField label="Title" size="small" style={{ width: "100%" }} />

            </div>
            <div className={classes.item}>
              <TextField
                className={classes.text}
                style={{ width: "100%" }}
                multiline
                rows={4}
                size="small"
                variant="outlined"
                id="outlined-multiline-static"
                label="Description"
                defaultValue="Tell Your Story"
              />

            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-select-currency"
                select
                label="Visibility"
                className={classes.text}
              >
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="public">Private</MenuItem>
                <MenuItem value="public">UnListed</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel component="legend">who can comment?</FormLabel>
              <RadioGroup
                className={classes.text}
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value="Everybody" control={<Radio size="small" />} label="Everybody" />
                <FormControlLabel value="My Friends" control={<Radio size="small" />} label="My Friends" />
                <FormControlLabel value="Nobody" control={<Radio size="small" />} label="Nobody" />
                <FormControlLabel value="Custom" control={<Radio size="small" />} label="Custom (premium)" disabled />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button variant="outlined" color="primary" style={{ marginRight: 20 }} onClick={alertHandleClick}>Create</Button>
              <Button variant="outlined" color="secondary" style={{ marginRight: 20 }} onClick={handleClose}>Cancel</Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar open={openAlert} autoHideDuration={4000} onClose={alertHandleClose}>
        <Alert onClose={alertHandleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
}

export default Adds;
