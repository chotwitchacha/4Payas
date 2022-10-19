import { Box } from "@material-ui/core";
import React from "react";
import Grid from '@mui/material/Grid';
import Item from "antd/lib/list/Item";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Slider } from "@mui/material";
import { Input, Radio, Space, Button } from 'antd';
import 'antd/dist/antd.css';
import './modal.css'
import axios from "axios";

const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 9,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none', 
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#52af77',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
    '& .MuiSlider-mark': {
      backgroundColor: '#bfbfbf',
      height: 20,
      width: 2,
      '&.MuiSlider-markActive': {
        opacity: 1,
        backgroundColor: 'currentColor',
      },
    },
  });

const column = [];
const ratio = [];


for(let i = 0; i <= 2000; i++) {
    if (i % 200 ) {
    continue;
    }
    column.push({
    value: i,
    label: `${i}`
    })
};

for(let i = 0; i <= 100; i++) {
    if (i % 10 ) {
    continue;
    }
    ratio.push({
        value: i,
        label: `${i}`
    })
} 


const SubFormPerformance = ({show, setShow, employeeId, project, timeLine, employeeName}) => {
    const [value, setValue] = useState(0);
    const [radio, setRadio] = useState(1)
    const [persent, setPersent] = useState(0)
    const [waste, setWaste] = useState(0)
    const [hide, setHide] = useState()
    const [result, setResult] = useState([])
    const per ='%'

    const getText = (valu) => `${waste} ${per}`;
    const defaltText = (valu) => `${persent} ${per}`;

    const submit = (e) => {
        axios.post('http://localhost:8090/api/addSubPerform', {
            timeline: timeLine,
            employee_id: employeeId,
            value_added: value,
            perform_radtio: persent,
            waste: waste,
            project_id: project
        }).then((res) => {
            console.log("data",res.data);
            setHide(setShow)
        }).then((err) => {
            console.log(err);
        })
        axios.post('http://localhost:8090/api/Subresult',{
            timeline: timeLine,
            project_id: project,
            employee_id: employeeId
        })
        .then((res) => {
            console.log("api", res.data)
            setResult(res.data)
        })
        
    }
    
    console.log('employee_id', employeeId);
    // console.log('employeeId', employeeId);
    // console.log('project', project);
    // console.log('timeline', timeLine);
    // console.log('Value Added', value);
    // console.log('Ratio', persent);
    // console.log('Waste', waste);

    const content = show && (
        <div className="overlay">
            <div className="modal">
                <div className="modal-body">
                    <Item 
                        style={{ 
                            fontSize: 17, 
                            fontFamily: 'Prompt', 
                            textAlign: 'left', 
                            backgroundColor: '#153D77', 
                            color: '#fff',
                            padding: '20px',
                            borderRadius: '10px 10px 0 0'
                        }}>
                            ประเมิน Performance : {employeeName}
                    </Item>
                    <Item style={{backgroundColor: 'white'}}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box
                                    padding= '50px 50px 20px 50px'
                                >
                                    <Box 
                                        paddingBottom='25px'
                                        display= 'flex'
                                        flexDirection= 'column'
                                        alignItems= 'flex-start'
                                        >
                                        <p className="titel-text">1. ปริมาณงานที่ทำได้ (Value Added)</p>
                                        <PrettoSlider
                                            valueLabelDisplay="on"
                                            aria-label="pretto slider"
                                            defaultValue={0}
                                            max={2000}
                                            marks={column}
                                            onChange={(e) => setValue(e.target.value)}
                                            value={value}
                                        />
                                        <Radio.Group onChange={(e) => setRadio(e.target.value)} value={radio} className="radio-group">
                                            <Space direction="horizontal"  className="space-radio">
                                                <Radio value={'ตารางเมตร'}> ตารางเมตร</Radio>
                                                <Radio value={'ลูกบาศก์เมตร'}> ลูกบาศก์เมตร</Radio>
                                                <Radio value={'คิว'}> คิว</Radio>
                                                <Radio value={'อื่นๆ'}>
                                                อื่นๆ
                                                {radio === 4 ? (
                                                    <Input
                                                    style={{
                                                        width: 100,
                                                        marginLeft: 10,
                                                    }}
                                                    />
                                                ) : null}
                                                </Radio>
                                            </Space>
                                        </Radio.Group>
                                    </Box>
                                    <Box 
                                        paddingBottom='25px'
                                        display= 'flex'
                                        flexDirection= 'column'
                                        alignItems= 'flex-start'
                                    >
                                        <p className="titel-text">2. Performance Ratio</p>
                                        <PrettoSlider
                                            valueLabelDisplay="on"
                                            aria-label="pretto slider"
                                            defaultValue={0}
                                            max={100}
                                            marks={ratio}
                                            onChange={(e) => setPersent(e.target.value)}
                                            value={persent}
                                            valueLabelFormat={defaltText}
                                        />
                                    </Box>
                                    <Box paddingBottom='25px'
                                        display= 'flex'
                                        flexDirection= 'column'
                                        alignItems= 'flex-start'
                                    >
                                        <p className="titel-text">3. ปริมาณงานที่ทำเสียหาย (Waste)</p>
                                        <PrettoSlider
                                            valueLabelDisplay="on"
                                            aria-label="pretto slider"
                                            defaultValue={0}
                                            max={100}
                                            marks={ratio}
                                            onChange={(e) => setWaste(e.target.value)}
                                            value={waste}
                                            valueLabelFormat={getText}
                                        />
                                    </Box>
                                    <Box
                                        display= 'flex'
                                        justifyContent= 'flex-end'
                                    >
                                    <Button  shape="round" style={{backgroundColor: '#2F80ED', color: 'white'}} onClick={() => submit(hide)}>
                                        บันทึก
                                    </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Item>
                </div>

            </div>

        </div>
    )

    return content
}

export default SubFormPerformance;