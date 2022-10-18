import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardReport from "../component/card/cardReport";
import axios from "axios";
import Data from "../component/stepStatus/questionMockup";


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

const ReportDetail = () => {

    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8090/api/report',{
            timeline:"1",
            project_id: "1"
        })
        .then((res) => {
            setData(res.data)
        })
      }, []);

      console.log('result', data);

    return (
        <div className={classes.root}>
            <AppBar position="static">
            </AppBar>
            <Typography className={classes.text} variant="h5">
                ผลการประเมิน Potential
            </Typography>
            <CardContent style={{ padding: 30 }}>
                <CardReport />
            </CardContent>
        </div>
    )
};

export default ReportDetail;