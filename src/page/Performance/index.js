import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import PerformanceCard from '../../component/card/cardPerformance';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    text: {
        fontFamily: 'Prompt',
    }
}));

const MainPerformance = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };


    return (
        <div className={classes.root}>
            <AppBar position="static">
            </AppBar>
            <Typography className={classes.text} variant="h5">
                แบบประเมิน Performance
            </Typography>
            <CardContent style={{ padding: 30 }}>
                <PerformanceCard />
            </CardContent>
        </div>
    );
}

export default MainPerformance;