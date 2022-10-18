import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import MainSelectPotentail from '../../component/card/cardPotentail';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    text: {
        fontFamily: 'Prompt',
    }
}));

const MainPotential = () => {
    const classes = useStyles();
    


    return (
        <div className={classes.root}>
            <AppBar position="static">
            </AppBar>
            <Typography className={classes.text} variant="h5">
                แบบประเมิน Potential
            </Typography>
            <CardContent style={{ padding: 30 }}>
                <MainSelectPotentail />
            </CardContent>
        </div>
    );
}

export default MainPotential;