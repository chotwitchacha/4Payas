import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ButtonGroup } from 'rsuite';
import { Button } from '@material-ui/core';
import TableData from "../table/tableData";
import { Container } from "semantic-ui-react";
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import DropdownExampleSelection from "../dropdown/dropdownData";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    divMain: {
        backgroundColor: '#153D77',
        fontFamily: 'Prompt',
        color: '#FFFFFF',
        borderRadius: 5,
        height: 40
    },
    button: {
        backgroundColor: '#2F80ED',
        color: '#FFFFFF',
        borderRadius: 35,
        fontFamily: 'Prompt',
        marginLeft: 20,
        marginBlock: 20,
        fontSize: 14
    },
    stepButton: {
        color: 'rgb(50, 180, 109)',
    }
}));

const CardMain = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const ItemBox = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        marginBottom: 10,
        marginTop: 10
    }));

    const classes = useStyles();
    const [step, setStep] = React.useState(0);
    const onChange = nextStep => { setStep(nextStep < 0 ? 0 : nextStep > 7 ? 7 : nextStep) };
    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
    document.head.appendChild(styleLink);

    return (
        //--------- ส่วนที่ 1 ---------//
        <Box sx={{ flexGrow: 1 }} style={{ background: '#F3F6FB' }}>
            <Item style={{ fontSize: 17, fontFamily: 'Prompt', textAlign: 'left', backgroundColor: '#153D77', color: '#fff' }}>ส่วนที่ 1 : เลือกโปรเจค</Item>
            <Item style={{ marginBottom: 10 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <div>
                            <div style={{ fontFamily: 'Prompt', fontSize: 16, padding: 30, textAlign: 'left' }}>โปรดเลือกโปรเจค</div>
                            <Container>
                                <DropdownExampleSelection />
                            </Container>
                        </div>
                        {/* <StepStatus /> */}
                        <Grid item xs={11} style={{ textAlign: 'end' }} >
                            <ButtonGroup >
                                <Button onClick={onNext} className={classes.button}>
                                    ตกลง
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </Item>

            {/* //--------- ส่วนที่ 2 รายชื่อ ---------// */}
            <Item style={{ fontSize: 17, fontFamily: 'Prompt', textAlign: 'left', backgroundColor: '#153D77', color: '#fff' }}>รายชื่อสมาชิก</Item>
            <Item>
                <Grid container>
                    <Grid item xs={12}>
                        <TableData />
                        <Grid item xs={11} style={{ textAlign: 'end' }} >
                            <ButtonGroup >
                                <Button onClick={onNext} className={classes.button}>
                                    เริ่มประเมิน
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </Item>
        </Box>
    )
};

export default CardMain;