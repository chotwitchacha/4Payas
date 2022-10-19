import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CardContent from '@material-ui/core/CardContent';
import CardDashbord from '../component/card/cardDashboard';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import {useParams} from "react-router-dom";

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

const Dashboard = ({data}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let history = useHistory();
  const { id }  = useParams();


  console.log('data', data);

  return (

    <div className={classes.root}>
      <AppBar position="static">
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

export default Dashboard;