import { React ,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { alpha, AppBar, Button, InputBase, Toolbar, Typography } from '@material-ui/core';
import { Cancel, Notifications, Search } from '@mui/icons-material';
import { borderRadius, flexbox } from '@mui/system';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar } from '@mui/material';


const useStyles = makeStyles(theme => ({
    logLg: {
        // display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        }
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-evenly",

    },
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",

        [theme.breakpoints.down("sm")]: {
            display: (props)=>props.open ? "flex" : "none"
        }
    },
    input: {
        color: "#fffff",
        marginLeft: theme.spacing(2),

    },
    searchIcon: {
        marginLeft: theme.spacing(2),
    },
    icons:{
        display:"flex",
        alignItems:"center",
        [theme.breakpoints.down("sm")]: {
            display: (props)=>props.open ? "none" : "flex"
        }
    },
    badge:{
        marginRight:theme.spacing(3),
    },
    searchBtn:{
        marginRight:theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
       display: "none !important",
        }
    },
    cancel:{
        marginRight:theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
       display: "none !important",
        },
        [theme.breakpoints.down("sm")]: {
            display: (props)=>props.open ? "flex" : "none"
        }
    }

}))
function Navbar() {
    const [open, setopen] = useState(false);
    const classes = useStyles({open});
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" component="h6" className={classes.logLg}>
                        logo large
                    </Typography>
                    {/* <Typography variant="h6" component="h6" className={classes.logsl}>
                        logo small
                    </Typography> */}
                    <div className={classes.search}>
                        <Search className={classes.searchIcon} />
                        <InputBase className={classes.input} placeholder="Search..."></InputBase>
                        <Cancel className={classes.cancel} onClick={()=>setopen(false)}/>
                    </div>
                    <div className={classes.icons}>
                    <Search className={classes.searchBtn} onClick={()=>setopen(true)} />
                        <Badge badgeContent={4} color="primary" className={classes.badge}>
                            <MailIcon color="action" />
                        </Badge>
                        <Badge badgeContent={4} color="primary"className={classes.badge}>
                            <Notifications color="action" />
                        </Badge>
                        <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/9777468/pexels-photo-9777468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className={classes.avatar}/>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
