import React, {useEffect} from 'react';
import { Button } from '@material-ui/core';
import { Steps, ButtonGroup } from 'rsuite';
import { makeStyles } from '@material-ui/core/styles';
import "rsuite/dist/rsuite.css";
import { CCard } from "@coreui/react";
import Step1 from '../multi-step/Step1';
import Step2 from '../multi-step/Step2';
import Step3 from '../multi-step/Step3';
import Step4 from '../multi-step/Step4';
import Step5 from '../multi-step/Step5';
import Step6 from '../multi-step/Step6';
import Step7 from '../multi-step/Step7';
import Step8 from '../multi-step/Step8';
import {useParams} from "react-router-dom";
import axios from "axios";

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
  },
  stepButton: {
    color: 'rgb(50, 180, 109)',
  }
}));

const StepStatus = () => {
  const classes = useStyles();
  const [step, setStep] = React.useState(0);
  const onChange = nextStep => { setStep(nextStep < 0 ? 0 : nextStep > 7 ? 7 : nextStep) };
  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);
  const [show, setShow] = React.useState(false);
  const [data,setData] = React.useState([])
  const { list } = useParams();
  const { value } = useParams();
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

    const sortData = data.sort((a, b) => (a.name > b.name ? 1 : -1));

     for (let i = 0; i < sortData.length - 1; i++) {
        for (let j = 0; j < i + 1; j++) {
            dataListA.push(sortData[j]);
            dataListA.sort((a, b) => (a.name > b.name ? 1 : -1));
        }
    }

    for (let i = 0; i < data.length - 1; i++) {
        for (let j = i + 1; j < data.length; j++) {
            dataListB.push(data[j]);
        }
    }

    let radio = [];

    for (var i = 0; i < dataListA.length; i++) {
      radio.push({
        uuid: `${dataListA[i].employee_id}${dataListB[i].employee_id}`,
        option: [
          {
            id: `${[i]}${dataListA[i].employee_id}`,
            name: `${dataListA[i].name}`
          },
          {
            id: `${[i]}${dataListB[i].employee_id}`,
            name: `${dataListB[i].name}`
          }
        ]
      });
    }

    console.log("radio", radio);
    console.log('timeline', value);

  const PageDisplay = () => {
    if (step === 0) {
      return <Step1 timeline={value} projectId={list} data={radio} onPrevious={onPrevious} onNext={onNext} setShow={setShow} step={step} allData={data} onChanges={onChange}/>;
    } else if (step === 1) {
      return <Step2 timeline={value} projectId={list} data={radio} onPrevious={onPrevious} onNext={onNext} setShow={setShow} step={step} allData={data} onChanges={onChange}/>;
    } else if (step === 2) {
      return <Step3 timeline={value} projectId={list} data={radio} onPrevious={onPrevious} onNext={onNext} setShow={setShow} step={step} allData={data} onChanges={onChange}/>;
    } else if (step === 3) {
      return <Step4 timeline={value} projectId={list} data={radio} onPrevious={onPrevious} onNext={onNext} setShow={setShow} step={step} allData={data} onChanges={onChange}/>;
    } else if (step === 4) {
      return <Step5 timeline={value} projectId={list} data={radio} onPrevious={onPrevious} onNext={onNext} setShow={setShow} step={step} allData={data} onChanges={onChange}/>;
    } else if (step === 5) {
      return <Step6 timeline={value} projectId={list} data={radio} onPrevious={onPrevious} onNext={onNext} setShow={setShow} step={step} allData={data} onChanges={onChange}/>;
    } else if (step === 6) {
      return <Step7 timeline={value} projectId={list} data={radio} onPrevious={onPrevious} onNext={onNext} setShow={setShow} step={step} allData={data} onChanges={onChange}/>;
    } else {
      return <Step8 timeline={value} projectId={list} data={radio} onPrevious={onPrevious} onNext={onNext} setShow={setShow} step={step} allData={data} onChanges={onChange}/>;
    }
  };

  

  console.log('data', data);

  return (
    <div>
      <Steps current={step} className={classes.stepButton}>
        <Steps.Item />
        <Steps.Item />
        <Steps.Item />
        <Steps.Item />
        <Steps.Item />
        <Steps.Item />
        <Steps.Item />
        <Steps.Item />
      </Steps>
      <hr />
      {/* แบบประเมิน */}
      <div className={classes.root}>
        <CCard>
          {/* {
            Data.map((index) => {
              <Step1
                text={index}
              />
            })
          } */}
          {/* <Step1
            text={Data.map((index) => (index.text[step]))}
          /> */}
          {PageDisplay()}

          {/* ปุ่ม กลับ/ถัดไป */}
          
        </ CCard>
      </div>
    </div>
  );
};

export default StepStatus;