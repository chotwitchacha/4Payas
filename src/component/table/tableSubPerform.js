import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Table} from 'antd';
import Button from "@material-ui/core/Button";

import SubFormPerformance from '../../page/subPerformance/subFormPerformance';
import { styled } from '@mui/material/styles';
import './table.css'
import { makeStyles } from '@material-ui/core/styles';

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
      fontSize: 14,
  },
  btnCheck: {
    '&:disabled': {
      backgroundColor:'#27AE60',
      color: '#FFFFFF',
      borderRadius: 35,
      fontFamily: 'Prompt',
      marginLeft: 20,
      marginBlock: 20,
      fontSize: 14,
    }
  }

}));

const data = [];

  for (let i = 1; i <= 5; i++) {
  data.push({
    key: i,
    name: Number(`${i}`) + ') ณัฐกร ทำดี',
    codeId: Number(`3045${i}`),
    position: `xxxx No. ${i}`,
  });
  }

const defaultTitle = () => 'Here is title';

const SubTablePerform = ({empolyee, project, timeline}) => {
  const classes = useStyles();
  const [bordered, setBordered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState('large');
  const [showTitle, setShowTitle] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [hasData, setHasData] = useState(true);
  const [tableLayout, setTableLayout] = useState(undefined);
  const [top, setTop] = useState('none');
  const [bottom, setBottom] = useState('bottomRight');
  const [ellipsis, setEllipsis] = useState(false);
  const [user, setUser] = useState(empolyee)
  const [sendName, setSendName] =useState()
  const [showModal, setShowModal] = useState(false)
  const [id, setId] = useState()
  const [sendData, setSendData] = useState()

  const [btnText, setBtnTeaxt] = useState("เริ่มการประเมิน")
  
  const tableProps = {
    bordered,
    loading,
    size,
    title: showTitle ? defaultTitle : undefined,
    showHeader,
    tableLayout,
  };

  const AddBtn = empolyee.map(object => {
    return {...object, btn: 'เริ่มการประเมิน'}
  })

  const [newData , setNewData] = useState(AddBtn)

  const onClick = (id) => {
      setShowModal(id);
      setSendData(id)
      setSendName(id.name)
      setId(id.id)
      console.log('id', id.id);
      console.log('name', id.name);
  }

  const hideModal = (value) => {
    setShowModal(false);
  }


  const columns = [
    {
      title: 'ชื่อ - นามสกุล',
      dataIndex: 'name',
      sorter: (a, b) => a.employee_id - b.employee_id,
    },
    {
      title: 'รหัสพนักงาน',
      dataIndex: 'employee_id',
      sorter: (a, b) => a.employee_id - b.employee_id,
    },
    {
      title: 'ตำแหน่ง',
      dataIndex: 'position_name',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) => (
        <>
        {
          record.Status == "TRUE" ? (
            <Button disabled className={classes.btnCheck} onClick={() => onClick({id: record.employee_id, name: record.name})} > ประเมินเรียบร้อยแล้ว</Button> 
          ) : (
            <Button className={classes.button} onClick={() => onClick({id: record.employee_id, name: record.name})} > เริ่มการประเมิน </Button> 
          )
        }
        {/* ( checkId === record.employee_id ? 
          <Button className={classes.btnCheck} onClick={() => onClick({id: record.employee_id, name: record.name})} > {record.btn} </Button> 
        : 
          <Button className={classes.button} onClick={() => onClick({id: record.employee_id, name: record.name})} > {record.btn} </Button>
        ) */}
        </>
      )
    }
  ];

  const tableColumns = columns.map((item) => ({ ...item, ellipsis }));



  return (
    <>
      <Table
        {...tableProps}
        pagination={{
          position: [top, bottom],
        }}
        columns={tableColumns}
        dataSource={hasData ? empolyee : []}
      />
      <SubFormPerformance
        project={project}
        timeLine={timeline}
        employeeId={id}
        show={showModal === sendData}
        setShow={() => hideModal(sendData)}
        employeeName={sendName}
      />
    </>
  );
};

export default SubTablePerform;