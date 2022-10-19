import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "rsuite/dist/rsuite.css";
import { CCard, CCardHeader, CCardBody, CCardText } from "@coreui/react";
import Box from '@mui/material/Box';
import { Radio, Space , Checkbox} from 'antd';
import 'antd/dist/antd.css';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { Steps, ButtonGroup } from 'rsuite';
import _ from "lodash";
import axios from 'axios';
import groupBy from "lodash/groupBy";
import sumBy from "lodash/sumBy";
import LoopData from './data';

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
        height: 1050
    },
    fontFamily: {
        fontFamily: 'Prompt',
    },
    box: {
        backgroundColor: '#F3F6FB',
        fontFamily: 'Prompt',
        borderRadius: 5,
        width: 520,
        height: '100%'
    },
    formControl: {
        alignItems: 'baseline',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Prompt',
        marginTop: 16,
        marginLeft: 20
    },
    button: {
        backgroundColor: '#2F80ED',
        color: '#FFFFFF',
        borderRadius: 35,
        fontFamily: 'Prompt',
        marginLeft: 20
    },
    radioBtn: {
        display: 'flex',
        justifyContent: 'center'
    },
    label: {
        padding: '0 50px 0 50px',
        width: '-webkit-fill-available'
    }
}));


const Step7 = ({data, onPrevious, onNext, setShow, step, allData, onChanges, timeline, projectId}) => {
    const classes = useStyles();
    const [radioValue, setRadioValue] = useState([])
    const totals = []
    const mreg = []
    const check = [];

    const onChange = (e, item) => {
        const id = e
        const setData = {
          uuid: item.uuid,
          data: id
        }
        // console.log("onChange", setData)
        if (_.size(radioValue) > 0) {
          const filterUUID = _.filter(radioValue, (e) => { return e.uuid === item.uuid })
          const filterData = _.filter(radioValue, (e) => { return e.data === id })
          if (_.size(filterUUID) > 0) {
            if (_.size(filterData) > 0) {
              const filer = _.filter(radioValue, (value) => { return value.data !== id })
              setRadioValue(filer);
            } else {
              const mapValuenew = radioValue.map(value => {
                return {
                  uuid: value.uuid,
                  data: value.uuid === item.uuid ? id : value.data
                }
              })
              setRadioValue(mapValuenew);
            }
          } else {
            if (_.size(filterData) > 0) {
              const filer = _.filter(radioValue, (value) => { return value.data !== id })
              setRadioValue(filer);
            } else {
              setRadioValue(current => [...current, setData]);
            }
          }
        } else {
          setRadioValue(current => [...current, setData]);
        }
      };

    const onClickConfirm = (value) => {
        onChanges(step+1)
    const dataSuccess = _.map(radioValue, (item, i) => {
        const filterSuccess = _.filter(data, (e) => { return e.uuid === item.uuid ? e.option : undefined })
        return {
        idRow: item.uuid,
        name: _.get(filterSuccess, '[0].option').map(value => {
            const filterID = _.filter(allData, (item) => { return value.name === item.name })
            return {
            name: value.name,
            id: _.get(filterID, '[0].employee_id'),
            checked: value.id === item.data ? 1 : 0
            }
        }),
        checked: item.data,

        }
    })
    console.log("Data Success", dataSuccess)
    axios.post('http://localhost:8090/api/insertReport',{
        project_id: projectId,
        timeline: timeline,
        question: step+1,
        detail: dataSuccess
    })
    .then((res) => {
        console.log("api", res.data)
        totals.push(res.data)
        console.log('totals', totals);
        totals.map((item) => {
            return item.detail.map((i) => {
                return i.name.map((n) => {
                    mreg.push({ name: n.name, checked: n.checked })
                })
            })
        })

        console.log('mreg', mreg);

        const Sort = mreg.sort((a, b) => (a.name > b.name ? 1 : -1));
        let grouppedArray = groupBy(Sort, "name");
        Object.entries(grouppedArray).map(([key, values]) => {
          check.push({name: key, score: sumBy(values, "checked")})
        })

        console.log('score', check);
        axios.post('http://localhost:8090/api/totalPotential',{
        project_id: projectId,
        timeline: timeline,
        question: step+1,
        score: check
        }).then((res) => {
            console.log('success', res);
        })
    })
    }

    const filterColor = (id) => {
        const filterData = _.filter(radioValue, (item) => { return item.data === id })
        if (_.size(filterData) > 0) {
          return true
        } else {
          return false
        }
      }

    return (
        <div>
            <div className={classes.divMain} >
                <CCardHeader style={{ lineHeight: 2, marginLeft: 30, fontSize: 18 }}>ส่วนที่ 2: การจับคู่เปรียบเทียบคุณลักษณะ สมรรถนะ และผลการปฏิบัติงาน</CCardHeader>
            </div>
            <div className={classes.div}>
                <CCardBody>
                    <CCardText style={{ lineHeight: 2, marginLeft: 30, fontSize: 18, fontFamily: 'Prompt' }}>7. มนุษยสัมพันธ์ และการอยู่ร่วมกัน : มีน้ำใจ เอื้อเฟื้อ และแบ่งปัน ต่อเพื่อนร่วมงาน และผู้อื่น </CCardText>
                    <CCardText style={{ color: '#153D77', textAlign: 'center', fontFamily: 'Prompt' }}>เปรียบเทียบ</CCardText>
                    {/* <box className={classes.radioBtn}>
                            <div>
                            {
                                data.map((index) => (
                                    <Radio.Group
                                        value={idChekedFromRequest}
                                        onChange={(e) => setIdChekedFromRequest(e.target.value)}
                                    >
                                        <Space direction="vertical">
                                        {index.option.map(({  employee_id, name }, idx) => (
                                            <>
                                            <Radio  value={employee_id}>{name} </Radio>
                                            </>
                                        ))}
                                        </Space>
                                    </Radio.Group>
                            ))}
                            </div>
                    </box> */}
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Box className={classes.box} >
                                <FormControl className={classes.formControl}>
                                {data && data.map((item, i) => {
                                    return (
                                    <div style={{ display: 'flex', justifyContent: 'center', width: '-webkit-fill-available', marginBottom: '20px' }}>
                                        {
                                        item.option.map(e =>
                                        (
                                            <div onClick={() => onChange(e.id, item)} style={{ cursor: 'pointer' , width: '-webkit-fill-available'}}>
                                            <Checkbox style={{marginRight: 10}} checked={filterColor(e.id)} />
                                            <span>{e.name}</span>
                                            </div>
                                        )

                                        )
                                        }
                                    </div>

                                    )
                                })}
                                </FormControl>
                            </Box>
                        </div>
                    </div>
                    <ButtonGroup style={{ float: 'right' }}>
                    { step >= 0 & step < 7 ? (
                        <>
                        <Button onClick={onPrevious} className={classes.button} >
                            กลับ
                        </Button>
                        <Button onClick={() => onClickConfirm()}  className={classes.button}>
                            ถัดไป
                        </Button>
                        </>
                        ) : (
                        <>
                            <Button onClick={() => setShow(true)} className={classes.button}>
                            บันทึก
                            </Button>
                            {/* <Dialog
                            show={show}
                            setShow={setShow}
                            >

                            </Dialog> */}
                        </>
                        
                        )
                        
                        }
                    </ButtonGroup>
                </CCardBody>
            </div>
        </div>
    )
};

export default Step7;