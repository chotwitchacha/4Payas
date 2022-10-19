import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './table.css';
import { Table, Button } from 'antd';
import FormPerformance from '../../page/Performance/FormPerformance';


const data = [];

  for (let i = 1; i <= 5; i++) {
  data.push({
    key: i,
    name: Number(`${i}`) + ') ณัฐกร ทำดี',
    codeId: Number(`3045${i}`),
    position: `xxxx No. ${i}`,
    workload: 1400,
    performance: 75,
    waste: 10
  });
  }

const defaultTitle = () => 'Here is title';

const SubTableResultPerform = ({employee}) => {
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
  const [user, setUser] = useState(employee)
 
  const [showModal, setShowModal] = useState(false)
  
  const tableProps = {
    bordered,
    loading,
    size,
    title: showTitle ? defaultTitle : undefined,
    showHeader,
    tableLayout,
  };
 
  const onClick = () => {
    setShowModal(true);
  }

  const hideModal = () => {
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
      sorter: (a, b) => a.employee_id - b.employee_id,
    },
    {
      title: 'ปริมาณงานที่ทำได้ (ลบ.ม./ตร.ม./คิว/อื่นๆ)',
      dataIndex: 'value_added',
      sorter: (a, b) => a.employee_id - b.employee_id,
      align: 'center'
    },
    {
        title: 'Performance Ratio (%)',
        dataIndex: 'perform_radtio',
        sorter: (a, b) => a.employee_id - b.employee_id,
        align: 'center'
    },
    {
        title: 'Waste (%)',
        dataIndex: 'waste',
        sorter: (a, b) => a.employee_id - b.employee_id,
        align: 'center'
    },
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
        dataSource={hasData ? user : []}
      />
    </>
  );
};

export default SubTableResultPerform;