import React, { useState, useEffect } from "react";
import { Header, Table, Rating ,Progress, TableHeader, Tab} from 'semantic-ui-react'
import groupBy from "lodash/groupBy";
import sumBy from "lodash/sumBy";

const TableChartProten = ({result}) => {
    const [data, setData] = useState([result]);
    const list = []
    const mapResult = [];
    const value = [];
    const valueMax = []
    const sumArray = [];
    

    result.map((item) => {
        return item.score.map((index) => {
            list.push({name: index.name, score: index.score})
            valueMax.push(index.score)
        })
    })

    const scoreMax = Math.max(...valueMax)


    const groupArrayResult = groupBy(list, "name");
    Object.entries(groupArrayResult).map(([key, values]) => {
        value.push({ key: key, scores: values });
      });
    
      console.log("value", value);

      Object.entries(groupArrayResult).map(([key, values]) => {
        sumArray.push(((((sumBy(values, "score")/scoreMax) *100) /800) *100).toFixed(2));
      });
    


    return(
        <>
            <Table celled fixed className="table">
                <Table.Header>
                    <Table.Row >
                        <Table.HeaderCell >รายชื่อ</Table.HeaderCell>
                        <Table.HeaderCell >1.คุณภาพ</Table.HeaderCell>
                        <Table.HeaderCell >2.การวางแผน</Table.HeaderCell>
                        <Table.HeaderCell >3.ความรู้ในงาน</Table.HeaderCell>
                        <Table.HeaderCell >4.ความน่าเชื่อถือ</Table.HeaderCell>
                        <Table.HeaderCell >5.วินัย</Table.HeaderCell>
                        <Table.HeaderCell >6.ความรับผิดชอบ</Table.HeaderCell>
                        <Table.HeaderCell >7.มนุษยสัมพันธ์</Table.HeaderCell>
                        <Table.HeaderCell >8.ความปลอดภัย</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        value.map((index) => (
                            <Table.Row key={index}>
                                <Table.Cell> {index.key} </Table.Cell>
                                {
                                    index.scores.map((item) => (
                                        <Table.Cell> <Progress progress='value' value={item.score} total={scoreMax}  color='pink'  /> </Table.Cell>

                                    ))
                                }
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </>
    )
}

 export default TableChartProten;