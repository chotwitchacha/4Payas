import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import SubReportPerformCard from '../../component/subCard/subCardReportPerform';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    text: {
        fontFamily: 'Prompt',
    }
}));

const SubResultReport = () => {
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
                ผลการประเมิน Performance ลูกน้อง
            </Typography>
            <CardContent style={{ padding: 30 }}>
                <SubReportPerformCard />
            </CardContent>
        </div>
    );
}

export default SubResultReport;