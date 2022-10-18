import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ButtonGroup } from 'rsuite';
import { Button } from '@material-ui/core';
import { Container } from "semantic-ui-react";
import DropdownExampleSelection from "../dropdown/dropdownData";
import { Radio, Space } from 'antd';
import 'antd/dist/antd.css';
import axios from "axios";
import ScatterChart from "../chart/scatterChart";
import PotentailBar from "../chart/barPotentail";
import PerformanceBar from "../chart/barPerformance";



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
    },
    text_time: {
        fontFamily: 'Prompt',
        fontSize: '14px',
        paddingBottom: '10px'
    }
}));

const data = [
    {
        timeline: 'รอบที่ 1',
        date: '01/01/2022 - 07/01/2022'
    },
    {
        timeline: 'รอบที่ 2',
        date: '08/01/2022 - 14/01/2022'
    },
    {
        timeline: 'รอบที่ 3',
        date: '15/01/2022 - 21/01/2022'
    },
    {
        timeline: 'รอบที่ 4',
        date: '28/01/2022 - 31/01/2022'
    },

]

const CardCompare = () => {

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
    const [step, setStep] = useState(0);
    const onChange = nextStep => { setStep(nextStep < 0 ? 0 : nextStep > 7 ? 7 : nextStep) };
    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
    document.head.appendChild(styleLink);
    const [value, setValue] = useState();
    const [date, setDate] = useState(data)
    const [employee, setEmployee] = useState([])
    const [name, getName] = useState()
    const [hasData, setHasData] = useState();


    const onChangeRadio = (e) => {
        setValue(e.target.value);
    };

    const onChangeData = (e) => {
        console.log('radio checked', e.target.value);
        getName(e.target.value);
    };

    const getEmployee = () => {
        axios.get('http://localhost:8090/api/user')
            .then((res) => {
                setEmployee(res.data)
            })
    }

    return (
        //--------- ส่วนที่ 1 ---------//
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Box sx={{ flexGrow: 1 }} style={{ background: '#F3F6FB' }}>
                    <Item style={{ marginBottom: 10 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <div>
                                    <div style={{ fontFamily: 'Prompt', fontSize: 16, padding: 10, textAlign: 'left' }}>โปรดเลือกโปรเจค</div>
                                    <Container style={{ width: 250 }}>
                                        <DropdownExampleSelection />
                                    </Container>
                                </div>
                                <div>
                                    <div style={{ fontFamily: 'Prompt', fontSize: 16, padding: 10, textAlign: 'left' }}>ช่วงเวลา/รอบการประเมิน</div>
                                    <div style={{ display: 'flex', margin: '0 0 0 40px', fontSize: 14 }}>
                                        <Radio.Group onChange={onChangeRadio} value={value}>
                                            <Space direction="vertical">
                                                {date.map((index) => (
                                                    <>
                                                        <Radio className={classes.text_time} value={index}> {index.timeline}: {index.date}</Radio>

                                                    </>
                                                ))}

                                            </Space>
                                        </Radio.Group>
                                    </div>
                                </div>
                                <Grid item xs={11} style={{ textAlign: 'end' }} >
                                    <ButtonGroup >
                                        <Button onClick={getEmployee} className={classes.button}>
                                            ตกลง
                                        </Button>
                                    </ButtonGroup>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Item>

                    {/* --------- ส่วนที่ 2 --------- */}
                    <Item style={{ fontFamily: 'Prompt', fontSize: 16, padding: 10, textAlign: 'left' }}>รายชื่อสมาชิก
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <div>
                                    <div style={{ display: 'flex', margin: '20px 0 0 50px' }}>
                                        <Radio.Group onChange={onChangeData} value={name}>
                                            <Space direction="vertical">
                                                {employee.map((index) => (
                                                    <>
                                                        <Radio className={classes.text_time} value={index}> {index.name}</Radio>
                                                    </>
                                                ))}
                                            </Space>
                                        </Radio.Group>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Item>
                </Box>
            </Grid>

            <Grid item xs={8}>
                <Grid item xs={12}>
                    <Item style={{ fontSize: 17, fontFamily: 'Prompt', textAlign: 'left', backgroundColor: '#153D77', color: '#fff' }}>ผลการประเมิน Performance</Item>
                    <Item style={{ marginBottom: 10 }}>
                        <box style={{ display: 'flex' }}>
                            <Grid item xs={6}>
                                <p style={{ fontSize: 14, fontFamily: 'Prompt', textAlign: 'right', color: '#333333' }}>ผลการประเมินโดยหัวหน้า</p>
                                <PotentailBar />
                            </Grid>
                            <Grid item xs={6}>
                                <p style={{ fontSize: 14, fontFamily: 'Prompt', textAlign: 'right', color: '#333333' }}>ผลการประเมินตนเอง</p>
                                <PotentailBar />
                            </Grid>
                        </box>
                    </Item>
                </Grid>
            </Grid>

            <Grid item xs={4}> </Grid>
            <Grid item xs={8}>
                <Item style={{ fontSize: 17, fontFamily: 'Prompt', textAlign: 'left', backgroundColor: '#153D77', color: '#fff' }}>คะแนน Performance รายข้อ</Item>
                <Item style={{ marginBottom: 10 }}>
                    <Item style={{ fontSize: 16, fontFamily: 'Prompt', textAlign: 'center', color: '#333333' }}>1. ปริมาณงานที่ทำได้ </Item>
                    <box style={{ display: 'flex' }}>
                        <Grid item xs={6}>
                            <p style={{ fontSize: 14, fontFamily: 'Prompt', textAlign: 'right', color: '#333333', marginTop: 10 }}>ผลการประเมินโดยหัวหน้า</p>
                            <PotentailBar />
                        </Grid>

                        <Grid item xs={6}>
                            <p style={{ fontSize: 14, fontFamily: 'Prompt', textAlign: 'right', color: '#333333', marginTop: 10 }}>ผลการประเมินตนเอง</p>
                            <PotentailBar />
                        </Grid>
                    </box>
                </Item>
            </Grid>

            <Grid item xs={4}> </Grid>
            <Grid item xs={8}>
                <Item style={{ marginBottom: 10 }}>
                    <Item style={{ fontSize: 16, fontFamily: 'Prompt', textAlign: 'center', color: '#333333' }}>2. Performance Ratio </Item>
                    <box style={{ display: 'flex' }}>
                        <Grid item xs={6}>
                            <p style={{ fontSize: 14, fontFamily: 'Prompt', textAlign: 'right', color: '#333333', marginTop: 10 }}>ผลการประเมินโดยหัวหน้า</p>
                            <PotentailBar />
                        </Grid>
                        <Grid item xs={6}>
                            <p style={{ fontSize: 14, fontFamily: 'Prompt', textAlign: 'right', color: '#333333', marginTop: 10 }}>ผลการประเมินตนเอง</p>
                            <PotentailBar />
                        </Grid>
                    </box>
                </Item>
            </Grid>

            <Grid item xs={4}> </Grid>
            <Grid item xs={8}>
                <Item style={{ marginBottom: 10 }}>
                    <Item style={{ fontSize: 16, fontFamily: 'Prompt', textAlign: 'center', color: '#333333' }}>3. Waste </Item>
                    <box style={{ display: 'flex' }}>
                        <Grid item xs={6}>
                            <p style={{ fontSize: 14, fontFamily: 'Prompt', textAlign: 'right', color: '#333333', marginTop: 10 }}>ผลการประเมินโดยหัวหน้า</p>
                            <PotentailBar />
                        </Grid>
                        <Grid item xs={6}>
                            <p style={{ fontSize: 14, fontFamily: 'Prompt', textAlign: 'right', color: '#333333', marginTop: 10 }}>ผลการประเมินตนเอง</p>
                            <PotentailBar />
                        </Grid>
                    </box>
                </Item>
            </Grid>
        </Grid>
    )
};

export default CardCompare;