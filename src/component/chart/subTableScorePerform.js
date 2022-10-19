import React, { useState, useEffect } from "react";
import { Header, Table, Rating ,Progress, TableHeader, Tab, Segment} from 'semantic-ui-react'

const SubTableScorePerform = ({result}) => {
    const [data, setData] = useState([result]);
    const list = []
    

    result.map((item) => {
        return list.push({name: item.name, value_added: item.value_added, perform_radtio: item.perform_radtio, waste: item.waste })
    })

    console.log('list', list);
    return(
        <>
            <Table celled fixed className="table" >
                <Table.Header>
                    <Table.Row >
                        <Table.HeaderCell >รายชื่อ</Table.HeaderCell>
                        <Table.HeaderCell >ปริมาณงานที่ทำได้</Table.HeaderCell>
                        <Table.HeaderCell >Performance Ratio</Table.HeaderCell>
                        <Table.HeaderCell >Waste</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        list.map((index) => (
                            <Table.Row key={index}>
                                <Table.Cell >{index.name} </Table.Cell>
                                <Table.Cell> <Progress value={index.value_added} total={2000} color='teal' size='small' label={index.value_added}/> </Table.Cell>
                                <Table.Cell> <Progress  value={index.perform_radtio} total={100} color='violet' size='small' label={index.perform_radtio + '%'}/> </Table.Cell>
                                <Table.Cell><Progress  value={index.waste} total={100} color='purple' size='small' label={index.waste + '%'}/> </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </>
    )
}

 export default SubTableScorePerform;