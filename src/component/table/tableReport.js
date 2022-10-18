import React from 'react';
import 'antd/dist/antd.css';
import './table.css';
import { Table, Typography } from 'antd';

const { Text } = Typography;
const columns = [
  {
    title: '',
    dataIndex: 'name',
  },
  {
    title: 'ณัฐกร',
    dataIndex: 'name',
  },
  {
    title: 'ยอดรัก',
    dataIndex: 'borrow',
  },
  {
    title: 'กำธร',
    dataIndex: 'repayment',
  },
  {
    title: 'ธนากร',
    dataIndex: 'repayment',
  },
  {
    title: 'เทพฤทธิ์',
    dataIndex: 'repayment',
  },
];

const data = [
  {
    key: '1',
    name: 'ณัฐกร',
    borrow: 0,
    repayment: 33,
  },
  {
    key: '2',
    name: 'ยอดรัก',
    borrow: 1,
    repayment: 0,
  },
  {
    key: '3',
    name: 'กำธร',
    borrow: 1,
    repayment: 10,
  },
  {
    key: '4',
    name: 'ธนากร',
    borrow: 1,
    repayment: 45,
  },
  {
    key: '5',
    name: 'เทพฤทธิ์',
    borrow: 0,
    repayment: 45,
  },
];

const TableReport = () => (
  <div>
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
      summary={(pageData) => {
        let totalBorrow = 0;
        let totalRepayment = 0;
        pageData.forEach(({ borrow, repayment }) => {
          totalBorrow += borrow;
          totalRepayment += repayment;
        });
        return (
          <>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0}>สรุปคะแนน</Table.Summary.Cell>
              <Table.Summary.Cell index={1}>
                <Text type="danger">{totalBorrow}</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={2} colSpan={4}>
                <Text>{totalRepayment}</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </>
        );
      }}
    />
  </div>
);

export default TableReport;