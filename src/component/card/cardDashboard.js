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
import { Radio, Space,  Select } from 'antd';
import 'antd/dist/antd.css';
import axios from "axios";
import ScatterChart from "../chart/scatterChart";
import PotentailBar from "../chart/barPotentail";
import PerformanceBar from "../chart/barPerformance";
import TableChartPerform from "../chart/tableChartPerform";
import TableChartProten from "../chart/tableChartPoten";



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
      timeline: '1',
      date: '01/01/2022-07/01/2022'
    },
    { 
      timeline: '2',
      date: '08/01/2022-14/01/2022'
    },
    { 
      timeline: '3',
      date: '15/01/2022-21/01/2022'
    },
    { 
      timeline: '4',
      date: '28/01/2022-31/01/2022'
    },
  
  ]

const CardDashbord = () => {

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
    const [list, setList] = useState()
    const [project,setProject] = useState([])
    const { Option } = Select;
    const [resultPorten, setResultPoten] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8090/api/project').
        then((res) => {
            setProject(res.data)
        })
    }, []);

    const dataprovider = project.map((item,index) => {
        return (
            <Option key={item.project_id} > {item.project_name} </Option>
        )
    })


    const onChangeRadio = (e) => {
        setValue(e.target.value);
    };

    const onChangeData = (e) => {
        console.log('radio checked', e.target.value);
        getName(e.target.value);
    };

    const initialdata = {
        timeline: value,
        project_id: list
    }

    console.log('list', initialdata);

    const getEmployee = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8090/api/chartPerform',{
            timeline: value,
            project_id: list
        })
        .then((res) => {
            console.log("api", res.data)
            setEmployee(res.data)
        })

        axios.post('http://localhost:8090/api/resultScore',{
            timeline: value,
            project_id: list
        })
        .then((res) => {
            console.log("api", res.data)
            setResultPoten(res.data)
        })


    }


    const handleChange = (value) => {
        setList(`${value}`) 
    }

    return (
        //--------- ส่วนที่ 1 ---------//
        <>
            {
                employee.length !== 0 ? (
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Box sx={{ flexGrow: 1 }} style={{ background: '#F3F6FB' }}>
                                <Item style={{ marginBottom: 10 }}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <div style={{ marginBottom: 20}}>
                                                <div style={{ fontFamily: 'Prompt', fontSize: 16, padding: 10, textAlign: 'left' }}>โปรดเลือกโปรเจค</div>
                                                <Container style={{ width: 250 }}>
                                                    <Select
                                                        style={{ width: "100%" }}
                                                        placeholder="เลือกโปรเจค"
                                                        onChange={handleChange}
                                                        value={list}
                                                    >
                                                        {dataprovider}
                                                    </Select>
                                                </Container>
                                            </div>
                                            <div>
                                                <div style={{ fontFamily: 'Prompt', fontSize: 16, padding: 10, textAlign: 'left' }}>ช่วงเวลา/รอบการประเมิน</div>
                                                <div style={{ display: 'flex', margin: '20px 0 0 40px', fontSize: 14 }}>
                                                    <Radio.Group onChange={onChangeRadio} value={value}>
                                                        <Space direction="vertical">
                                                            {date.map((index) => (
                                                                <>
                                                                    <Radio className={classes.text_time} value={index.timeline}> รอบที่{index.timeline}: {index.date}</Radio>

                                                                </>
                                                            ))}

                                                        </Space>
                                                    </Radio.Group>
                                                </div>
                                            </div>
                                            {/* <StepStatus /> */}
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
                                {/* <Item style={{ fontFamily: 'Prompt', fontSize: 16, padding: 10, textAlign: 'left' }}>รายชื่อสมาชิก
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
                                </Item> */}
                            </Box>
                        </Grid>

                        <Grid item xs={8}>
                            <Item style={{ fontSize: 17, fontFamily: 'Prompt', textAlign: 'left', backgroundColor: '#153D77', color: '#fff' }}>Summary</Item>
                            <Item style={{ marginBottom: 10 }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={8} style={{ marginLeft: 150 }}>
                                        <ScatterChart resultPerform={employee} resultPoten={resultPorten}/>
                                    </Grid>
                                </Grid>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            {/* <Item style={{ fontFamily: 'Prompt', fontSize: 16, padding: 10, textAlign: 'left' }}>รายชื่อสมาชิก
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
                            </Item> */}
                        </Grid>
                        <Grid item xs={4}>
                            <Item style={{ fontSize: 17, fontFamily: 'Prompt', textAlign: 'left', backgroundColor: '#153D77', color: '#fff' }}>Potentail</Item>
                            <Item style={{ marginBottom: 10 }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <PotentailBar  result={resultPorten}/>
                                    </Grid>
                                </Grid>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item style={{ fontSize: 17, fontFamily: 'Prompt', textAlign: 'left', backgroundColor: '#153D77', color: '#fff' }}>Performance</Item>
                            <Item style={{ marginBottom: 10 }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <PerformanceBar  result={employee}/>
                                    </Grid>
                                </Grid>
                            </Item>
                        </Grid>
                        <Grid item xs={4}> </Grid>
                        <Grid item xs={8}>
                            <Item style={{ fontSize: 17, fontFamily: 'Prompt', textAlign: 'left', backgroundColor: '#153D77', color: '#fff' }}>คะแนน Performance รายข้อ</Item>
                            <Item style={{ marginBottom: 10 }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <TableChartPerform result={employee}/>
                                    </Grid>
                                </Grid>
                            </Item>
                        </Grid>
                        <Grid item xs={4}> </Grid>
                        <Grid item xs={8}>
                            <Item style={{ fontSize: 17, fontFamily: 'Prompt', textAlign: 'left', backgroundColor: '#153D77', color: '#fff' }}>คะแนน Potentail รายข้อ</Item>
                            <Item style={{ marginBottom: 10 }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <TableChartProten  result={resultPorten}/>
                                    </Grid>
                                </Grid>
                            </Item>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Box sx={{ flexGrow: 1 }} style={{ background: '#F3F6FB' }}>
                                <Item style={{ marginBottom: 10 }}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <div style={{ marginBottom: 20}}>
                                                <div style={{ fontFamily: 'Prompt', fontSize: 16, padding: 10, textAlign: 'left' }}>โปรดเลือกโปรเจค</div>
                                                <Container style={{ width: 250 }}>
                                                    <Select
                                                        style={{ width: "100%" }}
                                                        placeholder="เลือกโปรเจค"
                                                        onChange={handleChange}
                                                        value={list}
                                                    >
                                                        {dataprovider}
                                                    </Select>
                                                </Container>
                                            </div>
                                            <div>
                                                <div style={{ fontFamily: 'Prompt', fontSize: 16, padding: 10, textAlign: 'left' }}>ช่วงเวลา/รอบการประเมิน</div>
                                                <div style={{ display: 'flex', margin: '20px 0 0 40px', fontSize: 14 }}>
                                                    <Radio.Group onChange={onChangeRadio} value={value}>
                                                        <Space direction="vertical">
                                                            {date.map((index) => (
                                                                <>
                                                                    <Radio className={classes.text_time} value={index.timeline}> รอบที่{index.timeline}: {index.date}</Radio>

                                                                </>
                                                            ))}

                                                        </Space>
                                                    </Radio.Group>
                                                </div>
                                            </div>
                                            {/* <StepStatus /> */}
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
                            </Box>
                        </Grid>

                        <Grid item xs={8}></Grid>
                        <Grid item xs={4}>
                            {/* <Item style={{ fontFamily: 'Prompt', fontSize: 16, padding: 10, textAlign: 'left' }}>รายชื่อสมาชิก
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
                            </Item> */}
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}> </Grid>
                        <Grid item xs={8}></Grid>
                        <Grid item xs={4}> </Grid>
                        <Grid item xs={8}></Grid>
                    </Grid>
                )
            } 
        </>
        
    )
};

export default CardDashbord;