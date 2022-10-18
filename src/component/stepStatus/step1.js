import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "rsuite/dist/rsuite.css";
import { CCard, CCardHeader, CCardBody, CCardText } from "@coreui/react";
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

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
    divMain: {
        backgroundColor: '#153D77',
        fontFamily: 'Prompt',
        color: '#FFFFFF',
        borderRadius: 5,
        height: 40
    },
    div: {
        backgroundColor: '#FFFFFF',
        height: 'calc(100vh - 250px)'
    },
    fontFamily: {
        fontFamily: 'Prompt',
    },
    box: {
        backgroundColor: '#F3F6FB',
        fontFamily: 'Prompt',
        borderRadius: 5,
        width: 429,
        height: 55
    },
    formControl: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Prompt',
        marginTop: 16,
    },
    button: {
        backgroundColor: '#2F80ED',
        color: '#FFFFFF',
        borderRadius: 35,
        fontFamily: 'Prompt',
        marginLeft: 20
    }
}));


const Step1 = ({step}) => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.divMain} >
                <CCardHeader style={{ lineHeight: 2, marginLeft: 30, fontSize: 18 }}>ส่วนที่ 2: การจับคู่เปรียบเทียบคุณลักษณะ สมรรถนะ และผลการปฏิบัติงาน</CCardHeader>
            </div>
            <div className={classes.div}>
                <CCardBody>
                    <CCardText style={{ lineHeight: 2, marginLeft: 30, fontSize: 18, fontFamily: 'Prompt' }}> step {step} </CCardText>
                    <CCardText style={{ color: '#153D77', textAlign: 'center', fontFamily: 'Prompt' }}>เปรียบเทียบ</CCardText>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Box className={classes.box} >
                                <FormControl className={classes.formControl}>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                        <FormControlLabel value="1" control={<Radio />} label="ณัฐกร" />
                                        <FormControlLabel value="2" style={{ marginLeft: 20 }} control={<Radio />} label="ยอดรัก" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Box className={classes.box} style={{ marginTop: 1 }}>
                                <FormControl className={classes.formControl}>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                        <FormControlLabel value="1" control={<Radio />} label="ณัฐกร" />
                                        <FormControlLabel value="2" style={{ marginLeft: 20 }} control={<Radio />} label="ยอดรัก" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Box className={classes.box} style={{ marginTop: 1 }}>
                                <FormControl className={classes.formControl}>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                        <FormControlLabel value="1" control={<Radio />} label="ณัฐกร" />
                                        <FormControlLabel value="2" style={{ marginLeft: 20 }} control={<Radio />} label="ยอดรัก" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Box className={classes.box} style={{ marginTop: 1 }}>
                                <FormControl className={classes.formControl}>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                        <FormControlLabel value="1" control={<Radio />} label="ณัฐกร" />
                                        <FormControlLabel value="2" style={{ marginLeft: 20 }} control={<Radio />} label="ยอดรัก" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Box className={classes.box} style={{ marginTop: 1 }}>
                                <FormControl className={classes.formControl}>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                        <FormControlLabel value="1" control={<Radio />} label="ณัฐกร" />
                                        <FormControlLabel value="2" style={{ marginLeft: 20 }} control={<Radio />} label="ยอดรัก" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Box className={classes.box} style={{ marginTop: 1 }}>
                                <FormControl className={classes.formControl}>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                        <FormControlLabel value="1" control={<Radio />} label="ณัฐกร" />
                                        <FormControlLabel value="2" style={{ marginLeft: 20 }} control={<Radio />} label="ยอดรัก" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Box className={classes.box} style={{ marginTop: 1 }}>
                                <FormControl className={classes.formControl}>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                        <FormControlLabel value="1" control={<Radio />} label="ณัฐกร" />
                                        <FormControlLabel value="2" style={{ marginLeft: 20 }} control={<Radio />} label="ยอดรัก" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Box className={classes.box} style={{ marginTop: 1 }}>
                                <FormControl className={classes.formControl}>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                        <FormControlLabel value="1" control={<Radio />} label="ณัฐกร" />
                                        <FormControlLabel value="2" style={{ marginLeft: 20 }} control={<Radio />} label="ยอดรัก" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Box className={classes.box} style={{ marginTop: 1 }}>
                                <FormControl className={classes.formControl}>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                        <FormControlLabel value="1" control={<Radio />} label="ณัฐกร" />
                                        <FormControlLabel value="2" style={{ marginLeft: 20 }} control={<Radio />} label="ยอดรัก" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Box className={classes.box} style={{ marginTop: 1 }}>
                                <FormControl className={classes.formControl}>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                        <FormControlLabel value="1" control={<Radio />} label="ณัฐกร" />
                                        <FormControlLabel value="2" style={{ marginLeft: 20 }} control={<Radio />} label="ยอดรัก" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </div>
                    </div>
                </CCardBody>
            </div>
        </div>
    )
};

export default Step1;