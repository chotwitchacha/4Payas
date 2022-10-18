import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CardContent from '@material-ui/core/CardContent';
import CardDashbord from '../component/card/cardDashboard';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  media: {
    height: '90vh',
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  text: {
    fontFamily: 'Prompt',
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const user = JSON.parse(localStorage.getItem('user'));
  let history = useHistory();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    history.push("/");
  };


  return (

    <div className={classes.root}>
      <AppBar position="static">
        {/* <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Profile
          </Typography>
            <div>
             <IconButton onClick={handleMenu} color="inherit">
              <Avatar src={user.avatar} />
            </IconButton> 
             <Menu id="menu-appbar" 
              anchorEl={anchorEl} 
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu> 
          </div>
        </Toolbar> */}
      </AppBar>
      <Typography className={classes.text} variant="h5">
        Dashboard : สรุปการประเมิน
      </Typography>
      <CardContent style={{ padding: 30 }}>
        <CardDashbord />
      </CardContent>
    </div>
  );
}