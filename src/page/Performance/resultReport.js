import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import ReportPerformCard from '../../component/card/cardReportPerform';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    text: {
        fontFamily: 'Prompt',
    }
}));

const ResultReport = () => {
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
                ผลการประเมิน Performance
            </Typography>
            <CardContent style={{ padding: 30 }}>
                <ReportPerformCard />
            </CardContent>
        </div>
    );
}

export default ResultReport;