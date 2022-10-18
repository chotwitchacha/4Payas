import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './table.css';
import { Table } from 'antd';
import axios from 'axios';

const columns = [
  {
    title: 'ชื่อ - นามสกุล',
    dataIndex: "name",
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
  }
];

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
const TableData = ({employee}) => {
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
  const tableColumns = columns.map((item) => ({ ...item, ellipsis }));
  const [user, setUser] = useState(employee)

  const tableProps = {
    bordered,
    loading,
    size,
    title: showTitle ? defaultTitle : undefined,
    showHeader,
    tableLayout,
  };
  
  console.log('user', user);
  
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

export default TableData;