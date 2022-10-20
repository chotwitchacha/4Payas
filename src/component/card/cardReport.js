import React, { useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { CCard, CCardHeader, CCardBody, CCardText } from "@coreui/react";
import TableReport from "../table/tableReport";
import Data from "../stepStatus/questionMockup";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Radio, Space, Select } from 'antd';
import 'antd/dist/antd.css';
import { styled } from '@mui/material/styles';
import axios from "axios";
import { Container } from "semantic-ui-react";
import { ButtonGroup } from 'rsuite';
import { Button } from '@material-ui/core';
import ResultOne from "../table/TbPotential/resultQ1";
import ResultTwo from "../table/TbPotential/resultQ2";
import ResultThree from "../table/TbPotential/resultQ3";
import ResultFour from "../table/TbPotential/resultQ4";
import ResultFive from "../table/TbPotential/resultQ5";
import ResultSix from "../table/TbPotential/resultQ6";
import ResultSeven from "../table/TbPotential/resultQ7";
import ResultEigth from "../table/TbPotential/resultQ8";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
        height: 'max-content'
    },
    text_time: {
        fontFamily: 'Prompt',
        fontSize: '14px'
    },
    button: {
        backgroundColor: '#2F80ED',
        color: '#FFFFFF',
        borderRadius: 35,
        fontFamily: 'Prompt',
        marginLeft: 20,
        marginBlock: 20,
        fontSize: 14
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

const CardReport = () => {
    const classes = useStyles();
    const [value, setValue] = useState();
    const [date, setDate] = useState(data)
    const [list, setList] = useState()
    const [project,setProject] = useState([])
    const [question, setQuestion] = useState([])
    const [question2, setQuestion2] = useState([])
    const [mapData1, setMapData1] = useState([])
    const { Option } = Select;
    const arr1 = [];
    const num1 = [];
    const arr2 = [];
    const arr3 = [];
    const arr4 = [];
    const arr5 = [];
    const arr6 = [];
    const arr7 = [];
    const arr8 = [];
    const num2 = [];
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    
    useEffect(() => {
        axios.get('http://59be-2405-9800-b641-124a-987f-1d6b-45e9-2d1d.ngrok.io/api/project').
        then((res) => {
            setProject(res.data)
            console.log(project);
        })
    }, []);

    const dataprovider = project.map((item,index) => {
        return (
            <Option key={item.project_id} > {item.project_name} </Option>
        )
    })

    const handleChange = (value) => {
        setList(`${value}`) 
    }


    const getEmployee = () => {
        axios.post('http://59be-2405-9800-b641-124a-987f-1d6b-45e9-2d1d.ngrok.io/api/report',{
            timeline: value,
            project_id: list,
        })
        .then((res) => {
            setQuestion(res.data)
        })
    }

    // question1.map((item) => {
    //     return item.detail.map((i) => {
    //         return i.name.map((n) => {
    //             arr1.push({ name: n.name, checked: n.checked })
    //             num1.push({ name: n.name, checked: n.checked })
    //         })
    //     })
    // })
    console.log('question', question);

    for(let i = 0; i < question.length; i++){
        if (i === 0) {
            arr1.push(question[0])
        } else if (i === 1) {
            arr2.push(question[1])
        } else if (i === 2) {
            arr3.push(question[2])
        } else if (i === 3) {
            arr4.push(question[3])
        } else if (i === 4) {
            arr5.push(question[4])
        } else if (i === 5) {
            arr6.push(question[5])
        } else if (i === 6) {
            arr7.push(question[6])
        } else if (i === 7) {
            arr8.push(question[7])
        }
    }

    console.log('arr1', arr1);
    console.log('arr2', arr2);

    

    // console.log('testMap', arr1);
    

    return (
        <Box sx={{ flexGrow: 1 }} style={{ background: '#F3F6FB' }}>
            <Grid container spacing={2}>
                <Grid xs={12} md={5} lg={4}>
                <Item style={{ fontSize: 17, fontFamily: 'Prompt', textAlign: 'left', backgroundColor: '#153D77', color: '#fff' }}>ส่วนที่ 1 : เลือกโปรเจค</Item>
                    <Item style={{ marginBottom: 10 }}>
                        <div style={{backgroundColor: '#FFFFFF'}}>
                            <div style={{ fontFamily: 'Prompt', fontSize: 16, padding: 30, textAlign: 'left' }}>โปรดเลือกโปรเจค</div>
                            <Container>
                                <Select
                                        style={{ width: "100%" }}
                                        placeholder="เลือกโปรเจค"
                                        onChange={handleChange}
                                        value={list}
                                    >
                                        {dataprovider}
                                </Select>
                            </Container>
                            <div>
                            <div style={{ fontFamily: 'Prompt', fontSize: 16, padding: 30, textAlign: 'left' }}>ช่วงเวลา/รอบการประเมิน</div>
                            <div style={{display: 'flex', margin: '0 0 0 50px'}}>
                                <Radio.Group onChange={(e) => setValue(e.target.value)} value={value}>
                                    <Space direction="vertical">
                                        { date.map((index) => (
                                        <>
                                        <Radio className={classes.text_time} value={index.timeline}> รอบที่ {index.timeline}: {index.date}</Radio>
                                        
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
                        </div>
                    </Item>

                </Grid>
            <Grid container xs={12} md={7} lg={8} >
                <Grid xs={12} md={12} lg={12}>
                    <Item style={{ fontSize: 17, fontFamily: 'Prompt', textAlign: 'left', backgroundColor: '#153D77', color: '#fff' }}>ส่วนที่ 2 : ผลการประเมิน</Item>
                    <Item>
                        <div className={classes.div}>
                            <CCardBody>
                                <ResultOne data={arr1} projectId={list} timeline={value}/>
                                <ResultTwo data={arr2} />
                                <ResultThree data={arr3} />
                                <ResultFour data={arr4} />
                                <ResultFive data={arr5}/>
                                <ResultSix data={arr6} />
                                <ResultSeven data={arr7}/>
                                <ResultEigth data={arr8} />
                            </CCardBody>
                        </div>

                    </Item>
                </Grid>
            </Grid>
            </Grid>
        </Box>
    )
}

export default CardReport;