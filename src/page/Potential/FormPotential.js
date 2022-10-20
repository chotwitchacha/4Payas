import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import StepStatus from '../../component/stepStatus';
import {useParams} from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    text: {
        fontFamily: 'Prompt',
    }
}));

const  FormPotential = (props) => 
{
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [data,setData] = React.useState([])
    const { list, value }  = useParams();
    const dataListA = [];
    const dataListB = [];

    useEffect(() => {
        axios.post('http://59be-2405-9800-b641-124a-987f-1d6b-45e9-2d1d.ngrok.io/api/personPotential',{
            project_id: list
        })
        .then((res) => {
            console.log("api", res.data)
            setData(res.data)
        })
      }, []);

     console.log('value', value); 

    return (
        <div className={classes.root}>
            <AppBar position="static">
            </AppBar>
            <Typography className={classes.text} variant="h5">
                แบบประเมิน Potential : ต้นสน
            </Typography>
            <CardContent style={{ padding: 30 }}>
                <StepStatus />
            </CardContent>
        </div>
    );
}

export default FormPotential;