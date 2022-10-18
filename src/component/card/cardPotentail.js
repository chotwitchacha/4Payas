import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ButtonGroup } from 'rsuite';
import { Button } from '@material-ui/core';
import TableData from '../../component/table/tableData';
import { Container } from "semantic-ui-react";
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Radio, Space, Select } from 'antd';
import 'antd/dist/antd.css';
import axios from "axios";
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
    text_time: {
        fontFamily: 'Prompt',
        fontSize: '14px'
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

const MainSelectPotentail = (props) => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const classes = useStyles();
    const [step, setStep] = useState(0);
    const onChange = nextStep => { setStep(nextStep < 0 ? 0 : nextStep > 7 ? 7 : nextStep) };
    const onPrevious = () => onChange(step - 1);
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
    document.head.appendChild(styleLink);
    const [value, setValue] = useState();
    const [date, setDate] = useState(data)
    const [employee, setEmpolyee] = useState()
    const [list, setList] = useState()
    const [project,setProject] = useState([])

    const { Option } = Select;
    const children = [];
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8090/api/project').
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

    const onChangeRadio = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const onNext = () => onChange(step + 1);

    const getEmployee = () => {
        axios.post('http://localhost:8090/api/user',{
            project_id: list
        })
        .then((res) => {
            console.log("api", res.data)
            setEmpolyee(res.data)
        })
    }

    const handleChange = (value) => {
        setList(`${value}`) 
    }

    const handleAssessment = () => {
        history.push(`/potential/assessment/${list}/${value}`)
    };

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
                    <div style={{ fontFamily: 'Prompt', fontSize: 16, padding: 30, textAlign: 'left' }}>ช่วงเวลาโปรเจค : 01/01/2022 - 31/01/2022</div>
                </div>
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

     {/* //--------- ส่วนที่ 2 รายชื่อ ---------// */}
     <Item style={{ fontSize: 17, fontFamily: 'Prompt', textAlign: 'left', backgroundColor: '#153D77', color: '#fff' }}>รายชื่อสมาชิก</Item>
     <Item>
         <Grid container>
             <Grid item xs={12}>
                 <TableData 
                    employee={employee}
                 />
                 <Grid item xs={11} style={{ textAlign: 'end' }} >
                     <ButtonGroup >
                         <Button onClick={handleAssessment}   className={classes.button}>
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

export default MainSelectPotentail;